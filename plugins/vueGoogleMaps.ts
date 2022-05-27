import { defineNuxtPlugin } from '#app'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyC1jS1g0BQ1otZ2DQJuVrGndULXFVx8t3o',
    },
  })
})