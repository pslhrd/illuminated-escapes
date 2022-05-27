<template>
  <main class="summer" ref="summer">
    <Head>
      <Title>Illuminated Escapes - Summer</Title>
    </Head>
    <div class="summer-hero">
      <PrismicRichText :field="page.title" class="title"/>
    </div>
    <div class="summer-rates">
      <div class="rate" v-for="(price, i) in page.prices" :key="price.i">
        <div class="rate-content">
          <PrismicRichText :field="price.title" class="rate-title" />
          <PrismicRichText :field="price.day" class="rate-day"/>
          <PrismicRichText :field="price.night" class="rate-night"/>
          <PrismicRichText :field="price.description" class="rate-description"/>
        </div>
        <div class="rate-background">
          <PrismicImage :field="price.image" />
        </div>
      </div>
    </div>
     <PrismicRichText :field="page.missions" class="mission-title"/>
    <div class="summer-missions">
      <div class="mission" v-for="(mission, i) in page.elements" :key="mission.i">
        <div class="mission-wrapper">
          <PrismicRichText :field="mission.title" class="title"/>
          <PrismicRichText :field="mission.content" class="content" />
        </div>
      </div>
    </div>
    <div class="particles">
      <div class="wrapper">
        <img src="@/public/images/particles.png">
      </div>
      <div class="wrapper">
        <img src="@/public/images/particles.png">
      </div>
    </div>
  </main>
</template>

<script setup>
import { gsap } from 'gsap/dist/gsap.js'
import { store } from '@/store/store'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)
import { ref, onMounted, nextTick } from 'vue'
const { client } = usePrismic()
const { data: cmsData } = await useAsyncData('summer', () => client.getSingle('summer'))
const page = cmsData.value.data
const summer = ref(null)

onMounted(() => {
  // window.scrollTo(0, 10)
  // ScrollTrigger.create({
  //   trigger: summer.value,
  //   start: 'top top',
  //   end: 'bottom top',
  //   onEnter: () => store.isBlack = true,
  //   onLeave: () => store.isBlack = true,
  //   onEnterBack: () => store.isBlack = true,
  //   onLeaveBack: () => store.isBlack = false
  // })
})
</script>


<style lang="scss" scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
.summer {
  background-color: rgb(0, 0, 0);
  &-hero {
    position: relative;
    width: 100%;
    height: 80vh;
    font-family: 'Sharp Grotesk';
    font-size: 6vw;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    background-color: rgb(0, 0, 0);
    @include wide-mobile() {
      font-size: 50px;
      margin-bottom: 20px;
      height: 50vh;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .title {
      width: 50%;

      @include wide-mobile() {
        width: 80%;
      }
    }
  }

  .mission-title {
    width: 50%;
    margin-left: 25%;
    font-family: 'Sharp Grotesk';
    font-size: 6vw;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 150px;

    @include wide-mobile() {
      font-size: 50px;
      width: 80%;
      margin-left: 10%;
      margin-bottom: 75px;
    }
  }

  &-missions {
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 150px;

    @include wide-mobile() {
      padding-left: 5%;
      padding-right: 5%;
    }
    .mission {
      width: 25%;
      height: 300px;
      padding: 20px;

      @include wide-mobile() {
        width: 100%;
      }

      &-wrapper {
        color: white;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(255, 255, 255, 0.203);
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        transition: transform 1s cubic-bezier(.0,.0,.0,1);

        &:hover {
          cursor: pointer;
          color: black;
          background-color: white;
          transform: scale(1.1);
        }

        .title {
          width: 80%;
          font-size: 22px;
          text-transform: uppercase;
          font-family: 'Sharp Grotesk';
        }

        .content {
          width: 60%;
          font-size: 14px;
          opacity: 0.6;
          margin-top: 15px;
        }
      }
    }
  }

  &-rates {
    padding-left: 10%;
    padding-right: 10%;
    width: 100%;
    height: 80vh;
    background-color: rgb(0, 0, 0);
    text-align: center;
    color: black;

    display: flex;

    @include wide-mobile() {
      flex-direction: column;
      height: 100vh;
      padding-left: 5%;
      padding-right: 5%;
    }

    .rate {
      width: 50%;
      height: 100%;
      position: relative;
      padding-top: 40px;
      padding-bottom: 40px;

      @include wide-mobile() {
        width: 100%;
        height: 50%;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      &:nth-child(1) {
        padding-right: 20px;
        padding-left: 40px;

        @include wide-mobile() {
          padding-right: 0px;
          padding-left: 0px;
        }
      }

      &:nth-child(2) {
        padding-right: 40px;
        padding-left: 20px;
        @include wide-mobile() {
          padding-right: 0px;
          padding-left: 0px;
        }
      }

      &-content {
        z-index: 4;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        color: white;

        .rate-title {
          font-size: 30px;
          font-family: 'Sharp Grotesk';
          text-transform: uppercase;
          margin-bottom: 50px;

          @include wide-mobile() {
           font-size: 30px;
           margin-bottom: 20px;
          }
        }

        .rate-day, .rate-night {
          margin-bottom: 5px;
          font-size: 20px;
          font-family: 'Sharp Grotesk';
          text-transform: uppercase;
        }

        .rate-description {
          margin-top: 50px;
          font-size: 16px;
          line-height: 125%;
          width: 50%;

          @include wide-mobile() {
            width: 80%;
            margin-top: 20px;
          }
        }
      }

      &-background {
        width: 100%;
        height: 100%;
        border-radius: 40px;
        overflow: hidden;
        background-color: black;

        @include wide-mobile() {
          border-radius: 20px;
        }

        img {
          opacity: 0.6;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .particles {
    pointer-events: none;
    position: fixed;
    z-index: 0;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

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
}
</style>