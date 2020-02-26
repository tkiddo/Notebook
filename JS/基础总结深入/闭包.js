function a() {
    var arr = []
    return function add(item) {
        arr.push(item)
        return arr
    }
}
genAdd = a()
console.log(genAdd('sd'))
console.log(genAdd('sd2'))