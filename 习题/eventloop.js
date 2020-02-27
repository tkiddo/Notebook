//macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
//micro-task(微任务)：Promise，process.nextTick
//立即执行-------1
console.log('1');
//宏1
setTimeout(function() {
    //立即执行------5
    console.log('2');
    //宏1内微1-------7
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        //立即执行------6
        console.log('4');
        resolve();
    }).then(function() {
        //宏1内微2-------8
        console.log('5')
    })
})
//微1-------3
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    //立即执行-------2
    console.log('7');
    resolve();
}).then(function() {
    //微2------4
    console.log('8')
})
//宏2
setTimeout(function() {
    //立即执行-------9
    console.log('9');
    process.nextTick(function() {
        //宏2内微1----11
        console.log('10');
    })
    new Promise(function(resolve) {
        //立即执行------10
        console.log('11');
        resolve();
    }).then(function() {
        //宏2内微2----12
        console.log('12')
    })
})

//1,7,6,8,2,4,3,5,9,11,10,12
