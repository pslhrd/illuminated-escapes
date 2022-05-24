<template>
  <main class="summer">
    <div class="summer-hero">
      <div class="summer-hero-content">
        <PrismicRichText :field="page.title"/>
      </div>
      <div class="summer-hero-background">
        <PrismicImage :field="page.image" />
      </div>
    </div>
    <div class="summer-rates">
      <!-- <PrismicRichText :field="page.title2" /> -->
      <div class="wrapper">
        <div v-for="(price, i) in page.prices" :key="price.i" class="price">
          <PrismicRichText :field="price.title"  class="price-title"/>
          <PrismicRichText :field="price.price"  class="price-tag"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
const { client } = usePrismic()
const { data: cmsData } = await useAsyncData('services', () => client.getSingle('summer'))
const page = cmsData.value.data
</script>


<style lang="scss" scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
.summer {
  &-hero {
    position: relative;
    width: 100%;
    height: 100vh;

    @include wide-mobile() {
      height: 90vh;
    }

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
        text-transform: uppercase;
        @include wide-mobile() {
          font-size: 50px;
          margin-bottom: 20px;
        }
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

  &-rates {
    width: 100%;
    height: 100vh;
    background-color: white;
    text-align: center;
    color: black;

    .wrapper {
      .price {
        padding-top: 150px;
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &-title {
          font-size: 80px;
          font-family: 'Sharp Grotesk';
          text-transform: uppercase;
          width: 40%;
        }
      }

    }
  }
}
</style>