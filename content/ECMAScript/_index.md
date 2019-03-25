---
title: "ECMAScript"
date: 2019-01-13T13:02:45+08:00
---

{{<mermaid align="left">}}
graph LR;
A[Hard edge] -->|Link text| B(Round edge)
B --> C{Decision}
C -->|One| D[Result one]
C -->|Two| E[Result two]
{{< /mermaid >}}

js es js 运行环境的关系
js 历史:js 剥离环境 es, dom(事件冒泡) bom(运行环境 api settimeout) ,useragent 和 activex 桌面应用 对于 ie 的决定性意义
反垄断被解散 at&t
node 中的 js:es,事件, 运行环境 api

js 基础
执行栈与汇编语言
原型链与作用域链

js 与 java

node 生态与应用场景
node 历史:node.exe/docker 节点/微服务,npm
koa/meteor electron/vscode 前端构建/服务端渲染(node/npm react...) node browser electron/nwjs 架构图
puppeteer
serverless
socket.io
commander.js
hexo
ghost
pomelo
node-red/homebridge
数据库
TensorFlow.js
vertx
嫁接 c 生态(opencv)
Web爬虫：Cheerio/Request
几个 api
officeonline(石墨文档)/monaco-editor
webtorrent/ipfs(p2p 通信)
windows95/nodeos
tesseract.js OCR
node 基础
node 模块与 es6 模块
异步随处可见与 epool 和 iocp

单线程的优缺点与 rust 和 c

npm 的问题
node 黑客的犯罪成本
activex 和 applet 安全问题
如果你在电脑上安装了一个 electron 开发的百度软件,那你的电脑 100%是要完蛋了

函数

getter

关于原型继承，请记住以下四点：

类属性用 this 界定

类方法使用 prototype 对象界定

继承属性，请使用 call 函数传递 this 对象

继承方法，请使用 Object.create 连接父类和子类的原型

始终将子类构造函数设置为自身，以获取对象的正确标识

onclick = changeImg(this) vs onclick = changeImg(event)

1.this 是 Javascript 语言的一个关键字。

2.this 代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。

3.event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。

4.this 和 event.target 的区别：

js 中事件是会冒泡的，所以 this 是可以变化的，但 event.target 不会变化（在事件触发时，只传递当前 event 对象的引用），它永远是直接接受事件的目标 DOM 元素；

在 HTML 中设置 onclick 属性相当于普通函数调用，于是 非严格模式 this 指向 Window，严格模式 undefined。例如：

<div onclick="clickHandler()"></div>
<script>
function clickHandler(){
    console.log(this);
}
</script>
在javascript中设置DOM对象的onclick属性，this总是指向被设置的DOM元素。例如：
<script>
document
  .getElementById('l1')
  .onclick = function(){
    console.log(this);
  };
</script>
点击div#l1后控制台输出为：

<div id="l1">...</div>
可以调用事件对象的stopPropagation()方法以阻止事件继续向其他元素传播
stopImmediatePropagation除此之外还会阻止该元素事件的后续其他处理函数执行
每个函数都是对象，都会占用内存；内存中的对象越多，性能就越差。其次，必须事先指定所有事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间。
事件委托:一个事件监听处理所有元素的事件
给父元素加捕获阶段事件监听,stopPropagation阻止传播,e.target获取被点击元素switch...case做针对性事件处理
不是所有的事件都能冒泡,blur,focus,change,load和unload不能像其它事件一样冒泡,但是所有的事件都能捕获
event.preventDefault()

```js
addEventListener(
  "click",
  function(e) {
    console.log("window 捕获", e.target.nodeName, e.currentTarget.nodeName);
    e.stopPropagation();
  },
  true
);
```
