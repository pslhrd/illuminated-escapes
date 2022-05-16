<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  const route = useRoute() 
  console.log(route.params.uid)
  const uid = String(route.params.uid)

  const { client } = usePrismic()
  const { data: cmsData } = await useAsyncData(uid, () => client.getByUID('location', uid))
  const page = cmsData && cmsData.value ? cmsData.value.data : {title: 'page not found'}
</script>

<template>
  <main>
    <h1>{{page.title}}</h1>
    <div v-if="page.content">{{page.content[0].text}}</div>
    <img v-if="page.heroimage" :src="page.heroimage.url" />
    <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" />
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