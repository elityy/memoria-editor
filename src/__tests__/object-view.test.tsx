import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'

import { SceneObjectView } from '../components/scene-editor/object-view'
import type { ScenePlaceholder } from '../lib/avnac-scene'

function placeholder(overrides: Partial<ScenePlaceholder> = {}): ScenePlaceholder {
  return {
    id: 'guest-photo',
    type: 'placeholder',
    x: 0,
    y: 0,
    width: 320,
    height: 480,
    rotation: 0,
    opacity: 1,
    visible: true,
    locked: false,
    blurPct: 0,
    shadow: null,
    placeholderId: 'guest-photo',
    fit: 'cover',
    label: 'Guest photo',
    cornerRadius: 12,
    ...overrides,
  }
}

describe('SceneObjectView', () => {
  it('renders placeholder objects without falling through to arrow rendering', () => {
    const markup = renderToStaticMarkup(
      <SceneObjectView
        obj={placeholder()}
        vectorBoardDocs={{}}
        textEditingId={null}
        textDraft=""
        onObjectPointerDown={vi.fn()}
        onObjectHoverChange={vi.fn()}
        onTextDoubleClick={vi.fn()}
        onTextDraftChange={vi.fn()}
        onTextDraftCommit={vi.fn()}
      />,
    )

    expect(markup).toContain('Guest photo')
    expect(markup).toContain('data-avnac-scene-object')
    expect(markup).not.toContain('<svg')
  })
})
