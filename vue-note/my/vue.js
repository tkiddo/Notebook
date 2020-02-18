function Vue(options){
    this._data = options.data
    observe(this._data)
    new Watcher()
    console.log('render',this._data.name,this._data.name)
    function observe(obj){
        Object.keys(obj).forEach(key=>{
            def(obj,key,obj[key])
        })
    }
    
    function def(obj,key,val){
        let dep=new Dep()
        Object.defineProperty(obj,key,{
            enumerable:true,
            configurable:true,
            get:function(){
                dep.addSub(Dep.target)
                return val
            },
            set:function(newVal){
                if(newVal===val){
                    return
                }
                val=newVal
                dep.notify()
            }
        })
        
    }
}

function Dep(){
    this.subs=[]
    //添加订阅者
    Dep.prototype.addSub=function(sub){
        this.subs.push(sub)
    }
    //通知所有订阅者更新状态
    Dep.prototype.notify=function(val){
        this.subs.forEach(sub=>{
            sub.update(val)
        })
    }
}

function Watcher(){
    Dep.target=this

    Watcher.prototype.update=function(){
        console.log('update status')
    }
}

Dep.target=null
