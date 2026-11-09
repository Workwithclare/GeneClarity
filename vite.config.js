import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GeneClarity build configuration.
// `base: './'` makes the built site work from any sub-folder, which keeps
// deployment simple (GitHub Pages, Netlify drop, or a local static server).
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    open: false,
  },
})
