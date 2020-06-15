
// import {a,b} from './ma'

// import obj,{name,Age,number,c} from './mb'

import * as my from './mb'


export async function print(){
	// console.log(a,b,name,Age,number,c)
	// console.log(obj)
	console.log(my)
	//动态导入
	// import('./ma').then(module=>{
	// 	console.log(module)
	// })
	let module = await import('./ma')
	console.log(module)
}