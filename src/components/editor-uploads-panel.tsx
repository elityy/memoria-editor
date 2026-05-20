// SPDX-License-Identifier: AGPL-3.0-only
import { Cancel01Icon, CloudUploadIcon, Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { AssetLibraryItem } from '../lib/avnac-asset-library'
import { loadImageMetadata } from '../lib/avnac-image-proxy'
import {
  editorSidebarPanelLeftClass,
  editorSidebarPanelTopClass,
} from '../lib/editor-sidebar-panel-layout'
import { useAssetLibrary } from './scene-editor/asset-library-context'
import { useEditorStore } from './scene-editor/editor-store'

type Props = {
  open: boolean
  onClose: () => void
}

const GRID_COLS = 3

export default function EditorUploadsPanel({ open, onClose }: Props) {
  const { onFetchAssets, onAssetUpload } = useAssetLibrary()
  const doc = useEditorStore(state => state.doc)
  const setDoc = useEditorStore(state => state.setDoc)
  const setSelectedIds = useEditorStore(state => state.setSelectedIds)

  const [assets, setAssets] = useState<AssetLibraryItem[]>([])
  const [nextCursor, setNextCursor] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const fetchIdRef = useRef(0)

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState('')
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), 300)
    return () => clearTimeout(t)
  }, [search])

  // Fetch assets on open or search change
  useEffect(() => {
    if (!open || !onFetchAssets) return

    const id = ++fetchIdRef.current
    setIsLoading(true)
    setError(null)

    onFetchAssets({ search: debouncedSearch || undefined })
      .then(result => {
        if (id !== fetchIdRef.current) return
        setAssets(result.items)
        setNextCursor(result.nextCursor)
      })
      .catch(err => {
        if (id !== fetchIdRef.current) return
        setError(err instanceof Error ? err.message : 'Failed to load assets')
      })
      .finally(() => {
        if (id !== fetchIdRef.current) return
        setIsLoading(false)
      })
  }, [open, onFetchAssets, debouncedSearch])

  // Load more (pagination)
  const loadMore = useCallback(() => {
    if (!onFetchAssets || !nextCursor || isLoadingMore) return

    const id = ++fetchIdRef.current
    setIsLoadingMore(true)

    onFetchAssets({ cursor: nextCursor, search: debouncedSearch || undefined })
      .then(result => {
        if (id !== fetchIdRef.current) return
        setAssets(prev => [...prev, ...result.items])
        setNextCursor(result.nextCursor)
      })
      .catch(() => {
        // Silently fail load-more — user can scroll again
      })
      .finally(() => {
        if (id !== fetchIdRef.current) return
        setIsLoadingMore(false)
      })
  }, [onFetchAssets, nextCursor, isLoadingMore, debouncedSearch])

  // Infinite scroll detection
  useEffect(() => {
    const el = scrollRef.current
    if (!el || !nextCursor) return

    const onScroll = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 80) {
        loadMore()
      }
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [nextCursor, loadMore])

  // Place asset on canvas
  const placeAsset = useCallback(
    async (asset: AssetLibraryItem) => {
      const meta = await loadImageMetadata(asset.url).catch(() => ({
        src: asset.url,
        naturalWidth: asset.widthPx,
        naturalHeight: asset.heightPx,
      }))
      const maxEdge = 800
      let w = meta.naturalWidth
      let h = meta.naturalHeight
      const scale = Math.min(1, maxEdge / Math.max(w, h))
      w = Math.round(w * scale)
      h = Math.round(h * scale)
      const x = Math.round(doc.artboard.width / 2 - w / 2)
      const y = Math.round(doc.artboard.height / 2 - h / 2)

      const obj = {
        id: crypto.randomUUID(),
        type: 'image' as const,
        x,
        y,
        width: w,
        height: h,
        rotation: 0,
        opacity: 1,
        visible: true,
        locked: false,
        blurPct: 0,
        shadow: null,
        src: meta.src,
        naturalWidth: meta.naturalWidth,
        naturalHeight: meta.naturalHeight,
        crop: { x: 0, y: 0, width: meta.naturalWidth, height: meta.naturalHeight, rotation: 0 },
        cornerRadius: 0,
        stroke: null,
        strokeWidth: 0,
        name: asset.name || undefined,
      }

      setDoc(prev => ({ ...prev, objects: [...prev.objects, obj] }))
      setSelectedIds([obj.id])
      onClose()
    },
    [doc.artboard.width, doc.artboard.height, onClose, setDoc, setSelectedIds],
  )

  // Upload file
  const handleUpload = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0 || !onAssetUpload) return

      setIsUploading(true)
      try {
        const file = files[0]!
        const result = await onAssetUpload(file)

        // Add uploaded asset to list immediately
        const newItem: AssetLibraryItem = {
          id: result.assetId ?? crypto.randomUUID(),
          name: file.name,
          thumbnailUrl: result.url,
          url: result.url,
          widthPx: result.width ?? 800,
          heightPx: result.height ?? 800,
          mimeType: file.type,
          createdAt: new Date().toISOString(),
        }
        setAssets(prev => [newItem, ...prev])
      } catch {
        setError('Upload failed')
      } finally {
        setIsUploading(false)
        if (fileInputRef.current) fileInputRef.current.value = ''
      }
    },
    [onAssetUpload],
  )

  // Filtered display
  const displayedAssets = useMemo(() => {
    // Search is handled server-side via onFetchAssets, but apply local filter
    // for assets added optimistically from uploads
    if (!debouncedSearch) return assets
    const q = debouncedSearch.toLowerCase()
    return assets.filter(
      a => (a.name?.toLowerCase().includes(q)) || a.mimeType.includes(q),
    )
  }, [assets, debouncedSearch])

  if (!open) return null

  const hasCallbacks = !!onFetchAssets

  return (
    <div
      data-avnac-chrome
      className={[
        'pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,320px)] max-h-[min(92dvh,640px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md',
        editorSidebarPanelLeftClass,
        editorSidebarPanelTopClass,
      ].join(' ')}
      role="dialog"
      aria-label="Assets"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/[0.06] px-3 py-2">
        <span className="text-sm font-semibold text-neutral-800">Assets</span>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]"
          onClick={onClose}
          aria-label="Close assets"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={1.75} />
        </button>
      </div>

      {/* Search + Upload */}
      <div className="flex gap-1.5 border-b border-black/[0.06] px-2.5 py-2">
        <div className="relative flex-1">
          <HugeiconsIcon
            icon={Search01Icon}
            size={15}
            strokeWidth={1.75}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            type="text"
            placeholder="Search assets..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="h-8 w-full rounded-xl border border-black/[0.06] bg-neutral-50 pl-8 pr-2.5 text-xs text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-1 focus:ring-neutral-200"
          />
        </div>
        {onAssetUpload ? (
          <>
            <button
              type="button"
              disabled={isUploading}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-neutral-50 text-neutral-600 hover:bg-neutral-100 disabled:opacity-50"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Upload asset"
            >
              <HugeiconsIcon icon={CloudUploadIcon} size={16} strokeWidth={1.75} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/svg+xml,image/webp"
              className="hidden"
              onChange={e => void handleUpload(e.target.files)}
            />
          </>
        ) : null}
      </div>

      {/* Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-2.5">
        {!hasCallbacks ? (
          <div className="px-3 py-8 text-center text-sm text-neutral-500">
            Asset library not connected
          </div>
        ) : isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-transparent" />
          </div>
        ) : error ? (
          <div className="px-3 py-6 text-center text-xs text-red-500">{error}</div>
        ) : displayedAssets.length === 0 ? (
          <div className="px-3 py-8 text-center text-sm text-neutral-500">
            {debouncedSearch ? 'No matching assets' : 'No assets yet — upload one to get started'}
          </div>
        ) : (
          <>
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)` }}
            >
              {displayedAssets.map(asset => (
                <AssetThumbnail
                  key={asset.id}
                  asset={asset}
                  onClick={() => void placeAsset(asset)}
                />
              ))}
            </div>
            {isLoadingMore ? (
              <div className="flex justify-center py-3">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-transparent" />
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* Upload progress overlay */}
      {isUploading ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="text-center">
            <div className="mx-auto mb-2 h-5 w-5 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
            <span className="text-xs text-neutral-600">Uploading...</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}

// ── Thumbnail grid item ──────────────────────────────────────────

function AssetThumbnail({
  asset,
  onClick,
}: {
  asset: AssetLibraryItem
  onClick: () => void
}) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-black/[0.06] bg-neutral-50 transition-colors hover:border-neutral-300 hover:bg-neutral-100"
      title={asset.name ?? 'Unnamed asset'}
    >
      {!errored ? (
        <img
          src={asset.thumbnailUrl}
          alt={asset.name ?? 'Asset'}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={[
            'h-full w-full object-contain p-1 transition-opacity',
            loaded ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
      ) : (
        <span className="text-[10px] text-neutral-400">Error</span>
      )}
      {!loaded && !errored ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 animate-spin rounded-full border border-neutral-300 border-t-transparent" />
        </div>
      ) : null}
      {/* Hover overlay with name */}
      {asset.name ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-1.5 pb-1 pt-4 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="block truncate text-[10px] font-medium text-white">
            {asset.name}
          </span>
        </div>
      ) : null}
    </button>
  )
}
