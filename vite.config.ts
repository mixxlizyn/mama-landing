import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/mama-landing/", // важно для GH Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // папка для деплоя на GH Pages
  },
  server: {
    host: "::",
    port: 8080,
  },
});
