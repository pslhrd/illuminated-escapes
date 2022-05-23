<template>
  <div class="canvas-wrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { Observer } from 'gsap/dist/Observer.js'
import { ref, onMounted, onUnmounted } from 'vue'
import { store } from '@/store/store'
gsap.registerPlugin(ScrollTrigger)

const props = defineProps(['frame'])

const container = ref(null)
const canvas = ref(null)
let renderLoop = 0

class timelineCanvas {
  constructor(canvas, container) {
    this.canvas = canvas
    this.container = container
  }

  init() {
    this.context = this.canvas.getContext('2d')
    this.images = []
    this.frameCount = 301
    
    this.canvas.width = 1920
    this.canvas.height = 1080
    const currentFrame = index => (
      '/public/timeline/SONAR' + (index + 1) + '.webp'
    )
    
    for (let i = 0; i < this.frameCount; i++) {
      let img = new Image()
      img.src = currentFrame(i)
      this.images.push(img)
    }
    console.log(this.images)

    this.images[0].onload = this.render()
  }

  render() {
    // console.log(store.frame)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.drawImage(this.images[store.frame], 0, 0)
  }
}

onMounted(() => {
  renderLoop = () => {
    newCanvas.render()
    requestAnimationFrame(renderLoop)
  }
  const newCanvas = new timelineCanvas(canvas.value, container.value)
  newCanvas.init()
  gsap.fromTo(canvas.value,{scale:0.7, autoAlpha:0}, {scale:1, autoAlpha:1, duration:1.4, ease:'power4.out'}, 1)
  requestAnimationFrame(renderLoop)
})

onUnmounted(() => {
  renderLoop = null
})
</script>

<style lang="scss" scoped>
.canvas-wrapper {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  pointer-events: none;
  max-width: 100vw;
  max-height: 100vh;
}
</style>