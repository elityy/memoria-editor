// SPDX-License-Identifier: AGPL-3.0-only
import { createContext, type ReactNode, useContext } from 'react'
import type { OnFetchAssets } from '../../lib/avnac-asset-library'

type AssetLibraryContextValue = {
  onFetchAssets: OnFetchAssets | null
  onAssetUpload:
    | ((file: File) => Promise<{ url: string; assetId?: string; width?: number; height?: number }>)
    | null
  assetResolver: ((assetRef: string) => string | Promise<string>) | null
}

const AssetLibraryContext = createContext<AssetLibraryContextValue>({
  onFetchAssets: null,
  onAssetUpload: null,
  assetResolver: null,
})

export function AssetLibraryProvider({
  children,
  onFetchAssets,
  onAssetUpload,
  assetResolver,
}: {
  children: ReactNode
  onFetchAssets?: OnFetchAssets | null
  onAssetUpload?: AssetLibraryContextValue['onAssetUpload']
  assetResolver?: AssetLibraryContextValue['assetResolver']
}) {
  return (
    <AssetLibraryContext.Provider
      value={{
        onFetchAssets: onFetchAssets ?? null,
        onAssetUpload: onAssetUpload ?? null,
        assetResolver: assetResolver ?? null,
      }}
    >
      {children}
    </AssetLibraryContext.Provider>
  )
}

export function useAssetLibrary() {
  return useContext(AssetLibraryContext)
}
