import img from '../assets/images/c.png'
const ele = `<img src=${img} />`
const wrapper = document.createElement('div')
wrapper.innerHTML = ele
export default wrapper
