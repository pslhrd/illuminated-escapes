<template>
  <div class="app">
    <!-- <Preloader /> -->
    <Menu :data="menuData"/>
    <NuxtPage />
  </div>
</template>

<script setup>
  import { onMounted, nextTick } from 'vue'
  import { store } from '@/store/store'
  const { client } = usePrismic()
  const { data: menu } = await useAsyncData('menu', () => client.getSingle('menu'))
  const menuData = menu.value.data

  const nuxtApp = useNuxtApp()

  onMounted(() => {
    store.isLoaded = true
  })
    
  nuxtApp.hook('page:start', () => {
    if (store.menuOpen === true) {
      store.menuOpen = false
    }
  })
  nuxtApp.hook('page:finish', () => {
    if (store.isOnce === true) {
      store.isOnce = false
    }
    if (store.menuOpen === true) {
      store.menuOpen = false
    }
  })
  // console.log(menuData)
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
}
</style>