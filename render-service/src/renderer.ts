// SPDX-License-Identifier: AGPL-3.0-only
/**
 * Server-side document renderer using node-canvas.
 *
 * This module adapts avnac's browser-based Canvas 2D rendering pipeline
 * to run in Node.js with the `canvas` (node-canvas) package.
 *
 * Current status: SCAFFOLD — renders a placeholder image.
 * Full rendering (text, shapes, images, icons, gradients, shadows)
 * will be implemented in Epic 3 by porting avnac-scene-render.ts
 * to use node-canvas APIs instead of browser DOM.
 *
 * Key differences from browser rendering:
 * - Image loading: fetch + canvas.loadImage() instead of HTMLImageElement
 * - Font loading: canvas.registerFont() instead of CSS @font-face
 * - No document.createElement — use canvas.createCanvas()
 */

import { createCanvas } from 'canvas'
import type { RenderRequest } from './schema.js'

const DEFAULT_WIDTH = 1080
const DEFAULT_HEIGHT = 1080

export async function renderDocument(req: RenderRequest): Promise<ArrayBuffer> {
  const doc = req.document as Record<string, unknown>
  const artboard = (doc.artboard ?? {}) as Record<string, unknown>
  const width = Math.round(Number(artboard.width) || DEFAULT_WIDTH)
  const height = Math.round(Number(artboard.height) || DEFAULT_HEIGHT)
  const scale = Math.max(1, Math.min(4, req.scale))

  const canvas = createCanvas(width * scale, height * scale)
  const ctx = canvas.getContext('2d')

  ctx.scale(scale, scale)

  // ── Background ─────────────────────────────────────────────────
  const bg = doc.bg as Record<string, unknown> | undefined
  if (bg?.type === 'solid' && typeof bg.color === 'string') {
    ctx.fillStyle = bg.color
  } else {
    ctx.fillStyle = '#ffffff'
  }
  ctx.fillRect(0, 0, width, height)

  // ── Placeholder text (temporary until full rendering is ported) ─
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
  ctx.font = `${Math.round(width * 0.03)}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(`@memoria/render-service — ${width}×${height} @ ${scale}x`, width / 2, height / 2)

  // TODO (Epic 3): Port avnac-scene-render.ts drawSceneObject() to node-canvas
  // - Shapes: rect, ellipse, polygon, star, line, arrow
  // - Text: multi-line layout, fonts, letter-spacing, alignment
  // - Images: fetch URLs, composite with transforms
  // - Icons: SVG parsing + render
  // - Groups: recursive rendering
  // - Effects: shadows, blur, opacity, corner radius
  // - Placeholders: substitute with provided placeholder images

  if (req.format === 'pdf') {
    // TODO: use jspdf or canvas.createPDFStream() for PDF output
    // For now, return PNG even if PDF requested
  }

  return canvas.toBuffer('image/png').buffer
}
