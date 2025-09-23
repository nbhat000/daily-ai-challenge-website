import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Root directory is the current directory
  root: '.',
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true
  },
  
  // CSS configuration
  css: {
    devSourcemap: true
  }
})
