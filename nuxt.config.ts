import { defineNuxtConfig } from 'nuxt'
import { linkResolver } from '@/prismic/linkResolver'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/fonts/fonts.scss',
    '@/assets/styles/main.scss',
    '@/assets/styles/reset.scss',
    '@/assets/styles/_variables.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
              additionalData: '@import "@/assets/styles/_variables.scss"',
        },
      },
    }
  },
  styleResources: {
    scss: [
      '@/assets/style/_variables.scss' // use underscore "_" & also file extension ".scss"
    ]
  },
  modules: [
    '@nuxtjs/prismic'
    // '@nuxtjs/style-resources'
  ],
  prismic: {
    endpoint: 'illuminated-escapes',
    // linkResolver: "@/prismic/linkResolver",
    clientConfig: {
      routes: [
        {
          type: "location",
          path: "/:uid"
        },
        {
          type: "home",
          path: "/"
        }
      ]
    }
  }
})
