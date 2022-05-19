<template>
  <section class="location-hero" ref="container">
    <div class="location-hero-content">
      <!-- <div class="location-hero-content-cta">
        <NuxtLink>
          <button><PrismicRichText :field="slice.primary.button" /></button>
        </NuxtLink>
      </div> -->
      <div class="location-hero-content-title" ref="title">
        <PrismicRichText :field="slice.primary.title" />
      </div>
    </div>
    <div class="location-hero-background" >
      <PrismicImage ref="image" :field="slice.primary.hero" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: "LocationHero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  methods: {
    createAnimations() {
      gsap.from(this.$refs.title, {
        y:'100%',
        opacity:0,
        duration:1.2,
        ease:'power4.out',
        delay:0.2
      })
      // gsap.to(this.$refs.image.$el, {
      //   scrollTrigger: {
      //     trigger: this.$refs.container,
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: 1,
      //   },
      //   opacity: 0,
      //   rotate: 3,
      //   scale: 1.2
      // })
    }
  },

  mounted() {
    this.createAnimations()
  },
}
</script>

<style lang="scss" scoped>
.location {
  &-hero {
    position: relative;
    width: 100%;
    height: 100vh;

    &-content {
      position: absolute;
      z-index: 3;
      bottom: 0;
      width: 100%;
      text-align: center;

      &-title {
        font-family: 'Sharp Grotesk';
        font-size: 10vw;
        color: white;
      }

      &-cta {
        display: block;
        padding: 20px 40px;
        background-color: white;
      }
    }

    &-background {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: black;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
      }
    }
  }
}
</style>
