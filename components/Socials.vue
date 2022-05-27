<template>
<div class="socials" ref="socials">
  <div class="socials-video">
    <div class="wrapper">
      <img ref="videoDom" src="/images/still.jpg" />
    </div>
  </div>
  <div class="socials-links">
    <span class="informations">Check us out!</span>
    <a href="https://instagram.com/illuminatedescapes?igshid" target="_blank" class="cta">Instagram</a>
    <a href="http://www.tiktok.com/illuminatedescapes" target="_blank" class="cta">TikTok</a>
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
      // background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding-bottom: 10vh;

      @include wide-mobile() {
        margin-top: 40px;
      }
    }

    .subtitle {
      font-family: 'Sharp Grotesk';
      font-size: 14px;
      text-transform: uppercase;
      color: white;
      opacity: 0.3;
    }

    .informations {
      font-size: 80px;
      font-family: 'Sharp Grotesk';
      text-transform: uppercase;
      width: 50%;
      color: white;
      text-align: center;

      @include wide-mobile() {
        width: 80%;
        font-size: 40px;
      }
    }

    .cta {
      display: block;
      width: 300px;
      height: 70px;
      border: 1px solid rgba(255, 255, 255, 0.391);
      border-radius: 40px;
      color: white;
      transition: transform 0.6s cubic-bezier(.0,.0,.0,1);
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;

      @include wide-mobile() {
        width: 60%;
      }

      &:hover {
        transform: scale(1.1);
        background-color: white;
        color: black;
      }

      a {
        font-family: 'Sharp Grotesk';
        text-transform: uppercase;
        color: white;
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
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &:after {
        content:'';
        width: 100%;
        position: absolute;
        height: 30vh;
        bottom: 0;
        left: 0;
        // background-color: white;
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