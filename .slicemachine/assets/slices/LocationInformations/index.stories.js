import MyComponent from '../../../../slices/LocationInformations';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/LocationInformations'
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
      mock: {"variation":"default","name":"Default","slice_type":"location_informations","items":[{"button":[{"type":"paragraph","text":"Ut est ad occaecat incididunt non magna laboris dolor laboris culpa consectetur ullamco. Consequat quis nulla ea tempor velit et esse ipsum pariatur laborum nulla eiusmod dolore.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"button":[{"type":"paragraph","text":"Mollit amet nostrud non veniam Lorem labore nostrud excepteur elit voluptate magna nisi sit aute.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},{"button":[{"type":"paragraph","text":"Culpa ea adipisicing ex do ipsum sunt ex cupidatat deserunt. Ad do adipisicing tempor reprehenderit cupidatat sint sunt ex reprehenderit labore irure cupidatat fugiat et Lorem.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"button":[{"type":"paragraph","text":"Voluptate tempor duis nostrud cupidatat sunt cupidatat laboris officia ad fugiat irure do labore. Anim sit commodo reprehenderit id commodo. Lorem et commodo ea cillum exercitation laborum velit id incididunt culpa duis.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"subtitle":[{"type":"paragraph","text":"Laboris do velit commodo dolore anim aliquip cupidatat. Esse proident nisi irure.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"informations":[{"type":"paragraph","text":"Eiusmod quis aliquip sint Lorem. Adipisicing irure laborum magna velit aliqua.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
