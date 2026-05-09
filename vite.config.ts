import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Plugin che rimuove type="module" e crossorigin dai tag script
// necessario per aprire il file dist/index.html direttamente dal browser (file://)
// applicato solo in produzione per non rompere il dev server
function removeModuleType() {
  return {
    name: 'remove-module-type',
    apply: 'build' as const,
    transformIndexHtml(html: string) {
      return html
        .replace(/<script type="module"/g, '<script defer')
        .replace(/ crossorigin/g, '')
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), removeModuleType()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
      },
    },
  },
});
