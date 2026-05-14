import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      outDir: 'dist',
      // Raise warning limit — our single page is expected to be large
      chunkSizeWarningLimit: 600,
      // Inline small assets directly into CSS/JS to cut HTTP requests
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          // Split vendor libraries into a separate cached chunk
          manualChunks: {
            react: ['react', 'react-dom'],
            motion: ['motion'],
            lenis: ['lenis'],
            lucide: ['lucide-react'],
          },
        },
      },
    },
  };
});
