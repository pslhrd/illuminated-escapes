<script lang="ts" setup>
  import { gsap } from 'gsap/dist/gsap.js'
  import { components } from "~/slices"
  import { useRoute } from 'vue-router'
  const route = useRoute() 
  const uid = String(route.params.uid)

  const { client } = usePrismic()
  const { data: cmsData } = await useAsyncData(uid, () => client.getByUID('location', uid))
  const page = cmsData && cmsData.value ? cmsData.value.data : {title: 'page not found'}
  let mapData
  let isGoogle = false

  definePageMeta({
    pageTransition: {
      name: 'locations',
      css: false,
      mode: 'out-in',
      onEnter: (el, done) => {
        const text = el.querySelector('.location-hero-content-title')
        const image = el.querySelector('.location-hero-background')
        gsap.from(text, {
          y:'100%',
          opacity:0,
          duration:1.2,
          ease:'power4.out',
          delay:0.2
        })
      },
      onLeave: (el, done) => {
        console.log(el)
        gsap.to(el, {opacity:0, duration:0.6, ease:'expo.out'})
        setTimeout(() => {done()}, 600) 
      },
    }
  })

  // cmsData.value.data.slices.forEach(slice => {
  //   if (slice.slice_type === 'google_maps') {
  //     mapData = slice.primary
  //     isGoogle = true
  //   }
  // })
</script>

<template>
  <main>
    <!-- <h1>{{page.title}}</h1> -->
    <!-- <div v-if="page.content">{{page.content[0].text}}</div>
    <img v-if="page.heroimage" :src="page.heroimage.url" /> -->
    <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" :components="components"/>
    <!-- <Maps :googlemaps="mapData" v-if="isGoogle"/> -->
  </main>
</template>

<style scoped>
  main {
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
  }
  a {
    display: block;
    padding: 8px 0;
    margin-bottom: 16px;
  }
  img {
    max-width: 240px;
    padding: 16px;
  }
</style>