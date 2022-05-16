import MyComponent from '../../../../slices/LocationDescription';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/LocationDescription'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"location_description","items":[],"primary":{"subtitle":[{"type":"paragraph","text":"Do id excepteur deserunt proident eu ipsum exercitation commodo. In consectetur ea sint deserunt ad et non nisi excepteur sit exercitation in sunt.","spans":[]}],"description":[{"type":"paragraph","text":"Anim aliqua velit tempor consequat labore pariatur duis voluptate et. Ullamco pariatur Lorem amet nostrud laboris. Amet eiusmod ad anim nostrud non ex.","spans":[]}],"description1":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"description2":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"},"labor":[{"type":"paragraph","text":"Irure enim mollit non sint laboris irure quis et aute amet ipsum laboris minim ea exercitation.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
