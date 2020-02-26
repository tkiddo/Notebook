/* 
迭代器是一种特殊对象，对象中有一个next方法，每次调用返回一个对象，这个对象有两个属性，一个是value，表示下一个要返回的值，如果没有相关数据就返回undefined；
另一个是done，表示是否还有下一个值，当没有下一个值时返回true。  当数据用完后，不论调用几次next，都会返回｛done:true,value:undefined｝*/

function createIterator(items) {
    let i = 0
    return {
        next: function () {
            let done = (i >= items.length)
            let value = (done ? undefined : items[i++])
            return {
                done,
                value
            }
        }
    }
}

let a = createIterator([1, 2, 3])
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

