import MyComponent from '../../../../slices/LocationHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/LocationHero'
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
      mock: {"variation":"default","name":"Default","slice_type":"location_hero","items":[],"primary":{"title":[{"type":"heading1","text":"Benchmark frictionless partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Anim magna sunt duis culpa.","spans":[]}],"hero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"},"button":[{"type":"paragraph","text":"Velit minim voluptate cillum. Aute nulla magna veniam esse eu nulla.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
