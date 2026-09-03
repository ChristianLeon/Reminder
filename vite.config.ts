import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: null,
      includeAssets: ["favicon-32.png", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "logo-reminder.png"],
      manifest: {
        name: "Reminder · Tu mente en claro",
        short_name: "Reminder",
        description: "Pendientes, recordatorios y seguimiento de hábitos.",
        theme_color: "#2764ff",
        background_color: "#f4f7fb",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: "/index.html"
      }
    })
  ]
});
