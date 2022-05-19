<template>
  <main class="services">
    <h1><prismic-text :field="page.title" /></h1>
    <!-- <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" :components="components"/> -->
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
const { client } = usePrismic()
const { data: cmsData } = await useAsyncData('services', () => client.getSingle('service'))
const page = cmsData.value.data
import { components } from "~/slices"

onMounted(() => {
})
</script>


<style scoped>
  .about {
    width: 100%;
    height: 400vh;
  }
</style>