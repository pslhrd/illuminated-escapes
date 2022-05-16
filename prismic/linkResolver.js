export default (doc) => {
  if (doc.type === 'location') {
    return `/${doc.uid}`
  }
  if (doc.type === 'home') {
    return `/`
  }
}