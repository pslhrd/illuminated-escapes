import { reactive } from 'vue'

export const store = reactive({
  menuOpen: false,
  isLocation: false,
  isLoaded: false,
  frame: 0,
  isTransition: false,
  isBlack: false,
  isOnce: true
})