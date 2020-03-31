function f1() {
    setTimeout(() => {
        console.log('f1 done')
    }, 1000);
}

function f2() {
    setTimeout(() => {
        console.log('f2 done')
    }, 2000);
}

function f3() {
    setTimeout(() => {
        console.log('f3 done')
    }, 3000);
}

function* controller() {
    yield f1()
    yield f2()
    yield f3()
}

const c = controller()
c.next()
c.next()
c.next()