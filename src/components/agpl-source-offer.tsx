// SPDX-License-Identifier: AGPL-3.0-only
/**
 * AGPL-3.0 Section 13 source-offer notice.
 *
 * Displays a small, unobtrusive link to the source code repository.
 * This is required for AGPL compliance when the software is accessed
 * over a network (i.e., used in a web application).
 *
 * The URL can be overridden via MemoriaEditorConfig.sourceOfferUrl.
 */

const DEFAULT_SOURCE_URL = 'https://github.com/elityy/memoria-editor'

export function AgplSourceOffer({ url }: { url?: string }) {
  const href = url || DEFAULT_SOURCE_URL

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto fixed bottom-2 left-3 z-10 rounded-md px-2 py-1 text-[10px] font-medium leading-tight text-black/25 transition-colors hover:text-black/50"
      title="This editor is open-source software (AGPL-3.0)"
    >
      Source code
    </a>
  )
}
