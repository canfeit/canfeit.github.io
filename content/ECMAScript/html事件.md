---
title: "html事件"
---

![html事件](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
![q](https://pic1.zhimg.com/80/v2-bf3b8dbab027713a2b21b9e8a5b7a6c4_hd.jpg)
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
