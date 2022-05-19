<template>
<div class="map" ref="mapDom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Loader } from "@googlemaps/js-api-loader"

const props = defineProps(['googlemaps'])
const loader = new Loader({
  apiKey: "AIzaSyCejaQLXujAo85aktHMIr9PFWdeqlV_FCM",
  version: "weekly"
})
const mapDom = ref(null)

onMounted(() => {
  console.log(mapDom.value)
loader.load().then(() => {
  const map = new google.maps.Map(mapDom.value, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

})

console.log(props.googlemaps)
</script>