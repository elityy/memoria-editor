// SPDX-License-Identifier: AGPL-3.0-only
import { z } from 'zod'

/**
 * Render request schema.
 *
 * The `document` field is the full avnac AvnacDocument JSON.
 * We accept it as a generic record here and validate the structure
 * in the renderer when it parses the document.
 */
export const renderRequestSchema = z.object({
  /** Full avnac document JSON */
  document: z.record(z.unknown()),
  /**
   * Map of placeholder object IDs to image URLs.
   * The renderer fetches these images and composites them
   * into the corresponding placeholder positions.
   */
  placeholders: z.record(z.string()).default({}),
  /** Output format */
  format: z.enum(['png', 'pdf']).default('png'),
  /** Render scale multiplier (1x–4x) */
  scale: z.number().min(1).max(4).default(1),
  /** Page index to render (0-based) */
  pageIndex: z.number().int().min(0).default(0),
})

export type RenderRequest = z.infer<typeof renderRequestSchema>
