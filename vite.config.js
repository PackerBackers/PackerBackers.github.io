import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/PackerBackers.github.io/",
  plugins: [vue()],
  resolve: {
    alias: [

    ]
  },
})

