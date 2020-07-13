import img from '../assets/images/c.png';
import './index.scss';

const ele = `<img src=${img} class="img" alt="no"/>`;
// eslint-disable-next-line no-undef
const wrapper = document.createElement('div');
wrapper.innerHTML = ele;
wrapper.addEventListener('click', () => {
  console.log('ascssssss');
});
export default wrapper;
