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
node 历史:node.exe 节点/微服务
nest 微服务 https://img.shields.io/github/stars/nestjs/nest.svg
npm 前后端仓库
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
Web 爬虫：Cheerio/Request
几个 api
officeonline(石墨文档)/monaco-editor
webtorrent/ipfs(p2p 通信)
windows95/nodeos
tesseract.js OCR

node 基础
node 模块与 es6 模块
异步随处可见与 epool 和 iocp
gulp/webpack

单线程的优缺点与 rust 和 c

npm 的问题
已经被彻底淘汰的服务端开发技术?
比如 asp?
前端
Java applet /activex /flash,三方不可控,安全得不到保证
js 存活因为被严格束缚在浏览器,两方可控
node 黑客的犯罪成本
activex 和 applet 安全问题
如果你在电脑上安装了一个 electron 开发的百度软件,那你的电脑 100%是要完蛋了
以极大的包容抑制分裂

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

node 膨胀了需要降降温
https://infoq.cn/article/why-oppose-Node
https://blog.fundebug.com/2017/06/12/nodejs-best-enterprise-examples/
静态服务器+nginx，虽然 Nodejs 的优势在 IO 密集集应用，但是和 Nginx 的处理静态资源还是有很大的差距。
cpu 密集+rust/c

前后端博弈

1. 复杂系统后端任务量大,进度滞后,前后端相互制约
2. 前端无法控制数据格式和通信方式,存在性能问题
3. 如果视图层在后端,前端写静态 demo，后端翻译成后端视图?
4. 如果视图层在前端,接口问题前后端沟通成本高,业务逻辑成为灰色地带,前后端从来没有真正解耦
5. 无法良好的支持跨终端
6. seo?
7. M-V-C 每一层都可能出现别的层的代码，日积月累，完全没有维护性可言。
   三层架构从物理层次上保证了你不可能这么做。
   结果:
   没有银弹,两层变三层,牺牲通信性能损耗换让职责清晰、方便协作，提高整体开发效率
   多加一层就多一层风险，
   前端:负责 View
   中端 node: Controller 层,接口设计,代理请求处理,做服务端渲染
   后端 java:只负责 Model 层，业务处理/数据等

为什么不统一用 node？

1. 我们的初衷是做前后端分离，如果考虑这个问题就有点违背我们的初衷了。
2. 是累死前端还是逼死后端?
   结论:暂时没必要
