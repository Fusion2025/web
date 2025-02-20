// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      meta: [
        { name: "title", content: "FUSION 2025" },
        { name: "ogTitle", content: "FUSION 2025" },
        {
          name: "description",
          content: "28th International Conference on Information Fusion.",
        },
        {
          name: "ogDescription",
          content: "28th International Conference on Information Fusion.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
      title: "FUSION 2025",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  // @ts-expect-error - Property not found
  build: {
    transpile: ["vuetify"],
  },

  fonts: {
    priority: ["local", "google"],
  },

  modules: [
    // @ts-expect-error - No typing defined
    (_options, nuxt) => {
      // @ts-expect-error - No typing defined
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/sitemap",
  ],

  routeRules: {
    // @ts-expect-error - No typing defined
    "/program": {
      redirect: "/schedule",
    },
  },

  ssr: false,

  telemetry: { enabled: false },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: "2025-02-19",
});
