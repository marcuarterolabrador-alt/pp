import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works when hosted on GitHub Pages under any subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
})
