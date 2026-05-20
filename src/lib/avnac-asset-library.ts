// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Types for the asset library panel.
 * The host app provides assets via callback — no direct API calls from the AGPL editor.
 */

export type AssetLibraryItem = {
  /** Unique identifier for the asset */
  id: string
  /** Display name (filename or user-given name) */
  name: string | null
  /** Loadable thumbnail/preview URL */
  thumbnailUrl: string
  /** Full-resolution URL for placing on canvas */
  url: string
  /** Natural width in pixels */
  widthPx: number
  /** Natural height in pixels */
  heightPx: number
  /** MIME type (e.g. "image/png") */
  mimeType: string
  /** ISO date string */
  createdAt: string
}

export type AssetLibraryFetchResult = {
  items: AssetLibraryItem[]
  /** Opaque cursor for pagination — null when no more pages */
  nextCursor: string | null
}

export type OnFetchAssets = (opts?: {
  cursor?: string | null
  search?: string
}) => Promise<AssetLibraryFetchResult>
