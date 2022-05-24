<template>
  <div ref="logo" class="logo">ILLUMINATED ESCAPES</div>
  <div ref="button" class="openMenu" @click="store.menuOpen = true">
    <button>Menu</button>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { store } from '@/store/store'
import { reactive } from 'vue'
const props = defineProps(['data'])
const links = props.data.links

const logo = ref(null)
const button = ref(null)

onMounted(() => {
  gsap.fromTo(logo.value, {y:'-100%', autoAlpha:0}, {y:'0%', autoAlpha:1, duration:1, ease:'expo.out'}, 0.2)
  gsap.fromTo(button.value, {y:'-100%', autoAlpha:0}, {y:'0%', autoAlpha:1, duration:1, ease:'expo.out'}, 0.4)
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

    @include wide-mobile() {
      font-size: 14px;
      text-align: left;
      left: 40px;
      top: 50px;
      transform: translateX(0%);
    }
  }

  .openMenu {
    position: fixed;
    top: 60px;
    right: 60px;
    z-index: 5;
    text-transform: uppercase;
    font-family: 'Sharp Grotesk', Helvetica, sans-serif;
    @include wide-mobile() {
      top: 40px;
      right: 40px;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 15px 30px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: border 0.5s cubic-bezier(.35,.17,.25,1);
      border-radius: 35px;

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
      font-size: 90px;
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