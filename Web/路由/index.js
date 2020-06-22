const ELEMENT = document.getElementById('ele')

class BasicRouter {
	constructor(list = []) {
		this.list = list
	}

	render(route) {
		console.log(route)
		let ele = this.list.find((item) => item.path === route)
		ELEMENT.innerText = ele.content
	}
}

class HashRouter extends BasicRouter {
	constructor() {
		super(...arguments)
		this.init()
	}
	init() {
		this.render(this.getRoute())
		window.addEventListener('hashchange', (e) => {
			this.render(this.getRoute())
		})
	}
	getRoute() {
		return window.location.hash.slice(1) ? window.location.hash.slice(1) : '/'
	}
	push(path) {
		window.location.hash = path
	}
	go(n) {
		window.history.go(n)
	}
}

class HistoryRouter extends BasicRouter {
	constructor() {
		super(...arguments)
		this.init()
	}
	init() {
		this.render(this.getRoute())
		window.addEventListener('popstate', (e) => {
			this.render(this.getRoute())
		})
	}
	getRoute() {
		console.log(window.location)
		return window.location.pathname
	}
	push(path) {
		window.history.pushState(path)
	}
	go(n) {
		window.history.go(n)
	}
}
