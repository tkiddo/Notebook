来自百度百科：Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。
        Ajax = 异步 JavaScript 和 XML 或者是 HTML（标准通用标记语言的子集）。
        Ajax 是一种用于创建快速动态网页的技术。
        Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
        通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
####原生实现
1.获取XMLHttpRequest对象
使用 XMLHttpRequest（XHR）对象可以与服务器交互。您可以从URL获取数据，而无需让整个的页面刷新。这允许网页在不影响用户的操作的情况下更新页面的局部内容。在 AJAX 编程中，XMLHttpRequest 被大量使用。
    更多详情请移步MDN：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
````
    let xhr
    if (window.XMLHttpRequest) {
        //应用于所有新版本的浏览器
        xhr = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        //兼容老版本浏览器
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
````
2.配置请求参数
 XMLHttpRequest对象的open方法用于配置参数，第一个参数为请求方法，第二个参数是请求地址，第三个参数是是否异步请求，默认为true
````
xhr.open('GET', '/test/', true)
````
3.配置完毕，用send方法发送请求
````
xhr.send()
````
4.监听服务器返回状态并对返回数据进行处理,onreadystatechange事件用于监听
````
       xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {// readyState为4表示请求响应完成
                if (xhr.status === 200) {    // status为200表示请求成功
                    console.log('执行成功');
                } else {
                    console.log('执行出错');
                }
            }
        }
````
**关于readystate和status**
1.readystate有5种值，分别为：
+ 0: 请求未初始化
+ 1: 服务器连接已建立
+ 2: 请求已接收
+ 3: 请求处理中
+ 4: 请求已完成，且响应已就绪

2.status可以分为5类，分别为：
+ 1xx: 这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束
+ 2xx:这一类型的状态码，代表请求已成功被服务器接收、理解、并接受。例如200标识OK
+ 3xx:这类状态码代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。
+ 4xx:这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。例如404 Not Found
+ 5xx，6xx：这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。例如500 Internal Server Error

完整的实现代码是：
````
    let xhr
    //1.获取XMLHttpRequest对象
    if (window.XMLHttpRequest) {
        //应用于所有新版本的浏览器
        xhr = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        //兼容老版本浏览器
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    //2.配置请求参数
    if (xhr) {
        xhr.open('GET', '/test/', true)
        //3.配置完毕，用send方法发送请求
        xhr.send()
        //4.监听服务器返回状态并对返回数据进行处理,onreadystatechange事件用于监听
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {    
                    console.log('执行成功');
                } else {
                    console.log('执行出错');
                }
            }
        }
    }
````
