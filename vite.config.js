import { fileURLToPath, URL } from 'node:url'
import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/PackerBackers.github.io/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});


