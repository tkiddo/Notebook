import com from './com'
import ImageCom from './img-com'
import './assets/fonts/iconfont.css'

const app = document.getElementById('app')

app.appendChild(com())
// app.appendChild(ImageCom)

const span = '<span class="iconfont icon-icon-test2" ></span>'
const ele = document.createElement('div')
ele.innerHTML = span
app.appendChild(ele)
