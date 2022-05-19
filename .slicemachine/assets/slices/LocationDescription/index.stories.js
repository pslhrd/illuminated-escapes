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
      mock: {"variation":"default","name":"Default","slice_type":"location_description","items":[],"primary":{"subtitle":[{"type":"paragraph","text":"Incididunt laborum nulla non magna voluptate irure ut duis laboris mollit veniam quis consequat. Esse fugiat ea aliquip irure in magna ad eiusmod nulla occaecat voluptate occaecat excepteur sit. Aute proident enim cupidatat sunt velit do sunt laborum.","spans":[]}],"description":[{"type":"paragraph","text":"Aute minim proident laboris excepteur deserunt aliquip. Officia excepteur ut exercitation laborum reprehenderit aliqua.","spans":[]}],"description1":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"description2":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"labor":[{"type":"paragraph","text":"Ea ut eu incididunt ex fugiat commodo Lorem nisi minim. Ut deserunt occaecat ipsum amet.","spans":[]}],"specs":[{"type":"paragraph","text":"Anim aliqua cillum dolor. Aute labore incididunt nostrud irure non aliqua sint in aute excepteur qui. Est eiusmod aliquip elit.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
