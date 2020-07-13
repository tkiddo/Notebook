import img from '../assets/images/c.png';

const ele = `<img src=${img} />`;
// eslint-disable-next-line no-undef
const wrapper = document.createElement('div');
wrapper.innerHTML = ele;

export default wrapper;
