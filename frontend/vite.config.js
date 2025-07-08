import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://local-eats-hub.vercel.app",
    },
  },

  plugins: [react()],
});
