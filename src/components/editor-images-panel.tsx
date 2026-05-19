import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  editorSidebarPanelLeftClass,
  editorSidebarPanelTopClass,
} from '../lib/editor-sidebar-panel-layout'

type Props = {
  open: boolean
  onClose: () => void
}

export default function EditorImagesPanel({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div
      data-avnac-chrome
      className={[
        'pointer-events-auto fixed z-40 flex w-[min(100vw-1.5rem,340px)] max-h-[min(92dvh,720px)] flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-md',
        editorSidebarPanelLeftClass,
        editorSidebarPanelTopClass,
      ].join(' ')}
      role="dialog"
      aria-label="Images"
    >
      <div className="flex shrink-0 items-start justify-between border-b border-black/[0.06] px-3 py-2">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-neutral-800">Images</div>
        </div>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 hover:bg-black/[0.06]"
          onClick={onClose}
          aria-label="Close images"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={1.75} />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden p-6">
        <p className="text-center text-[13px] text-neutral-500">
          Asset library coming soon.
        </p>
      </div>
    </div>
  )
}
