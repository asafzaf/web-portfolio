import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = "/web-portfolio/invenstory/";

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 5174,
    strictPort: true,
    open: base,
  },
  preview: {
    port: 4174,
    open: base,
  },
});
