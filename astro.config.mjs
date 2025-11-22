import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";
import tailwindcss from "@tailwindcss/vite";

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
  ],

  image: {
    responsiveStyles: true,
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
