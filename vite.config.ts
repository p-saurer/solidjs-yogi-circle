/// <reference types="vite/client" />
// 👆 do not forget to add the references above
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
});
