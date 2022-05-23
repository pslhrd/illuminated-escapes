<template>
  <main>
    <section class="slider-content">
      <div class="slider" ref="slider">
        <div class="location" v-for="(location, i) in page.locations" :key="location.i" :class="{current: currentIndex === i}">
          <div class="location-image">
            <div class="location-image-wrapper">
              <prismic-image :field="location.image" />
            </div>
          </div>
          <div class="location-content">
            <div class="location-subtitle">
              <!-- <prismic-text class="text" :field="location.subtitle" /> -->
            </div>
            <div class="location-title">
              <prismic-text class="text" :field="location.title" />
            </div>
            <div class="location-cta">
              <NuxtLink :to="location.link.slug" @click="store.isLocation = true">
                <button><prismic-text :field="location.button" /></button>
              </NuxtLink>
            </div>
          </div>
          <div class="location-background">
            <div class="circle1"></div>
            <div class="circle2"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="particles">
      <div class="wrapper">
        <img src="@/public/images/particles.png">
      </div>
      <div class="wrapper">
        <img src="@/public/images/particles.png">
      </div>
    </section> -->
    <!-- <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" :components="components"/> -->
  </main>
</template>

<script setup>
const { client } = usePrismic()
import { store } from '@/store/store'
const { data: cmsData } = await useAsyncData('locations', () => client.getSingle('locations'))
const page = cmsData.value.data
import { components } from "~/slices"

import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { Observer } from 'gsap/dist/Observer.js'
import { ref, onMounted, nextTick, onUnmounted, reactive } from 'vue'
gsap.registerPlugin(Observer, ScrollTrigger)

let currentIndex = ref(0)
let animating = false
let slider = ref(null)
let wrap = gsap.utils.wrap(0, page.locations.length)
let observer;
let isLocation = ref(false)

function GoToSlide(oldIndex, index, direction) {
  animating = true
  index = wrap(index)
  let slides = slider.value.querySelectorAll('.location')
  let oldText = slides[oldIndex].querySelectorAll('.location-content .text')
  let oldImage = slides[oldIndex].querySelectorAll('.location-image-wrapper')
  let oldButton = slides[oldIndex].querySelectorAll('.location-cta')
  let oldBg = slides[oldIndex].querySelectorAll('.location-background div')
  let newText = slides[index].querySelectorAll('.location-content .text')
  let newImage = slides[index].querySelectorAll('.location-image-wrapper')
  let newButton = slides[index].querySelectorAll('.location-cta')
  let newBg = slides[index].querySelectorAll('.location-background div')
  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        onComplete: () => animating = false,
      })
      
      tl
      .fromTo(oldText, {
        autoAlpha:1,
        rotateX:0,
        y:'0%',
        z:0,
        transformOrigin: 'top center',
        perspectiveOrigin: 'bottom'
      }, {
        z:50,
        y:'-80%',
        rotateX:90, 
        autoAlpha:0,
        duration: 1.4,
        ease:'expo.inOut'
      })

      .fromTo(oldButton, {
        autoAlpha:1,
        y:'0%'
      }, {
        autoAlpha:0,
        y:'-20%',
        duration: 0.6,
        ease:'power3.inOut'
      }, '-=1')

      .fromTo(oldImage, {
        autoAlpha:1,
        y:'0%',
        x:'0%', 
        rotate:8,
      }, {
        y:'-60%',
        x:'-30%',
        rotate:30,
        autoAlpha:0,
        duration: 1.4,
        ease:'expo.inOut'
      }, '-=1')

      .fromTo(oldBg, {
        scale:1,
        autoAlpha:1
      }, {
        scale:1.4,
        autoAlpha:0,
        stagger:0.2,
        ease:'expo.inOut',
        duration: 1.2
      }, '-=1.4')

      .fromTo(newImage, {
        autoAlpha: 0,
        y:'60%',
        x:'40%',
        rotate:-20, 
      }, {
        rotate:8, 
        y:'0%',
        x:'0%',
        autoAlpha:1,
        duration: 1.4,
        ease:'expo.out'
      }, '-=0.7')
      .fromTo(newText, {
        z:-50,
        rotateX:90, 
        y:'80%',
        autoAlpha: 0,
        transformOrigin: 'bottom bottom'
      }, {
        z:0,
        y:'0%',
        rotateX:0, 
        autoAlpha:1,
        duration: 1.8,
        ease:'expo.out'
      }, '-=1.2')
      .fromTo(newButton, {
        y:'100%',
        autoAlpha: 0
      }, {
        y:'0%',
        autoAlpha:1,
        duration: 1.4,
        ease:'expo.out'
      }, '-=1.4')
      .fromTo(newBg, {
        scale:0.8,
        autoAlpha:0
      }, {
        scale:1,
        autoAlpha:1,
        stagger:0.2,
        ease:'expo.out',
        duration: 1.2
      }, '-=1.6')
  currentIndex.value = index
}

class Slider {
  init() {
    this.observer = Observer.create({
      type: "wheel,touch",
      wheelSpeed: -1,
      onDown: () => {
        !animating && GoToSlide(currentIndex.value, currentIndex.value - 1, -1)
      },
      onUp: () => {
        !animating && GoToSlide(currentIndex.value, currentIndex.value + 1, 1)
      },
      tolerance: 10,
      preventDefault: true,
    })
  }
  destroy() {
    this.observer.kill()
  }
}
const sliderGesture = new Slider()

definePageMeta({
  pageTransition: {
    name: 'locations',
    appear: false, 
    css: false,
    mode: 'out-in',
    onEnter: (el, done) => {    
      gsap.from(el, {opacity:0, duration:0.6, ease:'expo.out'})
      setTimeout(() => {done()}, 600) 
    },
    onLeave: (el, done) => {
      const image = el.querySelector('.current .location-image-wrapper')
      const text = el.querySelector('.current .location-title')
      const button = el.querySelector('.current .location-cta')
      const background = el.querySelector('.current .location-background')
      if (store.isLocation === true) {
        store.isTransition = true
        gsap.to(image, {width:'100vw',height:'100vh', top:0, left:0, rotate:0, opacity:0.6, borderRadius: '0px', duration:1.5, ease:'expo.inOut'})
        gsap.to(text, {opacity:0, y:'-100%', duration:1.4, ease:'expo.inOut'})
        gsap.to(button, {opacity:0, y:'-100%', duration:1.4, ease:'expo.inOut'})
        setTimeout(() => {done()}, 1500) 
        gsap.to(background, {opacity:0, scale:0, stagger:0.1, duration:1.4, ease:'expo.inOut'})
      } else {
        gsap.to(el, {opacity:0, duration:0.6, ease:'expo.out'})
        setTimeout(() => {done()}, 600) 
      }
    }
  }
})


onMounted(() => {
  store.isLocation = false
  function Once() {
    let slides = slider.value.querySelectorAll('.location')
    let Text = slides[0].querySelectorAll('.location-content .text')
    let Image = slides[0].querySelectorAll('.location-image-wrapper')
    let Button = slides[0].querySelectorAll('.location-cta')
    let Bg = slides[0].querySelectorAll('.location-background div')
    const tl = gsap.timeline({onComplete: sliderGesture.init()})
    tl
    .fromTo(Image, {
      autoAlpha: 0,
      y:'60%',
      x:'10%',
      rotate:-12,
    }, {
      rotate:8,
      y:'0%',
      x:'0%',
      autoAlpha:1,
      duration: 1.8,
      ease:'expo.out'
    })
    .fromTo(Text, {
      z:-50,
      y:'80%',
      rotateX:90, 
      autoAlpha: 0,
      transformOrigin: 'bottom center',
      perspectiveOrigin: 'bottom left'
    }, {
      z:0,
      y:'0%',
      rotateX:0, 
      autoAlpha:1,
      duration: 1.8,
      ease:'expo.out'
    }, '-=1.2')
    .fromTo(Button, {
      y:'100%',
      autoAlpha: 0
    }, {
      y:'0%',
      autoAlpha:1,
      duration: 1.4,
      ease:'expo.out'
    }, '-=1.4')
    .fromTo(Bg, {
      // scale:0.8,
      autoAlpha:0
    }, {
      // scale:1,
      autoAlpha:1,
      stagger:0.2,
      ease:'expo.out',
      duration: 1.6
    }, '-=1.6')
  }
  Once()
})

onUnmounted(() => {
  sliderGesture.destroy()
})

</script>


<style lang="scss" scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
.slider-content {
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}
.location {
  // visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;

  &.current {
    // visibility: visible;
    pointer-events: all;
  }

  &-title {
    font-family: 'Sharp Grotesk';
    font-size: 6vw;
    @include wide-mobile() {
      font-size: 44px;
      text-align: center;
    }
  }

  &-cta {
    opacity: 0;
    transform-style: preserve-3d;
    padding-top: 20px;

    &:hover {
      button {
        transform: scale(1.1);
      }
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    button {
      padding: 15px 30px;
      border-radius: 35px;
      background-color: white;
      color: black;
      font-size: 12px;
      transition: transform 0.6s cubic-bezier(.0,.0,.0,1);
    }
  }

  &-image {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    z-index: 3;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    &-wrapper {
      width: 25vw;
      height: 40vw;
      border-radius: 35px;
      overflow: hidden;
      transform: rotate(-8deg);
      opacity: 0;
      transform-style: preserve-3d;
      @include wide-mobile() {
        width: 60vw;
        height: 50vh;
      }
      

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &-background {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;

    div {
      opacity: 0;
    }

    .circle1 {
      position: absolute;
      transform-origin: center center;
      z-index: 0;
      top: 50%;
      left: 50%;
      width: 70vw;
      height: 70vw;
      border-radius: 100%;
      border: 1px solid rgba(255, 255, 255, 0.3);
      transform: translate(-50%, -50%);
      @include wide-mobile() {
        width: 100vw;
        height: 100vw;
      }
    }
    .circle2 {
      z-index: 0;
      position: absolute;
      transform-origin: center center;
      top: 50%;
      left: 50%;
      width: 95vw;
      height: 95vw;
      border-radius: 100%;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transform: translate(-50%, -50%);
      @include wide-mobile() {
        width: 130vw;
        height: 130vw;
      }
    }
  }

  &-content {
    position: absolute;
    top: 0;
    z-index: 3;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .text {
      transform-style: preserve-3d;
      opacity: 0;
      transform-origin: top center;
    }
  }
}

.particles {
  z-index: 1;
  background-color: black;
  pointer-events: none;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;


  @keyframes particles {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .wrapper {
    width: 100%;
    height: 100%;
    animation: particles 60s linear infinite;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>