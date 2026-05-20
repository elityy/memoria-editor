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
  ScenePlaceholder,
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

// ── Asset resolution ──────────────────────────────────────────────
export {
  ASSET_REF_PREFIX,
  getAssetId,
  isAssetRef,
  resolveAllPagesAssets,
  resolveDocumentAssets,
  toAssetRef,
} from './lib/avnac-asset-resolver'

// ── Asset library ────────────────────────────────────────────────
export type {
  AssetLibraryItem,
  AssetLibraryFetchResult,
  OnFetchAssets,
} from './lib/avnac-asset-library'

// ── Feature flags ─────────────────────────────────────────────────
export {
  EditorFeaturesProvider,
  resolveFeatures,
  useEditorFeatures,
} from './components/scene-editor/editor-features-context'
export type { EditorFeatures } from './components/scene-editor/editor-features-context'

// ── AGPL compliance ────────────────────────────────────────────────
export { AgplSourceOffer } from './components/agpl-source-offer'

// ── Public API types (integration contract) ────────────────────────
export type {
  MemoriaEditorProps,
  MemoriaEditorConfig,
  MemoriaEditorImperativeHandle,
  AssetUploadResult,
  BackgroundRemovalResult,
  EditorExportData,
  EditorExportFormat,
} from './types/editor-api'

