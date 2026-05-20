/**
 * @memoria/editor — WYSIWYG template editor for Memoria
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * This package is a modified fork of avnac (https://github.com/akinloluwami/avnac).
 */

// ── Styles ─────────────────────────────────────────────────────────
import './styles.css'

// ── Main editor component ──────────────────────────────────────────
export { default as MemoriaEditor } from './components/scene-editor'
export type { SceneEditorHandle as MemoriaEditorHandle } from './components/scene-editor'

// ── Scene document types ───────────────────────────────────────────
export type {
  AvnacDocument,
  AvnacPage,
  SceneObject,
  SceneObjectBase,
  SceneObjectType,
  SceneRect,
  SceneEllipse,
  ScenePolygon,
  SceneStar,
  SceneLine,
  SceneArrow,
  SceneText,
  SceneImage,
  SceneIcon,
  SceneVectorBoard,
  SceneGroup,
  SceneShadow,
} from './lib/avnac-scene'

// ── Scene document utilities ───────────────────────────────────────
export {
  AVNAC_DOC_VERSION,
  createEmptyAvnacDocument,
  createEmptyAvnacPage,
  createAvnacPage,
  parseAvnacDocument,
  cloneAvnacDocument,
} from './lib/avnac-scene'

// ── Rendering ──────────────────────────────────────────────────────
export {
  renderAvnacDocumentToCanvas,
  renderAvnacDocumentToDataUrl,
} from './lib/avnac-scene-render'

// ── AGPL compliance ────────────────────────────────────────────────
export { AgplSourceOffer } from './components/agpl-source-offer'

// ── Public API types (integration contract) ────────────────────────
export type {
  MemoriaEditorProps,
  MemoriaEditorConfig,
  MemoriaEditorImperativeHandle,
  AssetUploadResult,
  EditorExportData,
  EditorExportFormat,
} from './types/editor-api'

