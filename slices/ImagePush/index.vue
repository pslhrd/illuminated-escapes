<template>
  <section>
    <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicImage :field="slice.primary.image" :alt="slice.primary.title" />
  </section>
</template>

<script>
// import { getSliceComponentProps } from "@prismicio/vue";

export default {
  name: "ImagePush",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  // props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
img {
  width: 100%;
}
</style>
