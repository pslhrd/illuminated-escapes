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
      mock: {"variation":"default","name":"Default","slice_type":"location_description","items":[],"primary":{"subtitle":[{"type":"paragraph","text":"Aliquip labore sint elit pariatur dolore ea qui.","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur nulla fugiat cillum aute anim cupidatat magna irure. Labore cillum ipsum deserunt ad. Ut nostrud cillum proident reprehenderit ad duis sint Lorem cillum ad voluptate esse incididunt non.","spans":[]}],"description1":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"description2":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"labor":[{"type":"paragraph","text":"Et commodo mollit labore ad cupidatat. Minim ex eu proident aliqua cillum. Ut ullamco sit labore in pariatur et elit sit est.","spans":[]}],"specs":[{"type":"paragraph","text":"Occaecat occaecat ea dolor consectetur ea veniam officia velit fugiat cupidatat quis voluptate voluptate cupidatat.","spans":[]}],"button":[{"type":"paragraph","text":"Proident exercitation in officia magna in aute esse dolor pariatur cupidatat voluptate sunt. Quis sint aliqua culpa id ut dolor adipisicing est exercitation et consectetur cillum duis.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
