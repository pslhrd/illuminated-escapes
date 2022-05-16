export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("splitWords", {
    mounted(el, binding, vnode, prevNode) {
      const createBoxes = (text, index) => {
        const node = document.createElement('span')
        node.textContent = text
        node.classList.add('split-words')
        node.style.setProperty('--index', index)
        return node
      }
      
      // const splitByLetter = text => [ ...text ].map(createBoxes)
      const splitByWord = text => text.split(' ').map(createBoxes)
      const words = splitByWord(el.textContent)
      el.textContent = null
      el.append(...words)
    }
  })
})