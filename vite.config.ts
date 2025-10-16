import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import vitePluginSvgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  build: {
    outDir: "docs", // сюда будет собираться билд вместо dist
  },
  base: "./", // чтобы пути к ассетам были относительными
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@types": path.resolve(__dirname, "src/types"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@UI": path.resolve(__dirname, "src/components/UI"),
    },
  },
});
