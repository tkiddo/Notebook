
/* 生成器是返回迭代器的函数。函数名前面的*表示他是一个生成器，函数中会用到yield关键字。yield是ES6中的关键字，可以通过它来指定调用迭代器中的next方法时的返回值以及返回顺序。
每执行完一句yield语句，函数会自动停止执行，直到再次调用迭代器的next方法才会继续执行。
 */
function *createInterator() {
    yield 1
    yield 2
    yield 3
}

let a = createInterator()
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)

