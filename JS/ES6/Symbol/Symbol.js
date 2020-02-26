/* 5种基本类型：number,string,boolean,null,undefined
   ES6新增：Symbol */

/* 创建Symbol用Symbol函数，该函数可以接受一个可选参数，可以添加一段描述，但不可用于属性访问，建议每次创建都加一段描述，以便阅读调试 */
let firstName = Symbol('first name')
let person = {}
person[firstName] = 'a'
console.log(person)
console.log(person[firstName])
console.log('first name' in person)
console.log(firstName)
console.log(typeof firstName)