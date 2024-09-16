import { defineConfig } from 'vite';
import path from 'node:path';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { builtinModules } from 'module';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        // Entry point for Electron main process
        entry: 'electron/main.ts',
      },
      preload: {
        // Entry point for Electron preload script
        input: path.join(__dirname, 'electron/preload.ts'),
      },
      renderer: process.env.NODE_ENV === 'test'
        ? undefined
        : {},
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // For importing with '@'
    },
  },
  build: {
    rollupOptions: {
      // Explicitly mark built-in Node.js modules as external for the Electron main process
      external: [
        ...builtinModules, // This makes sure modules like 'dgram' or 'fs' are not bundled
        'electron',
      ],
    },
  },
});
