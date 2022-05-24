<template>
<div class="socials" ref="socials">
  <div class="socials-video">
    <div class="wrapper">
      <video ref="videoDom" src="/videos/kayak_animation.mp4" autoplay muted loop playsinline></video>
    </div>
  </div>
  <div class="socials-links">
    <span class="informations">Discover our socials networks !</span>
    <button class="cta"><a>Instagram</a></button>
    <button class="cta"><a>TikTok</a></button>
  </div>
</div>
</template>

<style lang="scss" scoped>
  @mixin wide-mobile {
    @media (max-width: 800px) { @content; }
  }
  .socials {
    width: 100vw;

    @include wide-mobile() {
    }

    &-video, &-links {
      width: 100%;

      @include wide-mobile() {
        width: 100%;
      }
    }

    &-links {
      // height: 30vh;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding-bottom: 10vh;
    }

    .subtitle {
      font-family: 'Sharp Grotesk';
      font-size: 14px;
      text-transform: uppercase;
      color: black;
      opacity: 0.3;
    }

    .informations {
      font-size: 60px;
      font-family: 'Sharp Grotesk';
      text-transform: uppercase;
      width: 50%;
      color: black;
      text-align: center;

      @include wide-mobile() {
        width: 80%;
        font-size: 40px;
      }
    }

    .cta {
      width: 300px;
      height: 70px;
      border: 1px solid black;
      border-radius: 40px;
      color: black;
      transition: transform 0.6s cubic-bezier(.0,.0,.0,1);

      @include wide-mobile() {
        width: 60%;
      }

      &:hover {
        transform: scale(1.1);
        background-color: black;

        a {
          color: white;
          
        }
      }

      a {
        font-family: 'Sharp Grotesk';
        text-transform: uppercase;
        color: black;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    &-video {
      height: 80vh;
      position: relative;
      border-radius: 40px;

      @include wide-mobile() {
        height: 60vh;
      }

      .wrapper {
        position: relative;
        z-index: 3;
        padding-left: 12.5%;
        width: 85%;
        height: 85%;

        @include wide-mobile() {
          width: 95%;
          height: 95%;
          padding-left: 2.5%;
        }
        // border-radius: 40px;
        overflow: hidden;
      }
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:after {
        content:'';
        width: 100%;
        position: absolute;
        height: 30vh;
        bottom: 0;
        left: 0;
        background-color: white;
      }
    }
  }
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

const socials = ref(null)

onMounted(() => {
  const video = socials.value.querySelector('.wrapper')
  gsap.from(video, {
    scrollTrigger: {
      trigger: socials.value,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
    },
    scale:0.6,
    rotate: -4
  })
})
</script>