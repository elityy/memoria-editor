import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const require = createRequire(import.meta.url)
const __dirname = fileURLToPath(new URL('.', import.meta.url))

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

export default defineConfig(() => {
  console.info(
    `[icons] ${hasHugeiconsPro ? 'Hugeicons Pro detected' : 'Hugeicons Pro not installed; using free fallback'}`,
  )
  return {
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
      ],
    },
    plugins: [
      tailwindcss(),
      viteReact(),
      dts({
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        outDir: 'dist',
        rollupTypes: true,
        tsconfigPath: './tsconfig.json',
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es'],
        fileName: 'index',
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react-dom/client',
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          assetFileNames: 'styles[extname]',
        },
      },
      cssCodeSplit: false,
      sourcemap: true,
    },
    // Dev server still works for local development
    server: {
      port: 3300,
    },
  }
})
