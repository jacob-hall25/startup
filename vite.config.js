import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
      '/ws': {
        targer: 'ws://localhost:4000',
        ws: true,
      },
    },
  },
});
