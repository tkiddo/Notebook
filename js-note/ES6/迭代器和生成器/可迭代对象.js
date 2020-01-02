/* 可迭代对象具有Symbol.iterator属性， Symbol.iterator通过指定的函数可以返回一个作用于附属对象的迭代器。
es6中，所有的集合对象（数组，map集合，set集合）和字符串都是可迭代对象，这些对象中都有默认的迭代器*/

let a = [1,2,3]
for (const iterator of a) {
    console.log(iterator)
}