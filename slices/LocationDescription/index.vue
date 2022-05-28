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
    <div class="cta"> 
      <PrismicLink :field="slice.primary.link" target="_blank">
        <PrismicRichText :field="slice.primary.button" />
      </PrismicLink>   
    </div>
    <div class="labor">
      <PrismicRichText :field="slice.primary.labor" />
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { gsap } from 'gsap/dist/gsap.js'
import { store } from '@/store/store'
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
        start: "top bottom",
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
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y:'50%',
      x:'100%',
      rotate: -20,
    })
    ScrollTrigger.create({
      trigger: this.$refs.container,
      start: 'top top',
      end: 'bottom top',
      onEnter: () => store.isBlack = true,
      onLeave: () => store.isBlack = false,
      onEnterBack: () => store.isBlack = true,
      onLeaveBack: () => store.isBlack = false
    })
  },

  unmounted() {
    store.isBlack = false
  }
}
</script>

<style lang="scss" scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
.cta {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 100px;

  a {
    border: 1px solid black;
    border-radius: 40px;
    transition: transform 0.6s cubic-bezier(.0,.0,.0,1);
    font-family: 'Sharp Grotesk';
    text-transform: uppercase;
    color: black;
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    @include wide-mobile() {
      width: 60%;
    }
    &:hover {
      color: white;
      transform: scale(1.1);
      background-color: black;  
    }
  }
}
.location-description {
  width: 100%;
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: white;

  @include wide-mobile() {
    padding-top: 40px;
    padding-bottom: 40px;
  }

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

    @include wide-mobile() {
      width: 80vw;
      margin-left: 10vw;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .images {
    pointer-events: none;
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    @include wide-mobile() {
      display: none;
    }

    &-first {
      top: 5%;
      left: 0%;
      transform: rotate(-21deg);
    }

    &-second {
      right: 10%;
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
    width: 80vw;
    font-family: 'Sharp Grotesk';
    font-size: 7vw;
    color: black;
    text-transform: uppercase;
    margin-bottom: 75px;

    @include wide-mobile() {
      font-size: 45px;
      width: 90vw;
      margin-bottom: 75px;
    }
  }
}
</style>
