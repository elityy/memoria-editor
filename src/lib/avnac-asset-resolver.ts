// SPDX-License-Identifier: AGPL-3.0-only

import type { AvnacDocument, SceneObject } from './avnac-scene'

/** Prefix used for asset references in scene object `src` fields */
export const ASSET_REF_PREFIX = 'asset:'

/** Check whether a string is an asset reference */
export function isAssetRef(src: string): boolean {
  return src.startsWith(ASSET_REF_PREFIX)
}

/** Extract the asset ID from an asset reference string */
export function getAssetId(src: string): string {
  return src.slice(ASSET_REF_PREFIX.length)
}

/** Build an asset reference string from an asset ID */
export function toAssetRef(assetId: string): string {
  return `${ASSET_REF_PREFIX}${assetId}`
}

type AssetResolverFn = (assetRef: string) => string | Promise<string>

/**
 * Walk all scene objects in a document and resolve any `asset:` prefixed
 * image `src` values using the provided resolver function.
 *
 * Returns a new document with resolved URLs. Does not mutate the input.
 */
export async function resolveDocumentAssets(
  doc: AvnacDocument,
  resolver: AssetResolverFn,
): Promise<AvnacDocument> {
  const resolvedObjects = await Promise.all(
    doc.objects.map(obj => resolveObjectAssets(obj, resolver)),
  )
  return { ...doc, objects: resolvedObjects }
}

async function resolveObjectAssets(
  obj: SceneObject,
  resolver: AssetResolverFn,
): Promise<SceneObject> {
  if (obj.type === 'image' && isAssetRef(obj.src)) {
    const resolved = await resolver(obj.src)
    return { ...obj, src: resolved }
  }
  if (obj.type === 'group' && obj.children) {
    const resolvedChildren = await Promise.all(
      obj.children.map(child => resolveObjectAssets(child, resolver)),
    )
    return { ...obj, children: resolvedChildren }
  }
  return obj
}

/**
 * Walk all pages in a multi-page document and resolve asset references.
 */
export async function resolveAllPagesAssets(
  doc: AvnacDocument,
  resolver: AssetResolverFn,
): Promise<AvnacDocument> {
  // Resolve objects on the active page
  const resolvedDoc = await resolveDocumentAssets(doc, resolver)

  // Resolve objects in stored pages
  if (resolvedDoc.pages && resolvedDoc.pages.length > 0) {
    const resolvedPages = await Promise.all(
      resolvedDoc.pages.map(async page => {
        const resolvedPageObjects = await Promise.all(
          page.objects.map(obj => resolveObjectAssets(obj, resolver)),
        )
        return { ...page, objects: resolvedPageObjects }
      }),
    )
    return { ...resolvedDoc, pages: resolvedPages }
  }

  return resolvedDoc
}
