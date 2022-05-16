<template>
  <div class="app">
    <Menu :data="menuData"/>
    <NuxtPage />
  </div>
</template>

<script setup>
  const { client } = usePrismic()
  const { data: menu } = await useAsyncData('menu', () => client.getSingle('menu'))
  const menuData = menu.value.data

  const nuxtApp = useNuxtApp()
    
  nuxtApp.hook('page:start', () => {
    console.log('page load start')
  })
  nuxtApp.hook('page:finish', () => {
    console.log('page load finish')
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