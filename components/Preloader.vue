<template>
<div class="preloader" ref="preloader">
  <div class="video-wrapper" ref="wrapper">
    <video ref="videoDom" src="/videos/kayak.mp4" autoplay muted loop playsinline></video>
  </div>
</div>
</template>

<script setup>
import { store } from '@/store/store'
import { watch, onMounted, ref } from 'vue'
import { gsap } from 'gsap/dist/gsap.js'

const wrapper = ref(null)
const preloader = ref(null)

onMounted(() => {
  gsap.from(wrapper.value, {clipPath:'inset(100% 0% 0% 0%)', rotate:7,  scale:0.7, opacity:0, duration:1.4, ease:'expo.out'}, 0.5)
  watch(() => store.isLoaded, () => {
    gsap.to(preloader.value, {clipPath:'inset(0% 0% 100% 0%)', duration:1.4, ease:'expo.out'}, 4)
    gsap.to(wrapper.value, {rotate:7,  scale:0.7, duration:1.4, ease:'expo.out'}, 3.9)
    // gsap.to(preloader.value, {, duration:2})
  })
})
</script>

<style lang='scss'>

.preloader {
  pointer-events: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  overflow: hidden;
  background-color: black;
  clip-path: inset(0% 0% 0% 0%);

  display: flex;
  justify-content: center;
  align-items: center;

  .video-wrapper {
    width: 100%;
    height: 100%;
    clip-path: inset(0% 0% 0% 0%);

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>