// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // No need to import `describe`, `it`, `expect` in tests
    environment: 'jsdom',    // Use jsdom for DOM simulation in testing
    setupFiles: './src/setupTests.ts',  // Setup file for global configurations (like jest-dom)
  }
})
