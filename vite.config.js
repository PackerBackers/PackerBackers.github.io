import { fileURLToPath, URL } from 'node:url'
import path from 'path';


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/PackerBackers.github.io/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

