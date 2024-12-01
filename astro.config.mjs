import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import webmanifest from "astro-webmanifest";
// @ts-check
import { defineConfig } from "astro/config";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    serviceWorker(),
    webmanifest({
      name: "fiber-xr-astro",
      icon: "public/favicon.svg",
      short_name: "fiber-xr-astro",
      description: "fiber-xr-astro",
      start_url: "/",
      theme_color: "#333333",
      background_color: "#ffffff",
      display: "standalone",
    }),
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      defaultColor: false,
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  vite: {
    plugins: [basicSsl()],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
