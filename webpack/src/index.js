import ImageCom from './img-com';
import './assets/fonts/iconfont.css';

const app = document.getElementById('app');

// 懒加载和预加载webpackPrefetch
app.addEventListener('click', () => {
  import(/* webpackChunkName:'com',webpackPrefetch:true */ './com/index.js')
    .then((res) => {
      console.log(res);
    })
    .catch(() => {});
});

app.appendChild(ImageCom);

const span = '<span class="iconfont icon-icon-test2" ></span>';
const ele = document.createElement('div');
ele.innerHTML = span;
app.appendChild(ele);

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
});
// eslint-disable-next-line no-console
console.log(promise)();

if (module.hot) {
  module.hot.accept('./com/index.js', () => {
    console.log(1);
  });
}
