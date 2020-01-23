/* 可迭代对象具有Symbol.iterator属性， Symbol.iterator通过指定的函数可以返回一个作用于附属对象的迭代器。
es6中，所有的集合对象（数组，map集合，set集合）和字符串都是可迭代对象，这些对象中都有默认的迭代器*/

let a = [1, 2, 3]
for (const iterator of a) {
    console.log(iterator)
}

/* 访问默认迭代器可以通过Symbol.iterator,也可用来检测对象是否为可迭代对象 */
let iterator = a[Symbol.iterator]()
console.log(iterator.next())
function isIteratable(params) {
    return typeof params[Symbol.iterator] === 'function'
}

/* 默认情况下，自定义的对象是不可迭代的，但如果给Symbol.iterator属性添加一个生成器，就能使它变成可迭代对象 */
let b = { 
    name: 'king' ,
    age:11,
    *[Symbol.iterator]() {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                const element = this[key];
                yield element
            }
        }
    }}
for (const iterator of b) {
    console.log(iterator)
}