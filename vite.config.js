import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "views", // Setting views as the root directory
  publicDir: "../public", // Keeping public assets
  resolve: {
    alias: {
      "@": "/views", // Allows using "@/components" instead of relative paths
    },
  },
  server: {
    port: 5173, // Default Vite port, change if needed
    open: true, // Automatically open browser when running Vite
    strictPort: true, // Ensures Vite fails if port is already in use
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Auto-import React in JSX files
  },
});
