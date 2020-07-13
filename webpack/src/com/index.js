import './index.less';
import './index.scss';
import './index.css';

export default function com() {
  // eslint-disable-next-line no-undef
  const ele = document.createElement('div');
  ele.innerText = 'component demo ggg';
  ele.classList.add('container');
  return ele;
}
