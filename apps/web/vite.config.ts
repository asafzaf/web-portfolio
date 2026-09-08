import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = "/web-portfolio/";

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 5173,
    open: base,
  },
  preview: {
    port: 4173,
    open: base,
  },
});
