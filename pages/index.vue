<template>
  <main class="main" v-smoothScroll>
    <div class="virtualScroll">
      <section ref="hero" class="index-hero">
        <div class="index-hero-content">
          <div class="index-hero-content-title" v-splitWords>{{ $prismic.asText(page.title) }}</div>
          <button>{{ $prismic.asText(page.button) }}</button>
        </div>
        <div class="video-wrapper">
          <video ref="videoDom" src="/videos/homepage.mp4" autoplay muted loop></video>
        </div>
      </section>
      <section ref="middle" class="middle">
        <div class="middle-image1">
          <prismic-image :field="page.image1" />
        </div>
        <div class="middle-image2">
          <prismic-image :field="page.image2" />
        </div>
        <div class="middle-content">
          <div class="middle-content-title" v-splitWords>{{ $prismic.asText(page.section1) }}</div>
          <div class="middle-content-labor">{{ $prismic.asText(page.labor1) }}</div>
          <button>{{ $prismic.asText(page.button1) }}</button>
        </div>
        <div class="middle-background">
          <div class="wrapper">
            <img src="@/public/images/particles.png">
          </div>
          <div class="wrapper">
            <img src="@/public/images/particles.png">
          </div>
        </div>
      </section>
      <section ref="bottom" class="bottom">
        <div class="bottom-content">
          <div class="bottom-content-subtitle">{{ $prismic.asText(page.subtitle2) }}</div>
          <div v-splitWords class="bottom-content-title">{{ $prismic.asText(page.title2) }}</div>
        </div>
        <!-- <div class="bottom-background"></div> -->
      </section>
    </div>
    <!-- <slice-zone v-if="page.slices && page.slices.length" :slices="page.slices" :components="components"/> -->
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)
import { useRoute } from 'vue-router'
const route = useRoute()
const { client } = usePrismic()
const { data: cmsData } = await useAsyncData('home', () => client.getSingle('home'))
const page = cmsData.value.data
import { components } from "~/slices"

const hero = ref(null)
const middle = ref(null)
const bottom = ref(null)
const videoDom = ref(null)

onMounted(() => {
  let heroWords = hero.value.querySelectorAll('.split-words')
  let heroContent = hero.value.querySelectorAll('.hero-content')
  let heroCTA = hero.value.querySelectorAll('button')
  let videoWrapper = hero.value.querySelectorAll('.video-wrapper')
  let video = hero.value.querySelectorAll('.video-wrapper video')
  const tl = gsap.timeline()
  tl
  .fromTo(videoWrapper, {scale:0.8, autoAlpha:0}, {scale:1, autoAlpha:1, ease:'expo.out', duration:1.4})
  .fromTo(heroWords, {autoAlpha:0, y:'100%' }, {autoAlpha:1, y:'0%', duration: 1.2, stagger:0.1, ease:'expo.out'}, '-=1')
  .fromTo(heroCTA, {autoAlpha:0, y:'100%' }, {autoAlpha:1, y:'0%', duration: 1.2, ease:'expo.out'}, '-=1')

})
</script>


<style lang="scss">

.split-words {
  display: inline-block;
  margin-right: 0.35em;
  // opacity: 0;
  transform-style: preserve-3d;
}

.index-hero {
  position: relative;
  width: 100%;
  height: 100vh;

  &-content {
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-title {
      width: 70%;
      font-size: 120px;
      letter-spacing: 0.02em;
      font-family: 'Sharp Grotesk';
      text-align: center;
    }

    button {
      padding: 20px 40px;
      background-color: #1FCEDB;
      border-radius: 10px;
      margin-top: 20px;
      transform: translateY(0%);
      filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
      // transition: transform 0.3s cubic-bezier(.35,.17,.25,1);

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .video-wrapper {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.middle {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &-background {
    pointer-events: none;
    position: absolute;
    z-index: 0;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .wrapper {
      animation: particles 60s linear infinite;
    }


    @keyframes particles {
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-100%);
      }
    }
  }

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-labor {
      width: 300px;
      line-height: 140%;
      font-size: 14px;
      margin-top: 30px;
      text-align: center;
    }

    button {
      padding: 20px 40px;
      border: 1px solid rgba(255, 255, 255, 0.265);
      border-radius: 35px;
      text-transform: uppercase;
      font-size: 14px;
      margin-top: 40px;
      transition: border 0.5s cubic-bezier(.35,.17,.25,1);

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.665);
      }
    }

    &-title {
      font-size: 10vw;
      font-family: 'Sharp Grotesk';

      span {
        display: block;
        text-align: center;

        &:nth-child(2) {
          color: #00FCFC;
        }
      }
    }
  }

  &-image1, &-image2 {
    opacity: 0;
    position: absolute;
    z-index: 4;
    width: 25vw;
    height: 35vw;
    overflow: hidden;
    border-radius: 35px;
    border: 6px solid white;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-image1 {
    top: -10%;
    left: 10%;
  }

  &-image2 {
    bottom: 0%;
    right: 10%;
  }
}

.bottom {
  position: relative;
  width: 100%;
  height: 90vh;
  z-index: 3;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    &-subtitle {
      font-size: 12px;
      margin-bottom: 40px;
      font-family: 'Sharp Grotesk';
      color: #BEBEBE;
    }

    &-title {
      font-size: 160px;
      font-family: 'Sharp Grotesk';
      color: black;
      width: 50%;
    }
  }
  
  &-background {
    overflow: hidden;
    position: absolute;
    z-index: 3;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    background-color: white;
    width: 220vw;
    height: 100vw;
  }
}
</style>