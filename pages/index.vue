<template>
  <main class="main" v-smoothScroll>
    <Head>
      <Title>Illuminated Escapes - Home</Title>
    </Head>
    <div>
      <section ref="hero" class="index-hero">
        <div class="index-hero-content">
          <div class="index-hero-content-title" v-splitWords>{{ $prismic.asText(page.title) }}</div>
          <NuxtLink to="/locations">
            <button>{{ $prismic.asText(page.button) }}</button>
          </NuxtLink>
        </div>
        <div class="video-wrapper">
          <video ref="videoDom" src="/videos/homepage.mp4" autoplay muted loop playsinline></video>
        </div>
        <div class="socials-links" ref="socials">
          <a href="https://instagram.com/illuminatedescapes?igshid" target="_blank" class="cta"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg></a>
          <a href="http://www.tiktok.com/illuminatedescapes" target="_blank" class="cta"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Tiktok</title><path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"/></svg></a>
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
          <!-- <div class="middle-content-labor" v-if="page.labor1">{{ $prismic.asText(page.labor1) }}</div> -->
          <!-- <NuxtLink to="/locations">
            <button>{{ $prismic.asText(page.button1) }}</button>
          </NuxtLink> -->
        </div>
        <div class="middle-background">
          <div class="middle-background-image" ref="image">
            <img src="/images/background.webp" />
          </div>
          <div class="wrapper">
            <img src="@/public/images/particles.png">
          </div>
          <div class="wrapper">
            <img src="@/public/images/particles.png">
          </div>
        </div>
      </section>
      <!-- <section ref="bottom" class="bottom">
        <div class="bottom-content">
          <div class="bottom-content-subtitle">{{ $prismic.asText(page.subtitle2) }}</div>
          <div class="bottom-content-title">{{ $prismic.asText(page.title2) }}</div>
        </div>
      </section> -->
      <!-- <Socials /> -->
    </div>
  </main>
</template>

<script setup>
import { store } from '@/store/store'
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
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
const image = ref(null)
const socials = ref(null)

onMounted(() => {
  window.scrollTo(0, 0)
  const preloadDelay = store.isOnce ? 4 : 0
  let heroWords = hero.value.querySelectorAll('.split-words')
  let heroContent = hero.value.querySelectorAll('.hero-content')
  let heroCTA = hero.value.querySelectorAll('button')
  let videoWrapper = hero.value.querySelectorAll('.video-wrapper')
  let video = hero.value.querySelectorAll('.video-wrapper video')
  let lines = middle.value.querySelectorAll('.split-words')
  let socialsLinks = socials.value.querySelectorAll('a')
  setTimeout(() => {
    ScrollTrigger.refresh()
    ScrollTrigger.update()
  }, 600)
  const tl = gsap.timeline()
  tl
  .fromTo(videoWrapper, {scale:0.8, autoAlpha:0}, {scale:1, autoAlpha:1, ease:'expo.out', duration:1.4, delay:preloadDelay})
  .fromTo(heroWords, {autoAlpha:0, y:'100%' }, {autoAlpha:1, y:'0%', duration: 1.2, stagger:0.1, ease:'expo.out'}, '-=1')
  .fromTo(heroCTA, {autoAlpha:0, y:'100%' }, {autoAlpha:1, y:'0%', duration: 1.2, ease:'expo.out'}, '-=1')
  .fromTo(socialsLinks, {autoAlpha:0, y:'100%' }, {autoAlpha:1, y:'0%', duration: 1.2, stagger:0.1, ease:'expo.out'}, '-=1')

  gsap.from(lines, {
    scrollTrigger: middle.value,
    autoAlpha: 0,
    yPercent: 100,
    duration: 2,
    ease:'power4.out',
    stagger:0.2
  }, 1)

  const firstImage = middle.value.querySelector('.middle-image1')
  const secondImage = middle.value.querySelector('.middle-image2')

})

onUnmounted(() => {
  let triggers = ScrollTrigger.getAll()
  for (let trigger of triggers) {
    trigger.kill(true)
  }
})
</script>


<style lang="scss">

@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}


.split-words {
  display: block;
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
      font-size: 6vw;
      letter-spacing: 0.02em;
      font-family: 'Sharp Grotesk';
      text-align: center;

      @include wide-mobile() {
        font-size: 60px;
        width: 90%;
      }
    }

    a {
      font-family: 'Sharp Grotesk';
      transition: transform 0.3s cubic-bezier(.35,.17,.25,1);
      button {
        padding: 20px 40px;
        // background-color: #6a33ce;
        border: 2px solid hsla(0,0%,100%,.2);
        border-radius: 50px;
        margin-top: 20px;
        // transform: translateY(0%);
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));
        transition: border 0.3s cubic-bezier(.35,.17,.25,1);
      }     
      &:hover {
        transform: scale(1.1);
        button {
          border: 2px solid hsla(0,0%,100%,.6);
        }
      }
    }
  }

  .socials-links {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;

    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    
    a {
      font-family: 'Sharp Grotesk';
      width: 40px;
      height: 40px;
      border-radius: 30px;
      margin-right: 10px;
      border: 1px solid rgba(255, 255, 255, 0.21);
      transition: border 0.5s cubic-bezier(.35,.17,.25,1);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;

      svg {
        width: 20px;
        fill: white;
      }

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.6);
      }
    }
  }

  .video-wrapper {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include wide-mobile() {
    height: 100vh;
  }

  &-background {
    pointer-events: none;
    position: absolute;
    z-index: 0;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-image {
      margin-left: 15%;
      width: 70%;
      position: absolute;
      bottom: -40%;
      z-index: 0;
      transform: rotate(-8deg);

      @include wide-mobile() {
        width: 100%;
        bottom: -10%;
        margin-left: 0%;
      }
    }

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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;

    &-labor {
      width: 300px;
      line-height: 140%;
      font-size: 14px;
      margin-top: 30px;
      text-align: center;
    }


    button {
      color: black;
      padding: 20px 40px;
      border: 1px solid rgba(255, 255, 255, 0.265);
      border-radius: 35px;
      text-transform: uppercase;
      font-size: 14px;
      margin-top: 40px;
      background-color: white;
      transition: border 0.5s cubic-bezier(.35,.17,.25,1);

      &:hover {
        transform: scale(1.1);
        border: 1px solid rgba(255, 255, 255, 0.665);
      }
    }

    &-title {
      font-size: 4vw;
      font-family: 'Sharp Grotesk';

      @include wide-mobile() {
        font-size: 40px;
      }

      span {
        display: block;
        text-align: center;

        &:nth-child(3) {
          color: #A6C4FF;
        }
      }
    }
  }

  &-image1, &-image2 {
    opacity: 0;
    position: absolute;
    z-index: 4;
    width: 14vw;
    height: 16vw;
    overflow: hidden;
    border-radius: 20px;

    @include wide-mobile() {
      width: 100px;
      height: 150px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-image1 {
    @include wide-mobile() {
      display: none;
    }
    top: 10%;
    left: 10%;
  }

  &-image2 {
    bottom: 10%;
    right: 10%;
  }
}

.bottom {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include wide-mobile() {
    height: 70vh;
  }
  // border-top-left-radius: 200px;
  // border-top-right-radius: 200px;

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
      @include wide-mobile() {
        font-size: 60px;
        width: 90%;
      }
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