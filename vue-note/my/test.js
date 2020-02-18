function Vue(options){
    this._data = options.data
    observe(this._data)
}

function cb(){
    console.log('更新啦！')
}

function observe(obj){
    Object.keys(obj).forEach(key=>{
        defineReactive(obj,key,obj[key])
    })
}
function defineReactive(obj,key,val){
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get:function(){
            return val
        },
        set:function(newVal){
            if(newVal===val){
                return
            }
            val = newVal
            cb()
        }
    })
}