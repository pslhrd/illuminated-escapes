<template>
  <section class="location-specifications">
    <div class="left">
      <PrismicImage :field="slice.primary.image" />
    </div>
    <div class="right">
      <PrismicRichText class="subtitle" :field="slice.primary.subtitle" />
      <PrismicRichText class="informations" :field="slice.primary.informations" />
      <div class="cta" v-for="(item, i) in slice.items" :key="`slice-item-${i}`"> 
        <PrismicLink :field="item.link" target="_blank">
          <PrismicRichText :field="item.button" />
        </PrismicLink>   
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue"

export default {
  name: "LocationInformations",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
  .location-specifications {
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
