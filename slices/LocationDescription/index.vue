<template>
  <section class="location-description" ref="container">
    <div class="images">
      <div class="images-first" ref="first">
        <PrismicImage :field="slice.primary.description1" />
      </div>
      <div class="images-second" ref="second">
        <PrismicImage :field="slice.primary.description2" />
      </div>
    </div>
    <div class="wrapper">
      <div class="subtitle">
        <PrismicRichText :field="slice.primary.subtitle" />
      </div>
      <div class="description">
        <PrismicRichText :field="slice.primary.description" />
      </div>
    </div>
    <div class="labor">
      <PrismicRichText :field="slice.primary.labor" />
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)
import { getSliceComponentProps } from "@prismicio/vue";

export default {
  name: "LocationDescription",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  mounted() {
    gsap.to(this.$refs.first, {
      scrollTrigger: {
        trigger: this.$refs.container,
        start: "top +=20%",
        end: "bottom top",
        scrub: 1,
      },
      y:'100%',
      x:'-50%',
      rotate: 10,
    })
    gsap.to(this.$refs.second, {
      scrollTrigger: {
        trigger: this.$refs.container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y:'50%',
      x:'100%',
      rotate: -20,
    })
  }
}
</script>

<style lang="scss" scoped>
.location-description {
  width: 100%;
  position: relative;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: white;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .subtitle {
    font-family: 'Sharp Grotesk';
    color: #BEBEBE;
    font-size: 14px;
    margin-bottom: 50px;
  }

  .labor {
    font-family: 'Matter';
    margin-left: 15vw;
    width: 340px;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    color: black;
  }

  .images {
    pointer-events: none;
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &-first {
      top: 5%;
      left: 10%;
      transform: rotate(-21deg);
    }

    &-second {
      right: 20%;
      bottom: 15%;
      transform: rotate(6deg);
    }

    &-first, &-second {
      width: 250px;
      height: 320px;
      border-radius: 20px;
      overflow: hidden;
      position: absolute;
      filter: drop-shadow(16px 15px 24px rgba(0, 0, 0, 0.15));

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .description {
    width: 60vw;
    font-family: 'Sharp Grotesk';
    font-size: 8vw;
    color: black;
    text-transform: uppercase;
    margin-bottom: 150px;
  }
}
</style>
