## meta标签的常见应用
###  meta标签
`meta`标签HTML语言head区域的一个辅助性标签，常用于定义页面的说明，关键字等元数据。`meta`标签的属性有：`name,http-equiv,content,charset`,用法参见[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)
### meta标签的常见应用
+ 声明字符编码,解决乱码问题 <br />
注意：声明`charset`要放在第一行
````html
<meta charset='UTF-8'>
````
+ 移动段适配
````html
<meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=no,max-scale=1'>
````
content 参数：

1. width viewport 宽度(数值/device-width)
2. height viewport 高度(数值/device-height)
3. initial-scale 初始缩放比例
4. maximum-scale 最大缩放比例
5. minimum-scale 最小缩放比例
6. user-scalable 是否允许用户缩放(yes/no)

+ SEO优化
````html
<meta name='keywords' content='your keywords'>
<meta name='descrption' content='your description'>
````
+ 百度禁止转码
````html
<meta http-equiv="Cache-Control" content="no-siteapp" />
````
+ 忽略页面中的数字识别为电话，忽略email识别
````html
<meta name="format-detection" content="telphone=no, email=no" />
````
