// SPDX-License-Identifier: AGPL-3.0-only
import {
  AiMagicIcon,
  Album02Icon,
  CloudUploadIcon,
  DashboardCircleIcon,
  Layers02Icon,
  PenTool01Icon,
  ShapeCollectionIcon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'

export type EditorSidebarIconId =
  | 'layers'
  | 'uploads'
  | 'images'
  | 'icons'
  | 'vector-board'
  | 'apps'
  | 'ai'

export type EditorSidebarIconDefinition = {
  icon: IconSvgElement
  activeIcon: IconSvgElement
}

export type EditorSidebarIconSet = Record<EditorSidebarIconId, EditorSidebarIconDefinition>

/** Default, contributor-friendly icon set. */
export const editorSidebarIcons: EditorSidebarIconSet = {
  layers: { icon: Layers02Icon, activeIcon: Layers02Icon },
  uploads: { icon: CloudUploadIcon, activeIcon: CloudUploadIcon },
  images: { icon: Album02Icon, activeIcon: Album02Icon },
  icons: { icon: ShapeCollectionIcon, activeIcon: ShapeCollectionIcon },
  'vector-board': { icon: PenTool01Icon, activeIcon: PenTool01Icon },
  apps: { icon: DashboardCircleIcon, activeIcon: DashboardCircleIcon },
  ai: { icon: AiMagicIcon, activeIcon: AiMagicIcon },
}
