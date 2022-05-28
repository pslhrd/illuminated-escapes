import MyComponent from '../../../../slices/OperationHours';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/OperationHours'
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
      mock: {"variation":"default","name":"Default","slice_type":"operation_hours","items":[],"primary":{"title":[{"type":"paragraph","text":"Mollit id incididunt consequat eiusmod laborum cupidatat irure dolore incididunt sit.","spans":[]}],"hours":[{"type":"paragraph","text":"Fugiat consequat ad in ad culpa qui sint ipsum.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
