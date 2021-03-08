import vue from "@vitejs/plugin-vue"; //official plugin 提供 Vue 3 单文件组件支持
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      views: [__dirname, "src"].join(""),
    },
  },
});
