// SPDX-License-Identifier: AGPL-3.0-only
export type ArtboardPreset = {
  id: string
  label: string
  category: ArtboardPresetCategory
  /** Artboard width in pixels */
  width: number
  /** Artboard height in pixels */
  height: number
  /** Physical width in mm (print presets) */
  widthMm?: number
  /** Physical height in mm (print presets) */
  heightMm?: number
  /** DPI for print presets */
  dpi?: number
}

export type ArtboardPresetCategory = 'general' | 'social-media' | 'presentation' | 'print'

/** mm × (dpi / 25.4) rounded */
function mmPx(mm: number, dpi: number): number {
  return Math.round((mm / 25.4) * dpi)
}

export const ARTBOARD_PRESETS: readonly ArtboardPreset[] = [
  // ── General ──
  {
    id: 'custom-4000',
    label: 'Large square (4000)',
    category: 'general',
    width: 4000,
    height: 4000,
  },
  // ── Social media ──
  {
    id: 'ig-square',
    label: 'Instagram square (1080)',
    category: 'social-media',
    width: 1080,
    height: 1080,
  },
  {
    id: 'ig-portrait',
    label: 'Instagram portrait (1080×1350)',
    category: 'social-media',
    width: 1080,
    height: 1350,
  },
  {
    id: 'ig-story',
    label: 'Story / Reels (1080×1920)',
    category: 'social-media',
    width: 1080,
    height: 1920,
  },
  {
    id: 'twitter-post',
    label: 'X / Twitter post (1200×675)',
    category: 'social-media',
    width: 1200,
    height: 675,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn share (1200×627)',
    category: 'social-media',
    width: 1200,
    height: 627,
  },
  {
    id: 'youtube-thumb',
    label: 'YouTube thumbnail (1280×720)',
    category: 'social-media',
    width: 1280,
    height: 720,
  },
  // ── Presentation ──
  {
    id: 'hd',
    label: 'HD (1920×1080)',
    category: 'presentation',
    width: 1920,
    height: 1080,
  },
  // ── Print (mm/DPI) ──
  {
    id: 'a4-300',
    label: 'A4 portrait',
    category: 'print',
    widthMm: 210,
    heightMm: 297,
    dpi: 300,
    width: mmPx(210, 300),
    height: mmPx(297, 300),
  },
  {
    id: 'a4-landscape-300',
    label: 'A4 landscape',
    category: 'print',
    widthMm: 297,
    heightMm: 210,
    dpi: 300,
    width: mmPx(297, 300),
    height: mmPx(210, 300),
  },
  {
    id: 'a5-300',
    label: 'A5 portrait',
    category: 'print',
    widthMm: 148,
    heightMm: 210,
    dpi: 300,
    width: mmPx(148, 300),
    height: mmPx(210, 300),
  },
  {
    id: 'letter-300',
    label: 'US Letter portrait',
    category: 'print',
    widthMm: 215.9,
    heightMm: 279.4,
    dpi: 300,
    width: mmPx(215.9, 300),
    height: mmPx(279.4, 300),
  },
  {
    id: '4x6-300',
    label: '4×6″ photo',
    category: 'print',
    widthMm: 101.6,
    heightMm: 152.4,
    dpi: 300,
    width: mmPx(101.6, 300),
    height: mmPx(152.4, 300),
  },
  {
    id: '5x7-300',
    label: '5×7″ photo',
    category: 'print',
    widthMm: 127,
    heightMm: 177.8,
    dpi: 300,
    width: mmPx(127, 300),
    height: mmPx(177.8, 300),
  },
] as const
