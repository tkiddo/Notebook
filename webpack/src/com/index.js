import './index.less'
import './index.scss'
import './index.css'

export default function () {
	const ele = document.createElement('div')
	ele.innerText = 'component demo'
	ele.classList.add('container')
	return ele
}
