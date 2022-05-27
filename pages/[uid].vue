<script lang="ts" setup>
  import { gsap } from 'gsap/dist/gsap.js'
  import { components } from "~/slices"
  import { useRoute } from 'vue-router'
  import { ref, onMounted, nextTick } from 'vue'
  const route = useRoute() 
  const uid = String(route.params.uid)

  const { client } = usePrismic()
  const { data: cmsData } = await useAsyncData(uid, () => client.getByUID('location', uid))
  const page = cmsData && cmsData.value ? cmsData.value.data : {title: 'page not found'}
  // let mapData
  let isGoogle = false

  definePageMeta({
    pageTransition: {
      name: 'locations',
      css: false,
      mode: 'out-in',
      onLeave: (el, done) => {
        console.log(el)
        gsap.to(el, {opacity:0, duration:0.6, ease:'expo.out'})
        setTimeout(() => {done()}, 600) 
      },
    }
  })
  
</script>

<template>
  <main ref="location">
    <Head>
      <Title>Illuminated Escapes - Locations</Title>
    </Head>
    <!-- <h1>{{page.title}}</h1> -->
    <!-- <div v-if="page.content">{{page.content[0].text}}</div>
    <img v-if="page.heroimage" :src="page.heroimage.url" /> -->
    <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" :components="components"/>
    <!-- <Maps :latitude="mapData.primary.latitute[0].text"/> -->
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