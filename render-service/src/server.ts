// SPDX-License-Identifier: AGPL-3.0-only
/**
 * AGPL rendering microservice for Memoria.
 *
 * Accepts avnac document JSON + placeholder images via HTTP,
 * renders using node-canvas, and returns a PNG/PDF buffer.
 *
 * Deployed as a Docker container on the same host as the main app.
 */

import Fastify from 'fastify'
import { renderDocument } from './renderer.js'
import { type RenderRequest, renderRequestSchema } from './schema.js'

const PORT = Number(process.env.PORT) || 4100
const HOST = process.env.HOST || '0.0.0.0'

const app = Fastify({ logger: true })

app.get('/health', async () => ({ status: 'ok' }))

/**
 * POST /render
 *
 * Body (JSON):
 *   document:     AvnacDocument JSON
 *   placeholders: Record<placeholderId, imageUrl>
 *   format:       'png' | 'pdf' (default: 'png')
 *   scale:        number (default: 1, max: 4)
 *   pageIndex:    number (default: 0 — first page)
 *
 * Returns: image/png or application/pdf buffer
 */
app.post('/render', async (request, reply) => {
  const parsed = renderRequestSchema.safeParse(request.body)
  if (!parsed.success) {
    return reply.status(400).send({
      error: 'Invalid request',
      details: parsed.error.issues,
    })
  }

  const req: RenderRequest = parsed.data

  try {
    const result = await renderDocument(req)
    const contentType = req.format === 'pdf' ? 'application/pdf' : 'image/png'
    return reply
      .header('Content-Type', contentType)
      .header('Content-Length', result.byteLength)
      .send(Buffer.from(result))
  } catch (err) {
    app.log.error(err, 'Render failed')
    return reply.status(500).send({ error: 'Render failed' })
  }
})

/**
 * GET /source
 *
 * AGPL-3.0 Section 13: Provide access to the corresponding source code
 * for users who interact with this service over a network.
 */
app.get('/source', async (_request, reply) => {
  return reply.redirect('https://github.com/elityy/memoria-editor')
})

app.listen({ port: PORT, host: HOST }, err => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
