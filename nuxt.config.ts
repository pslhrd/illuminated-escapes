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

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Illuminated Escapes, the new way for kayaks." },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { property: 'og:title', content: 'Illuminated Escapes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/favicon.ico' },
    ]
  },

  styleResources: {
    scss: [
      '@/assets/style/_variables.scss' // use underscore "_" & also file extension ".scss"
    ]
  },

  modules: [
    '@nuxtjs/prismic',
    // '@nuxtjs/style-resources'
  ],

  build: {
    transpile: ['@fawmi/vue-google-maps']
  },

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
