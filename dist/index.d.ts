import { ForwardRefExoticComponent } from 'react';
import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

/**
 * AGPL-3.0 Section 13 source-offer notice.
 *
 * Displays a small, unobtrusive link to the source code repository.
 * This is required for AGPL compliance when the software is accessed
 * over a network (i.e., used in a web application).
 *
 * The URL can be overridden via MemoriaEditorConfig.sourceOfferUrl.
 */
export declare function AgplSourceOffer({ url }: {
    url?: string;
}): JSX.Element;

declare type ArrowLineStyle = 'solid' | 'dashed' | 'dotted';

declare type ArrowPathType = 'straight' | 'curved';

/** Prefix used for asset references in scene object `src` fields */
export declare const ASSET_REF_PREFIX = "asset:";

export declare type AssetLibraryFetchResult = {
    items: AssetLibraryItem[];
    /** Opaque cursor for pagination — null when no more pages */
    nextCursor: string | null;
};

/**
 * Types for the asset library panel.
 * The host app provides assets via callback — no direct API calls from the AGPL editor.
 */
export declare type AssetLibraryItem = {
    /** Unique identifier for the asset */
    id: string;
    /** Display name (filename or user-given name) */
    name: string | null;
    /** Loadable thumbnail/preview URL */
    thumbnailUrl: string;
    /** Full-resolution URL for placing on canvas */
    url: string;
    /** Natural width in pixels */
    widthPx: number;
    /** Natural height in pixels */
    heightPx: number;
    /** MIME type (e.g. "image/png") */
    mimeType: string;
    /** ISO date string */
    createdAt: string;
};

declare type AssetResolverFn = (assetRef: string) => string | Promise<string>;

export declare type AssetUploadResult = {
    /** Public URL where the asset can be accessed */
    url: string;
    /** Storage identifier for the asset (e.g., S3 key) */
    assetId?: string;
    /** Asset dimensions if known */
    width?: number;
    height?: number;
};

export declare const AVNAC_DOC_VERSION: 2;

export declare type AvnacDocument = {
    v: typeof AVNAC_DOC_VERSION;
    artboard: {
        width: number;
        height: number;
    };
    bg: BgValue;
    objects: SceneObject[];
    activePageId: string;
    pages: AvnacPage[];
};

export declare type AvnacPage = {
    id: string;
    name: string;
    artboard: {
        width: number;
        height: number;
    };
    bg: BgValue;
    objects: SceneObject[];
};

export declare type BackgroundRemovalResult = {
    /** URL of the processed image with background removed */
    url: string;
};

declare type BgValue = {
    type: 'solid';
    color: string;
} | {
    type: 'gradient';
    css: string;
    stops: GradientStop[];
    angle: number;
};

export declare function cloneAvnacDocument(doc: AvnacDocument): AvnacDocument;

export declare function createAvnacPage({ id, name, artboard, bg, objects, }: {
    id?: string;
    name?: string;
    artboard: {
        width: number;
        height: number;
    };
    bg: BgValue;
    objects: SceneObject[];
}): AvnacPage;

export declare function createEmptyAvnacDocument(width: number, height: number): AvnacDocument;

export declare function createEmptyAvnacPage(width: number, height: number, name?: string): AvnacPage;

export declare type EditorExportData = {
    format: EditorExportFormat;
    /** The export blob (PNG or PDF) */
    blob?: Blob;
    /** The document JSON (always included) */
    document: AvnacDocument;
    /** Page index that was exported (for single-page exports) */
    pageIndex?: number;
    /** Display name used for the export filename */
    fileName: string;
};

export declare type EditorExportFormat = 'png' | 'pdf' | 'json';

/**
 * Resolved feature flags — all booleans, defaults applied.
 */
export declare type EditorFeatures = {
    ai: boolean;
    qrCode: boolean;
    icons: boolean;
    vectorBoards: boolean;
    imageUpload: boolean;
    stockImages: boolean;
    apps: boolean;
    layers: boolean;
    export: boolean;
};

export declare function EditorFeaturesProvider({ config, children, }: {
    config?: MemoriaEditorConfig;
    children: ReactNode;
}): JSX.Element;

declare type ExportImageFormat = 'png' | 'jpg' | 'webp' | 'pdf';

declare type ExportImageOptions = {
    format: ExportImageFormat;
    multiplier: number;
    transparent: boolean;
    flattenPdf?: boolean;
    crop?: PngExportCrop;
    pageIds?: string[];
    /**
     * Target DPI for export. When set, overrides multiplier:
     * effective scale = targetDpi / 96 (screen baseline).
     * Typical values: 150 (web print), 300 (standard print), 600 (high quality).
     */
    targetDpi?: number;
};

declare type ExportPageOption = {
    id: string;
    name: string;
    width: number;
    height: number;
    isCurrent?: boolean;
    previewUrl?: string | null;
};

/** Extract the asset ID from an asset reference string */
export declare function getAssetId(src: string): string;

declare type GradientStop = {
    color: string;
    offset: number;
};

/** Check whether a string is an asset reference */
export declare function isAssetRef(src: string): boolean;

export declare const MemoriaEditor: ForwardRefExoticComponent<SceneEditorProps & RefAttributes<MemoriaEditorHandle>>;

export declare type MemoriaEditorConfig = {
    /** Enable/disable specific editor features */
    features?: {
        /** Allow AI-powered features (default: false) */
        ai?: boolean;
        /** Allow QR code generation (default: true) */
        qrCode?: boolean;
        /** Allow icon library panel (default: true) */
        icons?: boolean;
        /** Allow vector board panel (default: true) */
        vectorBoards?: boolean;
        /** Allow image upload panel (default: true) */
        imageUpload?: boolean;
        /** Allow stock images panel (default: true) */
        stockImages?: boolean;
        /** Allow apps panel (default: true) */
        apps?: boolean;
        /** Allow layers panel (default: true) */
        layers?: boolean;
        /** Allow export menu (default: true) */
        export?: boolean;
    };
    /**
     * AGPL source-offer URL displayed in the editor's about/info section.
     * Required by AGPL-3.0 Section 13 for network use.
     */
    sourceOfferUrl?: string;
};

export declare type MemoriaEditorHandle = {
    exportImage: (opts?: ExportImageOptions) => void;
    getExportPages: () => Promise<ExportPageOption[]>;
    saveDocument: () => void;
    loadDocument: (file: File) => Promise<void>;
};

/**
 * Imperative handle returned by ref on MemoriaEditor.
 * Extends avnac's SceneEditorHandle with memoria-specific methods.
 */
export declare type MemoriaEditorImperativeHandle = {
    /** Export the current page as a PNG data URL */
    exportImage: (opts?: {
        pageIndex?: number;
        scale?: number;
    }) => void;
    /** Get list of pages available for export */
    getExportPages: () => Promise<Array<{
        label: string;
        pageIndex: number;
    }>>;
    /** Trigger a save (calls onChange with current document) */
    save: () => void;
    /** Load a document from a File (avnac JSON format) */
    loadFromFile: (file: File) => Promise<void>;
    /** Get the current document state */
    getDocument: () => AvnacDocument;
};

/**
 * Props accepted by the MemoriaEditor component.
 *
 * The editor currently uses avnac's built-in SceneEditorProps internally.
 * This wrapper type defines the contract for memoria-specific integration
 * that will be wired up in Epic 3.
 */
export declare type MemoriaEditorProps = {
    /** Unique ID for the template being edited (used for local draft persistence) */
    persistId?: string;
    /** Display name shown in the editor title / export filenames */
    persistDisplayName?: string;
    /** Initial artboard width in pixels */
    initialArtboardWidth?: number;
    /** Initial artboard height in pixels */
    initialArtboardHeight?: number;
    /** Called when editor readiness changes */
    onReadyChange?: (ready: boolean) => void;
    /**
     * Called when the document changes (debounced ~240ms).
     * Host app should persist the returned AvnacDocument JSON.
     */
    onChange?: (doc: AvnacDocument) => void;
    /**
     * Provide an initial document to load into the editor.
     * If undefined, the editor creates a blank document.
     */
    initialDocument?: AvnacDocument;
    /**
     * Called when the user adds an image (drag/drop, paste, or upload button).
     * Host app should upload the file to its storage and return a public URL.
     * If not provided, images are embedded as data URLs (no external storage).
     */
    onAssetUpload?: (file: File) => Promise<AssetUploadResult>;
    /**
     * Resolve an asset ID or relative path to a full URL.
     * Used when loading documents that reference externally-stored assets.
     */
    assetResolver?: (assetRef: string) => string | Promise<string>;
    /**
     * Called when the user clicks "Remove bg" on an image.
     * Host app should process the image (e.g., via an AI service) and
     * return the URL of the background-removed image.
     * If not provided, the button shows an "unavailable" notice.
     */
    onRemoveBackground?: (imageUrl: string) => Promise<BackgroundRemovalResult>;
    /**
     * Called when the user triggers an export from the editor menu.
     * Receives the export data (PNG/PDF blob + document JSON).
     * If not provided, the editor uses its default download behavior.
     */
    onExport?: (data: EditorExportData) => void | Promise<void>;
    /** Editor configuration overrides */
    config?: MemoriaEditorConfig;
};

export declare type OnFetchAssets = (opts?: {
    cursor?: string | null;
    search?: string;
}) => Promise<AssetLibraryFetchResult>;

export declare function parseAvnacDocument(raw: unknown): AvnacDocument | null;

declare type PngExportCrop = 'none' | 'selection' | 'content';

export declare function renderAvnacDocumentToCanvas(ctx: CanvasRenderingContext2D, doc: AvnacDocument, vectorBoardDocs: Record<string, VectorBoardDocument>, opts?: {
    transparent?: boolean;
}): Promise<void>;

export declare function renderAvnacDocumentToDataUrl(doc: AvnacDocument, vectorBoardDocs: Record<string, VectorBoardDocument>, opts?: {
    format?: 'png' | 'jpg' | 'webp';
    multiplier?: number;
    transparent?: boolean;
}): Promise<string>;

/**
 * Walk all pages in a multi-page document and resolve asset references.
 */
export declare function resolveAllPagesAssets(doc: AvnacDocument, resolver: AssetResolverFn): Promise<AvnacDocument>;

/**
 * Walk all scene objects in a document and resolve any `asset:` prefixed
 * image `src` values using the provided resolver function.
 *
 * Returns a new document with resolved URLs. Does not mutate the input.
 */
export declare function resolveDocumentAssets(doc: AvnacDocument, resolver: AssetResolverFn): Promise<AvnacDocument>;

export declare function resolveFeatures(config?: MemoriaEditorConfig): EditorFeatures;

export declare type SceneArrow = SceneObjectBase & {
    type: 'arrow';
    stroke: BgValue;
    strokeWidth: number;
    lineStyle: ArrowLineStyle;
    roundedEnds: boolean;
    pathType: ArrowPathType;
    headSize: number;
    curveBulge: number;
    curveT: number;
};

declare type SceneEditorProps = {
    onReadyChange?: (ready: boolean) => void;
    persistId?: string;
    persistDisplayName?: string;
    initialArtboardWidth?: number;
    initialArtboardHeight?: number;
    initialDocument?: AvnacDocument;
    onChange?: (doc: AvnacDocument) => void;
    /** External bg removal handler. If provided, enables "Remove bg" button. */
    onRemoveBackground?: (imageUrl: string) => Promise<{
        url: string;
    }>;
    /**
     * Called when the user adds an image (drag/drop, paste, file picker).
     * Host app should upload the file to its storage and return a URL.
     * If not provided, images are embedded as data URLs.
     */
    onAssetUpload?: (file: File) => Promise<{
        url: string;
        assetId?: string;
        width?: number;
        height?: number;
    }>;
    /**
     * Resolve an asset reference (e.g. "asset:<id>") to a loadable URL.
     * Used when loading documents with externally-stored assets.
     */
    assetResolver?: (assetRef: string) => string | Promise<string>;
    /**
     * Fetch assets for the asset library panel.
     * Host app provides paginated, searchable asset listing.
     * If not provided, the uploads panel shows "not connected".
     */
    onFetchAssets?: OnFetchAssets;
};

export declare type SceneEllipse = SceneObjectBase & ShapePaint & {
    type: 'ellipse';
};

export declare type SceneGroup = SceneObjectBase & {
    type: 'group';
    children: SceneObject[];
};

export declare type SceneIcon = SceneObjectBase & {
    type: 'icon';
    iconName: string;
    svg: SceneIconSvg;
    fill: BgValue;
    strokeWidth: number;
};

declare type SceneIconSvg = readonly SceneIconSvgElement[];

declare type SceneIconSvgElement = readonly [
tag: string,
attrs: {
    readonly [key: string]: string | number;
}
];

export declare type SceneImage = SceneObjectBase & {
    type: 'image';
    src: string;
    naturalWidth: number;
    naturalHeight: number;
    crop: {
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
    };
    cornerRadius: number;
};

export declare type SceneLine = SceneObjectBase & {
    type: 'line';
    stroke: BgValue;
    strokeWidth: number;
    lineStyle: ArrowLineStyle;
    roundedEnds: boolean;
};

export declare type SceneObject = SceneRect | SceneEllipse | ScenePolygon | SceneStar | SceneLine | SceneArrow | SceneText | SceneImage | SceneIcon | SceneVectorBoard | SceneGroup | ScenePlaceholder;

export declare type SceneObjectBase = {
    id: string;
    type: SceneObjectType;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    opacity: number;
    visible: boolean;
    locked: boolean;
    name?: string;
    blurPct: number;
    shadow: SceneShadow | null;
};

export declare type SceneObjectType = 'rect' | 'ellipse' | 'polygon' | 'star' | 'line' | 'arrow' | 'text' | 'image' | 'icon' | 'vector-board' | 'group' | 'placeholder';

/**
 * ScenePlaceholder — Memoria extension.
 *
 * Represents a runtime-bound image slot (e.g., guest photo).
 * At design time: renders as a styled boundary with optional preview.
 * At print time: the rendering service fills it with the provided image.
 */
export declare type ScenePlaceholder = SceneObjectBase & {
    type: 'placeholder';
    /** References a placeholder definition by ID */
    placeholderId: string;
    /** How the runtime image fills the bounds */
    fit: 'cover' | 'contain' | 'fill';
    /** Optional preview image URL for editor visualization */
    previewImageUrl?: string;
    /** Visual indicator color in editor (default: accent) */
    borderColor?: string;
    /** Overlay label text (e.g., "Guest Photo") */
    label?: string;
    cornerRadius: number;
};

export declare type ScenePolygon = SceneObjectBase & ShapePaint & {
    type: 'polygon';
    sides: number;
};

export declare type SceneRect = SceneObjectBase & ShapePaint & {
    type: 'rect';
    cornerRadius: number;
};

export declare type SceneShadow = ShadowUi;

export declare type SceneStar = SceneObjectBase & ShapePaint & {
    type: 'star';
    points: number;
};

export declare type SceneText = SceneObjectBase & {
    type: 'text';
    text: string;
    fill: BgValue;
    stroke: BgValue;
    strokeWidth: number;
    fontFamily: string;
    fontSize: number;
    letterSpacing: number;
    lineHeight?: number;
    fontWeight: number | 'normal' | 'bold';
    fontStyle: 'normal' | 'italic';
    underline: boolean;
    textAlign: 'left' | 'center' | 'right' | 'justify';
};

export declare type SceneVectorBoard = SceneObjectBase & {
    type: 'vector-board';
    boardId: string;
};

declare type ShadowUi = {
    blur: number;
    offsetX: number;
    offsetY: number;
    colorHex: string;
    opacityPct: number;
};

declare type ShapePaint = {
    fill: BgValue;
    stroke: BgValue;
    strokeWidth: number;
};

/** Build an asset reference string from an asset ID */
export declare function toAssetRef(assetId: string): string;

export declare function useEditorFeatures(): EditorFeatures;

declare const VECTOR_BOARD_DOC_VERSION: 2;

declare type VectorBoardDocument = VectorBoardDocumentV2;

declare type VectorBoardDocumentV2 = {
    v: typeof VECTOR_BOARD_DOC_VERSION;
    layers: VectorBoardLayer[];
    activeLayerId: string;
};

declare type VectorBoardLayer = {
    id: string;
    name: string;
    visible: boolean;
    strokes: VectorBoardStroke[];
};

declare type VectorBoardStroke = {
    id: string;
    kind: VectorStrokeKind;
    /** Normalized 0–1 in workspace. Interpretation depends on `kind`. */
    points: [number, number][];
    /**
     * Cubic Bézier pen path. When length ≥ 2, used instead of polyline `points` for kind `pen`.
     */
    penAnchors?: VectorPenAnchor[];
    /** When true, last anchor connects back to the first (closed loop). */
    penClosed?: boolean;
    stroke: string;
    strokeWidthN: number;
    /** Fill for closed shapes (rect, ellipse, polygon). Empty = no fill. */
    fill: string;
};

declare type VectorPenAnchor = {
    x: number;
    y: number;
    inX?: number;
    inY?: number;
    outX?: number;
    outY?: number;
};

declare type VectorStrokeKind = 'pen' | 'line' | 'rect' | 'ellipse' | 'arrow' | 'polygon';

export { }
