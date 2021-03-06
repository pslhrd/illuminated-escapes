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
      mock: {"variation":"default","name":"Default","slice_type":"google_maps","items":[],"primary":{"subtitle":[{"type":"paragraph","text":"Adipisicing irure eiusmod mollit quis ex tempor ut ad.","spans":[]}],"informations":[{"type":"paragraph","text":"Amet dolore sint nostrud sunt. Esse id qui incididunt proident ut deserunt ullamco.","spans":[]}],"latitute":[{"type":"paragraph","text":"Est qui dolor culpa aute deserunt ad ullamco anim incididunt enim ipsum. Eu incididunt amet incididunt.","spans":[]}],"longitude":[{"type":"paragraph","text":"Adipisicing fugiat eu excepteur eu dolor laborum deserunt officia.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
