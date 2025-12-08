import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";

// Import deployment configuration
// This allows you to manage all URLs in one place
import { getCurrentDeployment } from "./deployment.config.ts";

// https://astro.build/config
// Automatically detect deployment environment
const config = getCurrentDeployment();

export default defineConfig({
  site: config.url,
  base: config.base,
  output: 'static', // Explicitly set output mode for Vercel
  integrations: [
    swup({
      theme: ["overlay", { direction: "to-top" }],
      cache: true,
      progress: true,
    }),
    preact(),
    sitemap({
      // Generate single sitemap file with all URLs
      entryLimit: 50000,
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Daily Meditation Guide',
        short_name: 'Daily Meditation',
        description: 'Daily Meditation Guide - Your daily companion for mindfulness',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    }),
  ],

  image: {
    responsiveStyles: true,
    domains: ["pub-141831e61e69445289222976a15b6fb3.r2.dev"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

//swup theme variations:
// theme: "fade"
// theme: ["overlay", { direction: "to-top"}]
//
// for overlay and fade, further customization can be done in animate.css file
// To know about swup, visit https://swup.js.org/

// 📝 NOTE: To change your domain or deployment URL:
// Update the deploymentConfig in deployment.config.ts
// All URLs are managed from that single location!
