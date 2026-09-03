import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/icons/calculator-crypto.png'],
      manifest: {
        name: 'Calculadora de Pips',
        short_name: 'Pips Calculator',
        description:
          'Calculadora do valor de operações de trade a partir do valor do pip, quantidade de pips e valor máximo de operação.',
        lang: 'pt-BR',
        theme_color: '#2530d8',
        background_color: '#fefefe',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/assets/icons/calculator-crypto.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icons/calculator-crypto.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
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
