/**
 * @memoria/editor — WYSIWYG template editor for Memoria
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * This package is a modified fork of avnac (https://github.com/akinloluwami/avnac).
 */

// ── Styles ─────────────────────────────────────────────────────────
import './styles.css'

// ── AGPL compliance ────────────────────────────────────────────────
export { AgplSourceOffer } from './components/agpl-source-offer'
export type { SceneEditorHandle as MemoriaEditorHandle } from './components/scene-editor'
// ── Main editor component ──────────────────────────────────────────
export { default as MemoriaEditor } from './components/scene-editor'
export type { EditorFeatures } from './components/scene-editor/editor-features-context'
// ── Feature flags ─────────────────────────────────────────────────
export {
  EditorFeaturesProvider,
  resolveFeatures,
  useEditorFeatures,
} from './components/scene-editor/editor-features-context'
// ── Asset library ────────────────────────────────────────────────
export type {
  AssetLibraryFetchResult,
  AssetLibraryItem,
  OnFetchAssets,
} from './lib/avnac-asset-library'
// ── Asset resolution ──────────────────────────────────────────────
export {
  ASSET_REF_PREFIX,
  getAssetId,
  isAssetRef,
  resolveAllPagesAssets,
  resolveDocumentAssets,
  toAssetRef,
} from './lib/avnac-asset-resolver'
// ── Scene document types ───────────────────────────────────────────
export type {
  AvnacDocument,
  AvnacPage,
  SceneArrow,
  SceneEllipse,
  SceneGroup,
  SceneIcon,
  SceneImage,
  SceneLine,
  SceneObject,
  SceneObjectBase,
  SceneObjectType,
  ScenePlaceholder,
  ScenePolygon,
  SceneRect,
  SceneShadow,
  SceneStar,
  SceneText,
  SceneVectorBoard,
} from './lib/avnac-scene'
// ── Scene document utilities ───────────────────────────────────────
export {
  AVNAC_DOC_VERSION,
  cloneAvnacDocument,
  createAvnacPage,
  createEmptyAvnacDocument,
  createEmptyAvnacPage,
  parseAvnacDocument,
} from './lib/avnac-scene'
// ── Rendering ──────────────────────────────────────────────────────
export {
  renderAvnacDocumentToCanvas,
  renderAvnacDocumentToDataUrl,
} from './lib/avnac-scene-render'

// ── Public API types (integration contract) ────────────────────────
export type {
  AssetUploadResult,
  BackgroundRemovalResult,
  EditorExportData,
  EditorExportFormat,
  MemoriaEditorConfig,
  MemoriaEditorImperativeHandle,
  MemoriaEditorProps,
} from './types/editor-api'
