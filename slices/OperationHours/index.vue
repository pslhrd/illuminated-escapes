<template>
  <section class="operations">
    <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicRichText :field="slice.primary.hours" class="hours"/>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue";

export default {
  name: "OperationHours",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang='scss' scoped>
@mixin wide-mobile {
  @media (max-width: 800px) { @content; }
}
.operations {
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: 'Sharp Grotesk';
  text-transform: uppercase;
  background-color: white;
  color: black;
  .title {
    opacity: 0.4;
    font-size: 16px;
    margin-bottom: 30px;
  }
  .hours {
    width: 50%;
    font-size: 5vw;
    @include wide-mobile() {
      width: 100%;
      font-size: 45px;
    }
  }
}
</style>
