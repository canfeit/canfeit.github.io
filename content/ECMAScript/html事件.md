---
title: "html事件"
---

[![](https://img.shields.io/github/stars/nestjs/nest.svg)](https://github.com/nestjs/nest)

![html事件](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
![q](https://pic1.zhimg.com/80/v2-bf3b8dbab027713a2b21b9e8a5b7a6c4_hd.jpg)
![node](http://docs.libuv.org/en/v1.x/_images/architecture.png)
![架构](https://static.cnodejs.org/Fj1hdkWnk5o_O8oVi5kvusDxWVzs)
![](https://static.cnodejs.org/FhyBACP4uqG1X4ya0b6DkXRyqHqo)
图片来源：https://cnodejs.org/topic/55e3aff095d4c65e3d88a704
![](https://upload-images.jianshu.io/upload_images/270064-edbf9b53812f0433.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/257/format/webp)
图片来源:https://www.jianshu.com/p/3c5897dd2b85
![](https://pic2.zhimg.com/80/v2-6e362132c0fedffe78cdb5ac12a9fb09_hd.jpg)
https://zhuanlan.zhihu.com/p/37714012
https://github.com/dwqs/blog/issues/61
https://juejin.im/post/5ab88836f265da237410f701

koa 原理
事件是与浏览器或文档交互的瞬间，如点击按钮，填写表格等，它是 JS 与 HTML 之间交互的桥梁。

addEventListener 的 this 总是当前正在处理事件的那个 DOM 对象。 事件当前正在流过哪个元素，this 便指向哪个元素,currentTarget 总是和 this 相同，而 target 指向事实上被点击的目标 DOM 对象。
addEventListener 事件处理包括捕获阶段、目标阶段和冒泡阶段
目标元素不区分捕获和冒泡阶段
el.onclick 的本质是对 DOM 元素属性的赋值，后一次事件绑定会使得前一次事件绑定失效。
on 事件处理发生在冒泡阶段,一个元素一个事件只能 on 绑定一个事件处理函数，新绑定的事件处理函数会覆盖旧的事件处理函数
事件冒泡和事件捕获分别由微软和网景公司提出，制定标准的人为了不让它们干架,所以研发了事件流.
属性 relatedTarget，对于 mouseover 事件，这个属性记录鼠标从哪里来，对于 mouseout 记录鼠标去了哪里，

new Event 自定义事件，到这里我又情不自禁的想到了 node.js，在 node 中，用事件驱动来完成代码逻辑，其事件是否跟这里的自定义事件如出一辙？只是个猜测，我对 node 一知半解，真相也不得而知。

    setTimeout(function() {
      "use strict";
      console.log(this);//Window
    });

单线程的好处就是：

无需像多线程那样去关注线程之间的状态同步问题
没有线程切换所带来的开销
没有死锁存在
当然单线程也有许多坏处：

无法充分利用多核 CPU
大量计算占用 CPU 会导致应用阻塞(即不适用 CPU 密集型)
错误会引起整个应用的退出

浏览器和 node 中 Event loop 并不一样，浏览器的 Event loop 是在 HTML5 中定义的规范，Event Loop 包含两类：一类是基于 Browsing Context，一种是基于 Worker。二者的运行是独立的，也就是说，每一个 JavaScript 运行的"线程环境"都有一个独立的 Event Loop，每一个 Web Worker 也有一个独立的 Event Loop。
而 node 中则由 libuv 库实现。

选择最先进入队列的任务(oldest task)，如果有则执行(一次)
检查是否存在 Microtasks，如果存在则不停地执行，直至清空 Microtasks Queue
更新 render
主线程重复执行上述步骤
ES2015 规范中称为 microtask(微任务) 又被称为 Job
task 即为其它文章中的 macrotask(宏任务)

(macro)task 主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)

microtask 主要包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境)

在 Node 中，会优先清空 next tick queue，即通过 process.nextTick 注册的函数，再清空 other queue，常见的如 Promise；此外，timers(setTimeout/setInterval) 会优先于 setImmediate 执行，因为前者在 timer 阶段执行，后者在 check 阶段执行。
requestAnimationFrame 既不属于 macrotask, 也不属于 microtask：

https://www.zhihu.com/question/267758189
你用 Node.js 写过哪些大型/复杂的应用？碰到什么难点?
历史问题
前端人的问题

小调查
执行效率最高(性能最高)的编程语言?
开发效率(最简单)的编程语言?

js 为什么一直被束缚在浏览器里？
js 的历史：UI 语言，10 天开发的引擎
es4 工程化失败
activex 安全问题
node 释放
喜欢 Node 是因为它能把 JS,C++这两种侧重点完全不同的语言优雅地结合在一起
单线程的优缺点与 rust 和 c
