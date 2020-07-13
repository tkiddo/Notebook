import com from './com';
// import ImageCom from './img-com';
import './assets/fonts/iconfont.css';

// eslint-disable-next-line no-undef
const app = document.getElementById('app');

app.appendChild(com());
// app.appendChild(ImageCom)

const span = '<span class="iconfont icon-icon-test2" ></span>';
// eslint-disable-next-line no-undef
const ele = document.createElement('div');
ele.innerHTML = span;
app.appendChild(ele);

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
});
console.log(promise);
