<template>
  <main class="about">
    <Head>
      <Title>Illuminated Escapes - About</Title>
    </Head>
    <div class="about-slider" ref="slider">
      <div class="slide"  v-for="(slide, i) in page.sections" :key="slide.i" :class="{current: currentIndex === i}">
        <PrismicRichText :field="slide.number" class="number"/>
        <div class="title">
          <span v-for="(line, i) in slide.title" :key="line.i">{{ line.text }}</span>
        </div>
        <PrismicRichText :field="slide.labor" class="labor"/>
      </div>
    </div>
    <IntroTimeline/>

    <section class="particles">
      <div class="wrapper">
        <img src="@/public/images/particles.png">
      </div>
      <div class="wrapper">
        <img src="@/public/images/particles.png">
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { Observer } from 'gsap/dist/Observer.js'
import { store } from '@/store/store'
gsap.registerPlugin(Observer)

const { client } = usePrismic()
const { data: cmsData } = await useAsyncData('about', () => client.getSingle('about'))
const page = cmsData.value.data

let currentIndex = ref(0)
const wrap = gsap.utils.wrap(0, page.sections.length)
let frame = {
  currentFrame: 0
}
const slider = ref(null)
const background = ref(null)
let animating = false

function GoToSlide(oldIndex, index, direction) {
  animating = true
  index = wrap(index)
  const slides = slider.value.querySelectorAll('.slide')
  const oldText = slides[oldIndex].querySelectorAll('.title span')
  const oldLabor = slides[oldIndex].querySelectorAll('.labor')
  const oldNumber = slides[oldIndex].querySelectorAll('.number')
  const newText = slides[index].querySelectorAll('.title span')
  const newLabor = slides[index].querySelectorAll('.labor')
  const newNumber = slides[index].querySelectorAll('.number')

  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        onComplete: () => animating = false,
      })
      
      tl
      .to(store, {frame: function(index, target, targets){
        if (store.frame > 250) {
          console.log('done')
          return store.frame - 300;
        } else {
          return target.frame + 100;
        }
      }, duration:2,snap: 'frame', ease:'power4.out'})
      .to(oldNumber, {autoAlpha:0, y:'-100%', duration:1, ease:'power4.out'}, '-=2')
      .to(oldText, {autoAlpha:0, y:'-100%', duration:1, stagger:0.1, ease:'power4.out'}, '-=1.9')
      .to(oldLabor, {autoAlpha:0, y:'-100%', duration:1, ease:'power4.out'}, '-=1.8')
      .fromTo(newNumber, {autoAlpha:0, y:'100%'}, {autoAlpha:1, y:'0%', duration:1, ease:'power4.out'}, '-=1.6')
      .fromTo(newText, {autoAlpha:0, y:'100%'}, {autoAlpha:1, y:'0%', duration:1, stagger:0.1, ease:'power4.out'}, '-=1.5')
      .fromTo(newLabor, {autoAlpha:0, y:'100%'}, {autoAlpha:1, y:'0%', duration:1, stagger:0.1, ease:'power4.out'}, '-=1.4')
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


onMounted(() => {
  const slides = slider.value.querySelectorAll('.slide')
  const oldText = slides[0].querySelectorAll('.title span')
  const oldLabor = slides[0].querySelectorAll('.labor')
  const oldNumber = slides[0].querySelectorAll('.number')
  const tl = gsap.timeline({onComplete: sliderGesture.init()})
  tl
  .fromTo(oldNumber,{autoAlpha:0, y:'100%'}, {autoAlpha:1, y:'0%', duration:1.2, ease:'power4.out'}, 1)
  .fromTo(oldText, {autoAlpha:0, y:'100%'}, {autoAlpha:1, y:'0%', duration:1.2, stagger:0.1, ease:'power4.out'}, '-=1')
  .fromTo(oldLabor, {autoAlpha:0, y:'100%'}, {autoAlpha:1, y:'0%', duration:1.2, ease:'power4.out'}, '-=1')
})

onUnmounted(() => {
  sliderGesture.destroy()
})
</script>


<style lang="scss" scoped>

@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
.about {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;

  &-slider {
    width: 100%;
    height: 100%;
  }

  &-background {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
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
      top: 50%;
      left: 50%;
      width: 70vw;
      height: 70vw;
      border-radius: 100%;
      border: 1px solid rgba(255, 255, 255, 0.3);
      transform: translate(-50%, -50%);
    }
    .circle2 {
      position: absolute;
      transform-origin: center center;
      top: 50%;
      left: 50%;
      width: 95vw;
      height: 95vw;
      border-radius: 100%;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transform: translate(-50%, -50%);
    }
  }

  .slide {
    pointer-events: none;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    gap: 50px;
    padding-left: 10vw;
    @include wide-mobile() {
      gap: 30px;
    }

    .title {
      span {
        opacity: 0;
        text-transform: uppercase;
        font-size: 5vw;
        line-height: 5vw;
        letter-spacing: -0.02em;
        font-family: 'Sharp Grotesk';
        display: block;
        text-align: left;
        @include wide-mobile() {
          font-size: 40px;
          line-height: 40px;
        }
      }
    }

    .number {
      opacity: 0;
      width: 50px;
      height: 35px;
      background-color: #1FCEDB;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 4px;
    }

    .labor {
      opacity: 0;
      text-align: left;
      display: block;
      width: 350px;
      font-size: 14px;
      line-height: 125%;

      @include wide-mobile() {
        font-size: 16px;
        width: 80%;
      }

    }

    &.current {
      visibility: visible;
      pointer-events: all;
    }
  }
}
.particles {
  z-index: 1;
  pointer-events: none;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;


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
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>