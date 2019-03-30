## Node 过去和现在

- 2008 年 v8 发布
- 2009 年 Ryan Dahl(ry) 用 C 写高性能 Web 服务,开发出了开源 Web 服务器项目“Web.js”。对于高性能，异步 IO、事件驱动是基本原则.他评估了很多种高级语言，发现很多语言虽然同时提供了同步 IO 和异步 IO，但是开发人员一旦用了同步 IO，他们就再也懒得写异步 IO 了.最终，Ryan 瞄向了 JavaScript。JavaScript 是单线程执行，不能进行同步 IO 操作.ry 认为 Web.js 适合大型项目开发,一个 Web.js 作为一个节点提供服务,多个节点组成一个完整的服务,Web.js 改名 Node.js
- 2010 年 Joyent 收购 Node.js,NPM 发布
- 2011 年 微软与 Joyent 合作帮助开发了原生的 Windows 版本的 Node.js
- 2014 年 11 月 Node.js 0.11 IO.js 项目创立
- 2015 年 2 月 IO.js 发布 3.0,Joyent 携手各大公司和 Linux 基金会成立 Node.js 基金会,发布 node4.0
- 2019 年 Node.js 基金会与 JS 基金会合并为 OpenJS 基金会

Stack Overflow 创始人 Jeff Atwood 提出:

> “任何能够用 JavaScript 实现的应用，最终都必将用 JavaScript 实现”

|                                                                     |                                                                                                               |                                                                              |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Twitter                                                             | 应对突发流量                                                                                                  |
| Intel                                                               | 提高生产力,加快产品上市                                                                                       |
| NASA                                                                | 端到端数据存储,数据读取时间减少 300%                                                                          |
| Uber                                                                | 可扩展的数据处理能力,应对每半年翻倍的规模                                                                     |
| PayPal Node.js 替代 Java                                            | 超过 2.27 亿用户和超过 76 亿交易<br>开发速度提高 2 倍,代码量减少 33%<br>ops 增加了 2 倍，响应时间减少了 35%。 |
| Netflix                                                             | 视频流服务                                                                                                    |
| Ebay Node.js 替代 Java                                              | 为 1.7 亿用户提供实时服务                                                                                     |
| Mozilla                                                             | 为百万用户提供服务,节省内存,提高开发效率                                                                      |
| LinkedIn Node 替代 RoR                                              | 服务器由 30 个减到 3 个 ,性能提高 20 倍                                                                       |
| 阿里巴巴                                                            | 中间层                                                                                                        |
| 初心科技[石墨文档](https://shimo.im/)                               | 云端 office                                                                                                   |
| 微软[vscode](https://github.com/Microsoft/vscode)                   | 高效跨平台可扩展代码编辑器                                                                                    | ![](https://img.shields.io/github/stars/Microsoft/vscode.svg)                |
| [electron](https://github.com/electron/electron)                    | 跨平台桌面应用开发                                                                                            | ![](https://img.shields.io/github/stars/electron/electron.svg)               |
| [webpack](https://github.com/webpack/webpack)                       | 前端打包编译                                                                                                  | ![](https://img.shields.io/github/stars/webpack/webpack.svg)                 |
| [puppeteer](https://github.com/GoogleChrome/puppeteer)              | 自动化 UI 测试                                                                                                | ![](https://img.shields.io/github/stars/GoogleChrome/puppeteer.svg)          |
| [socket.io](https://github.com/socketio/socket.io)                  | IM 实时双向通信                                                                                               | ![](https://img.shields.io/github/stars/socketio/socket.io.svg)              |
| [express](https://github.com/expressjs/express)                     | Web 服务                                                                                                      | ![](https://img.shields.io/github/stars/expressjs/express.svg)               |
| [meteor](https://github.com/meteor/meteor)                          | 全栈开发平台                                                                                                  | ![](https://img.shields.io/github/stars/meteor/meteor.svg)                   |
| [yarn](https://github.com/yarnpkg/yarn)                             | 前后端仓库                                                                                                    | ![](https://img.shields.io/github/stars/yarnpkg/yarn.svg)                    |
| [gulp](https://github.com/gulpjs/gulp)                              | 流式自动化构建                                                                                                | ![](https://img.shields.io/github/stars/gulpjs/gulp.svg)                     |
| [ghost](https://github.com/TryGhost/Ghost)                          | CMS 建站                                                                                                      | ![](https://img.shields.io/github/stars/TryGhost/Ghost.svg)                  |
| [serverless](https://github.com/serverless/serverless)              | 无服务器架构                                                                                                  | ![](https://img.shields.io/github/stars/serverless/serverless.svg)           |
| [tesseract](https://github.com/naptha/tesseract.js)                 | OCR                                                                                                           | ![](https://img.shields.io/github/stars/naptha/tesseract.js.svg)             |
| [webtorrent](https://github.com/webtorrent/webtorrent)              | P2P 流式传输                                                                                                  | ![](https://img.shields.io/github/stars/webtorrent/webtorrent.svg)           |
| [ipfs](https://github.com/ipfs/ipfs)                                | P2P 分布式文件系统                                                                                            | ![](https://img.shields.io/github/stars/ipfs/ipfs.svg)                       |
| [mongodb](https://github.com/mongodb/mongo)                         | 数据库                                                                                                        | ![](https://img.shields.io/github/stars/mongodb/mongo.svg)                   |
| [windows95](https://github.com/felixrieseberg/windows95)            | 操作系统                                                                                                      | ![](https://img.shields.io/github/stars/felixrieseberg/windows95.svg)        |
| [commander.js](https://github.com/tj/commander.js)                  | 命令行工具开发                                                                                                | ![](https://img.shields.io/github/stars/tj/commander.js.svg)                 |
| [nest](https://github.com/nestjs/nest)                              | 微服务                                                                                                        | ![](https://img.shields.io/github/stars/nestjs/nest.svg)                     |
| [homebridge](https://github.com/nfarina/homebridge)                 | 智能家庭                                                                                                      | ![](https://img.shields.io/github/stars/nfarina/homebridge.svg)              |
| [TensorFlow](https://github.com/tensorflow/tfjs)                    | 机器学习                                                                                                      | ![](https://img.shields.io/github/stars/tensorflow/tfjs.svg)                 |
| [johnny-five](https://github.com/rwaldron/johnny-five)              | IoT 开发                                                                                                      | ![](https://img.shields.io/github/stars/rwaldron/johnny-five.svg)            |
| [vert.x](https://github.com/eclipse-vertx/vert.x)                   | 异步服务框架                                                                                                  | ![](https://img.shields.io/github/stars/eclipse-vertx/vert.x.svg)            |
| [node-red](https://github.com/node-red/node-red)                    | IoT 可视化                                                                                                    | ![](https://img.shields.io/github/stars/node-red/node-red.svg)               |
| [assemblyscript](https://github.com/AssemblyScript/assemblyscript)  | Web 汇编语言                                                                                                  | ![](https://img.shields.io/github/stars/AssemblyScript/assemblyscript.svg)   |
| [serialport](https://github.com/node-serialport/node-serialport)    | 机器人开发                                                                                                    | ![](https://img.shields.io/github/stars/node-serialport/node-serialport.svg) |
| [MQTT](https://github.com/mqttjs/MQTT.js)                           | MQTT                                                                                                          | ![](https://img.shields.io/github/stars/mqttjs/MQTT.js.svg)                  |
| [opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs) | 图像识别                                                                                                      | ![](https://img.shields.io/github/stars/justadudewhohacks/opencv4nodejs.svg) |
| [jerryscript](https://github.com/pando-project/jerryscript)         | IoT 引擎                                                                                                      | ![](https://img.shields.io/github/stars/pando-project/jerryscript.svg)       |

## 中间层架构

### 前后端分离矛盾

1. 复杂系统后端任务量大,进度滞后,前后端相互制约
2. 前端无法控制数据格式和通信方式,存在性能问题
3. 视图层在后端：前端写静态 demo，后端翻译成后端视图?
4. 视图层在前端：接口问题前后端沟通成本高,业务逻辑成为灰色地带,前后端从来没有真正解耦
5. 无法良好的支持跨终端
6. SEO 问题
7. M-V-C 每一层都可能出现别的层的代码，日积月累，完全没有维护性可言。三层架构从物理层次上保证了你不可能这么做。

### 解决方案

- 前端：负责 View 层
- 中端：Node 负责 Controller 层,接口设计,代理请求处理,做服务端渲染
- 后端：Java 只负责 Model 层业务处理/数据

## 评估

- 两层变三层,牺牲通信性能换职责清晰、方便协作，提高整体开发效率
- 多加一层就多一层风险，需要做好防护

<!-- 为什么不统一用 node？

1. 我们的初衷是做前后端分离，如果考虑这个问题就有点违背我们的初衷了。
2. 是累死前端还是逼死后端?
   结论:暂时没必要 -->

## [Node 全栈生态](https://blog.csdn.net/canfeit/article/details/82999393#Nodejs_104)
