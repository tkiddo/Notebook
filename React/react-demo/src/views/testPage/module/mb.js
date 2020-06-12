//导出列表
const name = '123'
const age = 12
export {
	name,
	//重命名导出
	age as Age
}

const o = {
	number:15
}

//解构导出
export const {number} = o

//默认导出
export default o

//来自其他
export {c} from './ma'