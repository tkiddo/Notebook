namespace de{
    //装饰器
    function logClass(params:any) {
        console.log(params)
        //params为当前类
        params.prototype.apiUrl='xxxx'
        params.prototype.run=function () {
            console.log('running')
        }
    }

    //装饰器工厂
    function log(params:string) {
        return function (target:any) {
            //params参数，target为当前类
            console.log(params);
            console.log(target);
        }
    }

    //普通装饰器,无法传参
    @logClass
    //装饰器工厂，可以传参
    @log('hello')
    class HttpClient {
        constructor() {
            
        }
        getData():void{
            console.log('getData')
        }
    }
    var h:any = new HttpClient();
    console.log(h.apiUrl)
    h.run()
}


//类装饰器,修改当前类的属性和方法
namespace api{

    function logClass(target:any) {
        console.log(target)
        return class extends target{
            apiUrl:string='apiurl----fix';
            getData():void{
                console.log(this.apiUrl)
            }
        }
    }
    @logClass
    class HttpClient {
        apiUrl:string | undefined;
        constructor() {
            this.apiUrl='apiUrl-----1'
        }
        getData():void{
            console.log(this.apiUrl)
        }
    }

    var a = new HttpClient();
    a.getData()
}


//属性装饰器
namespace proxy{
    //类装饰器
    function logClass(params:string) {
        return function (target:any) {
            //params参数，target为当前类
            // console.log(params);
            // console.log(target);
        }
    }

    //属性装饰器
    function logProperty(params:any) {
        return function (target:any,attr:any) {
            //params参数,target为当前类，attr为属性名
            // console.log(target);
            // console.log(params);
            target[attr]=params
        }
    }
    //方法装饰器
    function logMethod(params:any) {
        return function (target:any,methodName:any,desc:any) {
            //target:静态成员来说是类的构造函数，对于实例成员是类的原型对象
            //methodName:成员的名字
            //desc:成员的属性描述符
            console.log(target,methodName,desc,params)
            target.apiUrl=params
        }
    }
    @logClass('xxxxx')
    class HttpClient {
        @logProperty('proerty')
        apiUrl:string | undefined;
        constructor() {
            this.apiUrl='apiUrl-----4'
        }
        @logMethod('http://')
        getData():void{
            console.log(this.apiUrl)
        }
    }

    var a = new HttpClient();
    a.getData()
}