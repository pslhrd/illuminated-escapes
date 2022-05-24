<template>
  <main class="services">
    <Head>
      <Title>Illuminated Escapes - Services</Title>
    </Head>
    <div class="right">
        <div class="right-wrapper">
          <PrismicRichText :field="page.rightext" />
            <button class="cta">LEARN MORE</button>
        </div>
        <PrismicImage :field="page.rightimage" />
    </div>
    <div class="left">
      <div class="left-wrapper">
        <PrismicRichText :field="page.lefttext" />
        <button class="cta">COMING SOON</button>
      </div>
      <PrismicImage :field="page.leftimage" />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
const { client } = usePrismic()
const { data: cmsData } = await useAsyncData('services', () => client.getSingle('services'))
const page = cmsData.value.data
onMounted(() => {
})
</script>


<style lang="scss" scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
  .services {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 100%;
      height: 100%;
    }
    @include wide-mobile() {
      flex-direction: column;
    }

    &:hover {
      img {
        opacity: 0.2;
      }
    }

    .right {
      &:hover {
        cursor: pointer;
      }
    }

    .left, .right {
      position: relative;
      width: 50%;
      height: 100%;
      overflow: hidden;
      z-index: 2;
      @include wide-mobile() {
        width: 100%;
        height: 50%;
      }

      .cta {
        opacity: 0;
        transform: translateY(50%);
        margin-top: 20px;
        font-size: 12px;
        padding: 15px 30px;
        border-radius: 30px;
        border: 1px solid white;
        letter-spacing: -0.02em;
        transition: all 1s cubic-bezier(.0,.0,.0,1);
      }

      &:hover {
        .cta {
          opacity: 1;
          transform: translateY(0%);
        }
        img {
          opacity: 1;
          transform: scale(1.2);
        }
      }
      

      &-wrapper {
        z-index: 3;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'Sharp Grotesk';
        font-size: 80px;
        letter-spacing: -0.04em;

        @include wide-mobile() {
          font-size: 60px;
        }
      }

      img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 1s cubic-bezier(.0,.0,.0,1);
      }
    }
  }
</style>