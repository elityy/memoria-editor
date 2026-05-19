import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const require = createRequire(import.meta.url)

const standardJsonEsm = fileURLToPath(
  new URL('./node_modules/@standard-community/standard-json/dist/index.js', import.meta.url),
)

const proEditorSidebarIconsModule = fileURLToPath(
  new URL('./src/lib/editor-sidebar-icons.pro.ts', import.meta.url),
)

const proHugeiconsBrandIconModule = fileURLToPath(
  new URL('./src/lib/hugeicons-brand-icon.pro.ts', import.meta.url),
)

const hasHugeiconsPro = (() => {
  try {
    require.resolve('@hugeicons-pro/core-solid-rounded/package.json')
    return true
  } catch {
    return false
  }
})()

const config = defineConfig(() => {
  console.info(
    `[icons] ${hasHugeiconsPro ? 'Hugeicons Pro detected' : 'Hugeicons Pro not installed; using free fallback'}`,
  )
  return {
    base: '/',
    resolve: {
      tsconfigPaths: true,
      alias: [
        ...(hasHugeiconsPro
          ? [
              {
                find: /^@\/lib\/editor-sidebar-icons$/,
                replacement: proEditorSidebarIconsModule,
              },
              {
                find: /^@\/lib\/hugeicons-brand-icon$/,
                replacement: proHugeiconsBrandIconModule,
              },
            ]
          : []),
        // Rolldown/Vite 8 can't parse `.cjs` files that contain dynamic
        // `await import(...)`. Force this dep to its ESM entry so the
        // `require` condition from @tambo-ai/client never pulls the CJS
        // shards through the production client build.
        {
          find: /^@standard-community\/standard-json$/,
          replacement: standardJsonEsm,
        },
      ],
    },
    plugins: [tailwindcss(), viteReact()],
    server: {},
  }
})

export default config
