import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 安装jsx:@vitejs/plugin-vue-jsx
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

console.log(path.resolve(__dirname, "src/styles"))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve:{
    alias:{
      '@styles': path.resolve(__dirname, "/src/styles")
    }
  }
})
