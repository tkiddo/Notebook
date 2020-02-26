function Vue(options){
    this._data = options.data
    observe(this._data)
    new Watcher()
    console.log('render',this._data.name)
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
    const dep = new Dep()
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable:true,
        get:function(){
            dep.addSub(Dep.target)
            return val
        },
        set:function(newVal){
            if(newVal===val){
                return
            }
            val = newVal
            dep.notify()
        }
    })
}

function Watcher(){
    Dep.target = this
    Watcher.prototype.update=function(){
        console.log('update status')
    }
}

function Dep(){
    this.subs=[]
    Dep.prototype.addSub=function(sub){
        this.subs.push(sub)
    }

    Dep.prototype.notify=function(){
        this.subs.forEach(sub=>{
            sub.update()
        })
    }
}

Dep.target=null