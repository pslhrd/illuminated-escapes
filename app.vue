<template>
  <div class="app">
    <Menu :data="menuData"/>
    <NuxtPage />
  </div>
</template>

<script setup>
  import { store } from '@/store/store'
  const { client } = usePrismic()
  const { data: menu } = await useAsyncData('menu', () => client.getSingle('menu'))
  const menuData = menu.value.data

  const nuxtApp = useNuxtApp()
    
  nuxtApp.hook('page:start', () => {
    console.log('done')
    if (store.menuOpen === true) {
      console.log('launched')
      store.menuOpen = false
    }
  })
  nuxtApp.hook('page:finish', () => {
    if (store.menuOpen === true) {
      console.log('launched')
      store.menuOpen = false
    }
  })
  // console.log(menuData)
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  overflow-x: hidden;
  // min-height: 100vh;
}
</style>