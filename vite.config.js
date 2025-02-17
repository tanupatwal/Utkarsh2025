import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Adjust chunk size warning limit if you want to suppress the warning
    chunkSizeWarningLimit: 1000, // This increases the limit to 1000 KB

    rollupOptions: {
      output: {
        // This creates a separate chunk for all node_modules dependencies
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Bundle all node_modules into a 'vendor' chunk
          }
        },
      },
    },
  },
});
