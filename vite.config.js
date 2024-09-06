import { fileURLToPath, URL } from "node:url";
import sassDts from "vite-plugin-sass-dts";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    sassDts(),
    svgLoader({
      defaultImport: "url", // or 'raw'
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/shared/styles/main.scss";
        `,
      },
    },
  },
});
