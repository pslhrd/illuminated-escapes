<template>
  <section class="maps" ref="container">
    <div class="left">
      <PrismicImage :field="slice.primary.image" />
    </div>
    <div class="right">
      <div class="content">
        <PrismicRichText class="subtitle" :field="slice.primary.subtitle" />
        <PrismicRichText class="informations" :field="slice.primary.informations" />
      </div>
      <div class="map-wrapper">
        <div class="googleMap" ref="mapsDom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap/dist/gsap.js'
import { store } from '@/store/store'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)
import { ref } from 'vue'
import { Loader } from "@googlemaps/js-api-loader"
import { getSliceComponentProps } from "@prismicio/vue"

export default {
  name: "GoogleMaps",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  mounted() {
    ScrollTrigger.create({
      trigger: this.$refs.container,
      start: 'top top',
      end: 'bottom top',
      onEnter: () => store.isBlack = true,
      onLeave: () => store.isBlack = true,
      onEnterBack: () => store.isBlack = true,
      onLeaveBack: () => store.isBlack = false
    })
    const latitude = parseFloat(this.$props.slice.primary.latitute[0].text)
    const longitude = parseFloat(this.$props.slice.primary.longitude[0].text)
    const loader = new Loader({
      apiKey: "AIzaSyC1jS1g0BQ1otZ2DQJuVrGndULXFVx8t3o",
      version: "weekly"
    })
    const mapDom = this.$refs.mapsDom
    loader.load().then(() => {
      const map = new google.maps.Map(mapDom, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      })
      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      })
    })
  },

  setup() {
  }
}
</script>

<style lang='scss' scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
.maps {
  width: 100vw;
  height: 100vh;
  display: flex;

  @include wide-mobile() {
    flex-direction: column-reverse;
    height: 180vh;
  }

  .left, .right {
    width: 50%;
    height: 100%;

    @include wide-mobile() {
      width: 100%;
      height: 50%;
    }
  }

  .right {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .content {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .map-wrapper {
      padding: 25px;
      width: 100%;
      height: 50%;

      .googleMap {
        width: 100%;
        height: 100%;
        border-radius: 25px;
      }
    }
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

    @include wide-mobile() {
      width: 80%;
      font-size: 40px;
    }
  }

  .cta {
    width: 30%;
    height: 70px;
    border: 1px solid black;
    border-radius: 40px;
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

  .left {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
