import vue from "@vitejs/plugin-vue"; //official plugin 提供 Vue 3 单文件组件支持
import { resolve } from "path";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      assets: resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    proxy: {
      "/": {
        target: "http://192.168.0.140:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\//, "/"),
      },
    },
  },
});
