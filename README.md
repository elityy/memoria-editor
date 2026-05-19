# memoria-editor

WYSIWYG template editor for [Memoria](https://github.com/elityy/memoria) — a modified fork of [avnac](https://github.com/akinloluwami/avnac) by [@akinloluwami](https://github.com/akinloluwami).

## License

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0), the same license as the upstream [avnac](https://github.com/akinloluwami/avnac) project.

See [LICENSE](./LICENSE) for the full text.

## Attribution

This software is a modified fork of **avnac** (https://github.com/akinloluwami/avnac), originally created by Akinkunmi Akinlolu-Ojo. Modifications include:

- Removal of backend (Elysia, PostgreSQL, auth)
- Removal of routes and standalone app shell
- Addition of `ScenePlaceholder` object type for template placeholders
- Reconfiguration as an importable React component library
- Integration hooks for external asset management and rendering services

The original avnac source code is available at https://github.com/akinloluwami/avnac under AGPL-3.0.

## Usage

```tsx
import { MemoriaEditor } from '@memoria/editor'

<MemoriaEditor
  document={templateDocument}
  onChange={handleChange}
  onExport={handleExport}
  assetResolver={resolveAssetUrl}
  onAssetUpload={handleUpload}
  config={editorConfig}
/>
```

## Development

```bash
pnpm install
pnpm dev        # Start dev server
pnpm build      # Build library
pnpm typecheck  # Type check
pnpm test       # Run tests
```
