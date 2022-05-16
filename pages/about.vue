<template>
  <main>
    <h1><prismic-text :field="page.title" /></h1>
    <!-- <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" :components="components"/> -->
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { store } from '@/store/store'
const { client } = usePrismic()
const { data: cmsData } = await useAsyncData('about', () => client.getSingle('about'))
const page = cmsData.value.data
import { components } from "~/slices"

onMounted(() => {
  store.menuOpen = false
})
</script>


<style scoped>
</style>