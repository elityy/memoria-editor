// SPDX-License-Identifier: AGPL-3.0-only
import { type ReactNode } from 'react'
import CornerRadiusToolbarControl from './corner-radius-toolbar-control'
import {
  FloatingToolbarDivider,
  FloatingToolbarShell,
} from './floating-toolbar-shell'
import PaintPopoverControl from './paint-popover-control'
import type { BgValue } from './background-popover'

export type PlaceholderFitMode = 'cover' | 'contain' | 'fill'

export type PlaceholderToolbarModel = {
  fit: PlaceholderFitMode
  cornerRadius: number
  cornerRadiusMax: number
  borderColor: string
  label: string
}

type Props = {
  model: PlaceholderToolbarModel
  onFitChange: (fit: PlaceholderFitMode) => void
  onCornerRadius: (px: number) => void
  onBorderColorChange: (color: string) => void
  footerSlot?: ReactNode
}

const FIT_OPTIONS: { value: PlaceholderFitMode; label: string }[] = [
  { value: 'cover', label: 'Cover' },
  { value: 'contain', label: 'Contain' },
  { value: 'fill', label: 'Fill' },
]

export default function PlaceholderToolbar({
  model,
  onFitChange,
  onCornerRadius,
  onBorderColorChange,
  footerSlot,
}: Props) {
  const borderPaint: BgValue = { type: 'solid', color: model.borderColor || '#ffb88e' }

  return (
    <FloatingToolbarShell>
      {/* Fit mode selector */}
      <div className="flex items-center gap-0.5 px-1">
        {FIT_OPTIONS.map(opt => (
          <button
            key={opt.value}
            type="button"
            className={[
              'rounded-md px-2 py-1 text-[11px] font-medium transition-colors',
              model.fit === opt.value
                ? 'bg-black/10 text-neutral-900'
                : 'text-neutral-500 hover:bg-black/5 hover:text-neutral-700',
            ].join(' ')}
            onClick={() => onFitChange(opt.value)}
            aria-pressed={model.fit === opt.value}
            title={`Fit: ${opt.label}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <FloatingToolbarDivider />

      {/* Border color */}
      <PaintPopoverControl
        compact
        value={borderPaint}
        onChange={(bg: BgValue) => {
          if (bg.type === 'solid') onBorderColorChange(bg.color)
        }}
        title="Border color"
        ariaLabel="Placeholder border color"
      />
      <FloatingToolbarDivider />

      {/* Corner radius */}
      <CornerRadiusToolbarControl
        value={model.cornerRadius}
        max={model.cornerRadiusMax}
        onChange={onCornerRadius}
      />

      {footerSlot ? (
        <>
          <FloatingToolbarDivider />
          {footerSlot}
        </>
      ) : null}
    </FloatingToolbarShell>
  )
}
