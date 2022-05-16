<template>
  <div class="canvas-wrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

const container = ref(null)
const canvas = ref(null)
const { $LocomotiveScroll } = useNuxtApp()

class Scroll {
  constructor(container) {
    this.container = container
  }

  init() {
    this.scroll = new $LocomotiveScroll({
      el: this.container,
      smooth: true,
      getDirection: true,
      scrollFromAnywhere: true
    })
    this.scroll.on('scroll', ScrollTrigger.update)
    ScrollTrigger.scrollerProxy(this.container, {
      scrollTop (value) {
        return arguments.length ? this.scroll.scrollTo(value, 0, 0) : this.scroll.scroll.instance.scroll.y
      },
      getBoundingClientRect () {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: this.container.style.transform ? 'transform' : 'fixed'
    })
    ScrollTrigger.addEventListener('refresh', () => this.scroll.update())
    ScrollTrigger.refresh()
  }

  destroy() {
    this.scroll.destroy()
  }

  update() {
    this.scroll.update()
  }
}

function initCanvas(canvas, container) {
  let context = canvas.getContext('2d')
  let images = []
  let scrolledFrame = {
    frame: 0
  }
  let frameCount = 301
  
  canvas.width = 1920
  canvas.height = 1080
  const currentFrame = index => (
    '/public/timeline/SONAR' + (index + 1) + '.webp'
  )
  
  for (let i = 0; i < frameCount; i++) {
    let img = new Image()
    img.src = currentFrame(i)
    images.push(img)
  }

  images[0].onload = render

  gsap.timeline({
    onUpdate: render,
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2,
      markers: true
    }
  })
  .to(scrolledFrame, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    duration: 2
  }, 0)

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(images[scrolledFrame.frame], 0, 0)
  }
}

onMounted(() => {
  const smoothScroll = new Scroll(container.value)
  // smoothScroll.init()
  initCanvas(canvas.value, container.value)
})
</script>

<style lang="scss" scoped>
.canvas-wrapper {
  position: fixed;
  z-index: 4;
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