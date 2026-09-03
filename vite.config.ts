import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(dirname, './src/components'),
      '@shared': path.resolve(dirname, './src/shared'),
    },
  },
  server: {
    port: 3000,
    allowedHosts: ['retrain-negligee-cycling.ngrok-free.dev'],
  },
});
