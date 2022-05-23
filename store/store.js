import { reactive } from 'vue'

export const store = reactive({
  menuOpen: false,
  isLocation: false,
  frame: 0,
  isTransition: false
})