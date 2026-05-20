import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(() => {
  return {
    resolve: {
      tsconfigPaths: true,
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
        external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
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
