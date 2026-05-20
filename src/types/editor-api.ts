/**
 * Public API types for @memoria/editor
 * SPDX-License-Identifier: AGPL-3.0-only
 *
 * These types define the integration contract between the editor
 * and the host application (memoria public-web).
 */

import type { AvnacDocument } from '../lib/avnac-scene'

// ── Editor Props ───────────────────────────────────────────────────

/**
 * Props accepted by the MemoriaEditor component.
 *
 * The editor currently uses avnac's built-in SceneEditorProps internally.
 * This wrapper type defines the contract for memoria-specific integration
 * that will be wired up in Epic 3.
 */
export type MemoriaEditorProps = {
  /** Unique ID for the template being edited (used for persistence) */
  templateId?: string
  /** Display name shown in the editor title / export filenames */
  displayName?: string
  /** Initial artboard width in pixels */
  initialWidth?: number
  /** Initial artboard height in pixels */
  initialHeight?: number

  // ── Document lifecycle callbacks ─────────────────────────────────

  /** Called when the editor is ready (document loaded, canvas initialized) */
  onReady?: () => void
  /**
   * Called when the document changes (debounced ~240ms).
   * Host app should persist the returned AvnacDocument JSON.
   */
  onChange?: (doc: AvnacDocument) => void
  /**
   * Provide an initial document to load into the editor.
   * If undefined, the editor creates a blank document.
   */
  initialDocument?: AvnacDocument

  // ── Asset management callbacks ───────────────────────────────────

  /**
   * Called when the user adds an image (drag/drop, paste, or upload button).
   * Host app should upload the file to its storage and return a public URL.
   * If not provided, images are embedded as data URLs (no external storage).
   */
  onAssetUpload?: (file: File) => Promise<AssetUploadResult>
  /**
   * Resolve an asset ID or relative path to a full URL.
   * Used when loading documents that reference externally-stored assets.
   */
  assetResolver?: (assetRef: string) => string | Promise<string>

  // ── Export callbacks ─────────────────────────────────────────────

  /**
   * Called when the user triggers an export from the editor menu.
   * Receives the export data (PNG/PDF blob + document JSON).
   * If not provided, the editor uses its default download behavior.
   */
  onExport?: (data: EditorExportData) => void | Promise<void>

  // ── Feature flags ────────────────────────────────────────────────

  /** Editor configuration overrides */
  config?: MemoriaEditorConfig
}

// ── Asset Upload ───────────────────────────────────────────────────

export type AssetUploadResult = {
  /** Public URL where the asset can be accessed */
  url: string
  /** Storage identifier for the asset (e.g., S3 key) */
  assetId?: string
  /** Asset dimensions if known */
  width?: number
  height?: number
}

// ── Export Data ─────────────────────────────────────────────────────

export type EditorExportFormat = 'png' | 'pdf' | 'json'

export type EditorExportData = {
  format: EditorExportFormat
  /** The export blob (PNG or PDF) */
  blob?: Blob
  /** The document JSON (always included) */
  document: AvnacDocument
  /** Page index that was exported (for single-page exports) */
  pageIndex?: number
  /** Display name used for the export filename */
  fileName: string
}

// ── Config ─────────────────────────────────────────────────────────

export type MemoriaEditorConfig = {
  /** Enable/disable specific editor features */
  features?: {
    /** Allow AI-powered features (default: false) */
    ai?: boolean
    /** Allow QR code generation (default: true) */
    qrCode?: boolean
    /** Allow icon library panel (default: true) */
    icons?: boolean
    /** Allow vector board panel (default: true) */
    vectorBoards?: boolean
    /** Allow image upload panel (default: true) */
    imageUpload?: boolean
    /** Allow export menu (default: true) */
    export?: boolean
  }
  /**
   * AGPL source-offer URL displayed in the editor's about/info section.
   * Required by AGPL-3.0 Section 13 for network use.
   */
  sourceOfferUrl?: string
}

// ── Editor Handle (imperative API) ─────────────────────────────────

/**
 * Imperative handle returned by ref on MemoriaEditor.
 * Extends avnac's SceneEditorHandle with memoria-specific methods.
 */
export type MemoriaEditorImperativeHandle = {
  /** Export the current page as a PNG data URL */
  exportImage: (opts?: { pageIndex?: number; scale?: number }) => void
  /** Get list of pages available for export */
  getExportPages: () => Promise<Array<{ label: string; pageIndex: number }>>
  /** Trigger a save (calls onChange with current document) */
  save: () => void
  /** Load a document from a File (avnac JSON format) */
  loadFromFile: (file: File) => Promise<void>
  /** Get the current document state */
  getDocument: () => AvnacDocument
}
