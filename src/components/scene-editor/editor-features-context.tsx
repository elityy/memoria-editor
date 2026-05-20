// SPDX-License-Identifier: AGPL-3.0-only
import { createContext, type ReactNode, useContext, useMemo } from 'react'
import type { MemoriaEditorConfig } from '../../types/editor-api'

/**
 * Resolved feature flags — all booleans, defaults applied.
 */
export type EditorFeatures = {
  ai: boolean
  qrCode: boolean
  icons: boolean
  vectorBoards: boolean
  imageUpload: boolean
  stockImages: boolean
  apps: boolean
  layers: boolean
  export: boolean
}

const DEFAULTS: EditorFeatures = {
  ai: false,
  qrCode: true,
  icons: true,
  vectorBoards: true,
  imageUpload: true,
  stockImages: true,
  apps: true,
  layers: true,
  export: true,
}

export function resolveFeatures(config?: MemoriaEditorConfig): EditorFeatures {
  const f = config?.features
  if (!f) return DEFAULTS
  return {
    ai: f.ai ?? DEFAULTS.ai,
    qrCode: f.qrCode ?? DEFAULTS.qrCode,
    icons: f.icons ?? DEFAULTS.icons,
    vectorBoards: f.vectorBoards ?? DEFAULTS.vectorBoards,
    imageUpload: f.imageUpload ?? DEFAULTS.imageUpload,
    stockImages: f.stockImages ?? DEFAULTS.stockImages,
    apps: f.apps ?? DEFAULTS.apps,
    layers: f.layers ?? DEFAULTS.layers,
    export: f.export ?? DEFAULTS.export,
  }
}

const EditorFeaturesContext = createContext<EditorFeatures>(DEFAULTS)

export function EditorFeaturesProvider({
  config,
  children,
}: {
  config?: MemoriaEditorConfig
  children: ReactNode
}) {
  const features = useMemo(() => resolveFeatures(config), [config])
  return (
    <EditorFeaturesContext.Provider value={features}>
      {children}
    </EditorFeaturesContext.Provider>
  )
}

export function useEditorFeatures(): EditorFeatures {
  return useContext(EditorFeaturesContext)
}
