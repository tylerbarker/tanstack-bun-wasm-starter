import { defineConfig } from "@tanstack/start/config";
import wasm from "vite-plugin-wasm";
import viteTsConfigPaths from "vite-tsconfig-paths";

// import topLevelAwait from "vite-plugin-top-level-await";
// ☝️ 'vite-plugin-wasm' also recommends installing 'vite-plugin-top-level-await'
// I ran into issues deploying this to production, something to do with Bun

export default defineConfig({
  server: {
    preset: "bun",
    esbuild: {
      options: {
        target: "ES2022",
      },
    },
  },
  vite: {
    build: {
      target: "ES2022",
    },
    plugins: [
      wasm(),
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
