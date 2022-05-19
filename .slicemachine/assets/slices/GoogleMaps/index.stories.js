import MyComponent from '../../../../slices/GoogleMaps';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/GoogleMaps'
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
      mock: {"variation":"default","name":"Default","slice_type":"google_maps","items":[],"primary":{"latitute":[{"type":"paragraph","text":"Aliqua anim consectetur culpa nisi mollit amet do dolor sunt qui magna. Aliqua mollit anim non quis aliqua nulla. Esse et ex incididunt fugiat incididunt voluptate.","spans":[]}],"longitude":[{"type":"paragraph","text":"Lorem eu laboris anim eiusmod consequat dolore reprehenderit non ad mollit nostrud elit. Dolore labore enim aute duis veniam laboris sit fugiat. Veniam dolor magna ad incididunt anim laborum.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
