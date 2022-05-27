<template>
  <header>
    <div ref="logo" class="logo" :class='{black: store.isBlack}'>ILLUMINATED ESCAPES</div>
    <div class="wrapper" :class='{black: store.isBlack}' ref="wrapper">
      <div class="email">
        <a href='mailto:info@illuminatedescapes.com'>
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>
        </a>
      </div>
      <div class="phone">
        <a href="callto:+18552226214">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Call</title><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
        </a>
      </div>
      <div ref="button" class="openMenu" @click="store.menuOpen = true">
        <button>Menu</button>
      </div>
    </div>
    <div class="menu" :class="{visible: store.menuOpen}">
      <div class="menu-wrapper">
        <div class="closeMenu" @click="store.menuOpen = false">
          <button>Close</button>
        </div>
        <div class="menu-content">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/locations">Locations</NuxtLink>
          <!-- <NuxtLink to="/humber-river">Contact</NuxtLink> -->
          <!-- <div v-for="(link, i) in props.data.links" key="link.i">
          </div> -->
        </div>
      </div>
      <div class="menu-overlay"></div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import gsap from 'gsap'
import { store } from '@/store/store'
import { reactive } from 'vue'
const props = defineProps(['data'])
const links = props.data.links

const logo = ref(null)
const button = ref(null)
const wrapper = ref(null)

onMounted(() => {
  let items = wrapper.value.querySelectorAll('.phone, .email')
  gsap.fromTo(items, {y:'-100%', autoAlpha:0}, {y:'0%', autoAlpha:1, duration:1, stagger:0.2, ease:'expo.out'}, 0.2)
  gsap.fromTo(logo.value, {y:'-100%', autoAlpha:0}, {y:'0%', autoAlpha:1, duration:1, ease:'expo.out'}, 0.6)
  gsap.fromTo(button.value, {y:'-100%', autoAlpha:0}, {y:'0%', autoAlpha:1, duration:1, ease:'expo.out'}, 0.8)
})
</script>

<style lang="scss" scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}

  .logo {
    position: fixed;
    z-index: 6;
    left: 50%;
    top: 60px;
    transform: translateX(-50%);
    font-size: 12px;
    width: 100px;
    text-align: center;
    font-family: 'Sharp Grotesk', Helvetica, sans-serif;
    transition: color 0.5s cubic-bezier(.35,.17,.25,1);

    &.black {
      color: black;
      transition: border 0.5s cubic-bezier(.35,.17,.25,1);
    }
    
    @include wide-mobile() {
      font-size: 14px;
      text-align: left;
      left: 25px;
      top: 35px;
      transform: translateX(0%);
    }
  }

  .wrapper {
    position: fixed;
    top: 60px;
    right: 60px;
    z-index: 5;
    display: flex;
    gap: 15px;
    transition: color 0.5s cubic-bezier(.35,.17,.25,1);

    &.black {
      color: black;
      transition: color 0.5s cubic-bezier(.35,.17,.25,1);
      .phone, .email {
        border: 1px solid rgba(0, 0, 0, 0.2);
        transition: border 0.5s cubic-bezier(.35,.17,.25,1);
        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.6);
        }
      }
      .openMenu {
        button {
          border: 1px solid rgba(0, 0, 0, 0.2);
          transition: border 0.5s cubic-bezier(.35,.17,.25,1);
          &:hover {
            border: 1px solid rgba(0, 0, 0, 0.6);
          }
        }
      }
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 20px;
      height: 20px;
    }
    @include wide-mobile() {
      gap: 7px;
      font-size: 14px;
      top: 30px;
      right: 20px;
    }

    .phone, .email {
      width: 48px;
      height: 48px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: border 0.5s cubic-bezier(.35,.17,.25,1);
      border-radius: 48px;
      @include wide-mobile() {
        width: 38px;
        height: 38px;
      }

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.6);
      }
    }
  }

  .openMenu {

    text-transform: uppercase;
    font-family: 'Sharp Grotesk', Helvetica, sans-serif;

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 15px 30px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: border 0.5s cubic-bezier(.35,.17,.25,1);
      border-radius: 35px;

      @include wide-mobile() {
        padding: 10px 20px;
      }

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.6);
      }
    }
  }

  .menu {
    pointer-events: none;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &.visible {
      .menu-wrapper {
        transform: translateX(0%);
      }
      .menu-overlay {
        opacity: 0.7;
      }
    }

    &-overlay {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
      transition: opacity 0.8s cubic-bezier(.35,.17,.25,1);
    }

    &-wrapper {
      z-index: 11;
      pointer-events: all;
      position: absolute;
      right: 0;
      width: 50%;
      height: 100%;
      background-color: white;
      transform: translateX(100%);
      transition: transform 0.8s cubic-bezier(.35,.17,.25,1);
      @include wide-mobile() {
        width: 80%;
      }
    }

    &-content {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      color: black;
      font-family: 'Sharp Grotesk';
      font-size: 5vw;
      @include wide-mobile() {
        font-size: 40px;
        gap: 10px;
      }

      a {
        transition: opacity 0.4s cubic-bezier(.35,.17,.25,1);
      }
      a:hover {
        opacity: 0.4;
      }
    }

    .closeMenu {
      position: fixed;
      top: 60px;
      right: 60px;
      z-index: 5;
      text-transform: uppercase;
      font-family: 'Sharp Grotesk', Helvetica, sans-serif;
      color: black;
      @include wide-mobile() {
        top: 40px;
        right: 40px;
      }

      button {
        display: block;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 30px;
        border: 1px solid rgba(0, 0, 0, 0.6);
        transition: border 0.5s cubic-bezier(.35,.17,.25,1);
        border-radius: 35px;

        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

</style>