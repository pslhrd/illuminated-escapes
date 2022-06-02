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
        </div>
        <div class="rate-background">
          <PrismicImage :field="price.image" />
        </div>
      </div>
    </div>
    <PrismicRichText :field="page.description2"  class="added-description"/>
     <PrismicRichText :field="page.missions" class="mission-title"/>
    <div class="summer-missions">
      <div class="mission" v-for="(mission, i) in page.elements" :key="mission.i">
        <div class="mission-wrapper">
          <PrismicRichText :field="mission.title" class="title"/>
          <PrismicRichText :field="mission.content" class="content" />
        </div>
      </div>
    </div>
    <div class="lessons">
      <PrismicRichText :field="page.lessons" class="lessons-title"/>
      <PrismicRichText :field="page.description" class="lessons-description"/>
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

})
</script>


<style lang="scss">
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

  .added-description {
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    display: block;
    width: 350px;
    text-align: center;
    opacity: 0.4;
    font-size: 12px;
  }

  .lessons {
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: black;
    border-radius: 50px;
    padding: 5vw 10vw;
    margin-left: 25%;
    margin-bottom: 150px;

    &-title {
      font-size: 60px;
      font-family: 'Sharp Grotesk';

      @include wide-mobile() {
        font-size: 40px;
      }
    }

    &-description {
      width: 50%;
      margin-top: 20px;
      @include wide-mobile() {
        width: 80%;
      }
    }

    @include wide-mobile() {
      width: 90%;
      margin-left: 5%;
      padding: 80px 80px;
      border-radius: 25px;
    }
  }

  .mission-title {
    width: 40%;
    margin-left: 30%;
    font-family: 'Sharp Grotesk';
    font-size: 3.6vw;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 150px;

    @include wide-mobile() {
      font-size: 40px;
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
        // border: 1px solid rgba(255, 255, 255, 0.203);
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
          margin-top: 15px;
          ul {
            li {
              opacity: 0.6;
              &:nth-child(1) {
                color: #A6C4FF !important;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  &-rates {
    width: 100%;
    background-color: rgb(0, 0, 0);
    text-align: center;
    color: black;
    display: flex;
    // flex-wrap: wrap;
    // flex-direction: column;

    @include wide-mobile() {
      flex-direction: column;
      height: 100vh;
    }

    .rate {
      margin-left: 0%;
      width: 80%;
      height: 80vh;
      position: relative;
      display: flex;
      margin-bottom: 40px;

      @include wide-mobile() {
        margin-bottom: 0px;
        padding: 20px;
        width: 100%;
        height: 50%;
      }

      &:nth-child(1) {
      }

      &:nth-child(2) {
        flex-direction: row-reverse;
      }

      &-content {
        z-index: 4;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        color: white;
        position: absolute;

        .rate-title {
          font-size: 50px;
          font-family: 'Sharp Grotesk';
          text-transform: uppercase;
          margin-bottom: 50px;

          @include wide-mobile() {
           font-size: 30px;
           margin-bottom: 20px;
          }
        }

        .rate-day, .rate-night {
          opacity: 0.4;
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
        overflow: hidden;
        background-color: black;

        @include wide-mobile() {
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