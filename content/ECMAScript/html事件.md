---
title: "html事件"
---

- 事件是 JS 与 HTML 交互的桥梁。
- addEventListener 事件处理包括捕获阶段、目标阶段、冒泡阶段
- 目标元素不区分捕获和冒泡阶段
  ![html事件](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
- addEventListener 中 this 指向事件当前正在流过的元素,currentTarget 总是和 this 相同，而 target 指向事实上被点击的目标 DOM 元素。
- on 事件处理发生在冒泡阶段,el.onclick 的本质是对 DOM 元素属性的赋值，所以同一元素相同事件只能 on 绑定一个事件处理函数，新绑定的覆盖旧的。
- relatedTarget 属性，对于 mouseover 记录鼠标从哪里来，对于 mouseout 记录鼠标去了哪里，
- new Event 自定义事件
- 特例

```js
setTimeout(function() {
  "use strict";
  console.log(this); //Window
});
```

## 单线程的好处

- 无需关注线程之间的状态同步问题
- 没有线程切换所带来的开销
- 没有死锁存在

## 单线程的问题

- 无法充分利用多核 CPU
- CPU 密集计算会导致应用阻塞
- 异常会导致整个应用退出

## Event loop

- 浏览器和 node 中 Event loop 并不一样，浏览器的 Event loop 是在 HTML5 中定义的规范，Event Loop 包含两类：一类是基于 Browsing Context，一种是基于 Worker。二者的运行是独立的，每一个 JavaScript 运行的"线程环境"都有一个独立的 Event Loop，每一个 Web Worker 也有一个独立的 Event Loop。而 node 中则由 libuv 库实现。

- ES2015 规范中的 Task 即 macrotask(宏任务)，microtask(微任务) 又被称为 Job<br>(macro)task 主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate<br>microtask 主要包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境)<br>requestAnimationFrame 既不属于 macrotask, 也不属于 microtask

## 浏览器事件循环

1. 选择最先进入队列的任务(oldest task)，如果有则执行(一次)
2. 检查是否存在 Microtasks，如果存在则不停地执行，直至清空 Microtasks Queue
3. 更新 render
4. 主线程重复执行上述步骤

## Node 事件循环

在 Node 中，会优先清空 next tick queue，即通过 process.nextTick 注册的函数，再清空 other queue，常见的如 Promise；此外，timers(setTimeout/setInterval) 会优先于 setImmediate 执行，因为前者在 timer 阶段执行，后者在 check 阶段执行。

## 从未放弃 Server 的 JavaScript 为何一直被束缚在浏览器里？

- 历史原因,10 天开发的 UI 语言
- es4 工程化失败
- activex 安全问题

node 与 es6 的加持，充分释放 JavaScript
