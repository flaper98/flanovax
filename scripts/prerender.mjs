import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// Build del bundle SSR (Vite maneja CSS/assets correctamente)
await build({
  root,
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: '.ssr',
    rollupOptions: { output: { format: 'esm' } },
  },
  logLevel: 'warn',
})

// Importar y renderizar a string
const serverEntry = pathToFileURL(resolve(root, '.ssr/entry-server.js')).href
const { render } = await import(serverEntry)
const appHtml = render()

// Inyectar en el HTML de producción
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf8')
const output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
)
writeFileSync(resolve(root, 'dist/index.html'), output)

// Limpiar bundle SSR temporal
rmSync(resolve(root, '.ssr'), { recursive: true, force: true })

const chars = appHtml.length.toLocaleString()
console.log(`✓ Pre-rendering completo — ${chars} chars de HTML inyectados en dist/index.html`)
