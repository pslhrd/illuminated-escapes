<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-content-title">
        <PrismicRichText :field="slice.primary.title" />
      </div>
      <div class="hero-content-cta">
        <NuxtLink>
          <button><PrismicRichText :field="slice.primary.button" /></button>
        </NuxtLink>
      </div>
    </div>
    <div class="hero-background">
      <PrismicImage :field="slice.primary.hero" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";

export default {
  name: "LocationHero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
