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
js 历史:js 剥离环境 es, dom(事件) bom(运行环境 api settimeout) ,useragent 和 activex 桌面应用 对于 ie 的决定性意义
反垄断被解散 at&t
node 中的 js:es 运行环境 api

js 基础
执行栈与汇编语言
原型链与作用域链

js 与 java

node 生态与应用场景
node 历史:node.exe/docker 节点/微服务,npm
koa/meteor electron/vscode 前端构建/服务端渲染(node/npm react...) node browser electron/nwjs 架构图
puppeteer
socket.io
commander.js
hexo
ghost
pomelo
node-red
数据库
TensorFlow.js
vertx
嫁接 c 生态(opencv)
几个 api
officeonline(石墨文档)
webtorrent/ipfs(p2p 通信)
windows95/nodeos

node 基础
node 模块与 es6 模块
异步随处可见与 epool 和 iocp

单线程的优缺点与 rust 和 c

npm 的问题
node 黑客的犯罪成本
activex 和 applet 安全问题
如果你在电脑上安装了一个 electron 开发的百度软件,那你的电脑 100%是要完蛋了
