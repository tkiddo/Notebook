####队列
队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作（first in first out ,FIFO），和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。现实中所有需要排队的事情都是队列的例子，比如排队买票等。
####javascript 实现
````
   //基于数组实现
    function Queue(){
        this.items=[]
    }

    //enqueue:向队列尾部添加一个或多个新的项
    Queue.prototype.enqueue=function(element){
        this.items.push(element)
    }
    
    //dequeue:移除队列的第一个元素（即排在队列最前面），并返回被移除的元素
    Queue.prototype.dequeue=function(){
        return this.items.shift()
    }

    //front:返回队列中第一个元素，即最先被添加，也是最先被移除的元素,队列本身不做变动
    Queue.prototype.front=function(){
        return this.items[0]
    }

    //isEmpty:判断队列是否为空
    Queue.prototype.isEmpty=function(){
        return this.items.length===0
    }

    //size:返回队列中包含的元素个数
    Queue.prototype.size=function(){
        return this.items.length
    }

    //toString:将队列中的内容转换成字符串格式
    Queue.prototype.toString=function(){
        return this.items.join(' ')
    }

    var queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    console.log(queue)
````
