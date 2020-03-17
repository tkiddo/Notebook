const vm = new MVVM({
    el:'#vm',
    data:{
        name:'111',
        age:1
    }
})
console.log(vm,vm.name)