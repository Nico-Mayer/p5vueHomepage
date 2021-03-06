import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content"],
  unocss: {},
  css: ["@unocss/reset/tailwind.css", "/app.css"],
  content: {
    highlight: {
      theme: "nord",
    },
  },
})
