node 生态与应用场景
node 历史
2008 年 v8
2009 年 Ryan Dahl(ry) C/C++写高性能 Web 服务。对于高性能，异步 IO、事件驱动是基本原则，但是用 C/C++写就太痛苦了。于是这位仁兄开始设想用高级语言开发 Web 服务。他评估了很多种高级语言，发现很多语言虽然同时提供了同步 IO 和异步 IO，但是开发人员一旦用了同步 IO，他们就再也懒得写异步 IO 了，所以，最终，Ryan 瞄向了 JavaScript。
因为 JavaScript 是单线程执行，根本不能进行同步 IO 操作，所以，JavaScript 的这一“缺陷”导致了它只能使用异步 IO,带著他的团队开发出了开源 Web 服务器项目“Web.js”,由于 Web.js 足够轻量,ry 认为应该把他打造成一个用于大型项目开发,一个 Web.js 节点提供一个服务,多个节点组成一个完整的项目,改名 node.js
2010 年 Joyent 收购 node,npm 发布
2011 年 微软与 Joyent 合作帮助开发了原生的 Windows 版本的 Node.js
2014 年 11 月 - nodejs 0.11 IO.js 项目创立
2015 年 2 月 - IO.js 发布 3.0,Joyent 携手各大公司和 Linux 基金会成立 Node.js 基金会发布 node4.0
2019 年 Node.js 基金会与 JS 基金会合并为 OpenJS 基金会

node 历史续
node 膨胀了需要降降温
2014 年 由于 npm intall 奇慢，淘宝发布符合国情的 cnpm，结构与 npm 不兼容
2015 年 npm3 发布,解决路径过长问题,扁平化设计与 npm2 不兼容
2016 年 对 npm 无力吐槽的 Facebook 发布另一个包管理工具 yarn，结构与 npm 不兼容
2016 年 kik@left-pad 事件 babel 和 react
2018.4 APP 标题为“HTML5, CSS, JavaScript, HTML, Snippet Editor”，就是其中包含“JavaScript”而遭到下架，根据维基百科显示该商品权属于 Oracle 集团。而遭到苹果公司的下架处理，，美国商标注册号 2416017 的 JAVASCRIPT 为甲骨文公司所有，而这款包含“JavaScript”字样的 APP 并未得到甲骨文的授权。

而未经授权情况下使用可能会让用户误认为这款 APP 是由甲骨文推出的，根据 Lanham Act. 15 U.S.C. § 1125(a)(1)(A)法案已经侵犯了甲骨文的权益，因此苹果公司根据要求下架了这款应用。
JavaScript 开源不假，但开源并不等同于自由和免费。

Oracle 公司收购 Sun 公司之后，csdn 旗下著名的 Javaeye 论坛被迫改名 iteye,便开始与 Google 就 Android 系统未经授权使用 Java 语言的部分 Api 开庭论战。就在上个月，Oracle 与 Google 之间长达八年之久 的 Java 版权之争

2018 年 11 月 21 日，名为 FallingSnow 的用户在知名 JavaScript 应用库 event-stream 在 github Issuse 中发布了针对植入的恶意代码的疑问，表示 event-stream 中存在用于窃取用户数字钱包的恶意代码。
大约三个月前，由于缺乏时间和兴趣，event-stream 原作者@dominictarr 将其开发交给另一位名为@Right9ctrl 的程序员。
它将窃取用户的钱包信息，包括私钥，并将其发送到 copayapi.host 的 8080 端口上，
这是一个非常受欢迎的 JavaScript 库，在 npm.org 存储库上每周下载量超过 200 万。恶意依赖已经存在了 2.5 个月内未被发现,期间已被下载 2225w 次,包括 Angular、Vue、Bootstrap、Gatsby,nodemon 等都在使用 event-stream
2018.12 月 25 日，正当人们沉浸在节日的气氛中时，部分开发者突然发现他们开发的 Web 网页的界面发生了变化，按钮上方出现“积雪”，经过探索发现这是前端 UI 组件库 Ant Design（简称 antd）提前埋入一个未经声明的“彩蛋”，事件迅速发酵，引起了巨大争议。很多开发者表示愤怒与不满。尤其 Antd 大都企业级的是 2B 应用
最开始，开发者以为是被黑客代码植入了，在反复检查之后才确定是代码中埋入了定时的“圣诞节彩蛋”。
![](https://upload-images.jianshu.io/upload_images/2974893-699e66f80ccb9d3d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp)
![](https://static.geekbang.org/infoq/5c221266ccc6a.png)
2019.1 koa 路由中间件 koa-router 项目被作者公开售卖，售价为 5000 美元，koa-router 在过去一年中，周平均下载量超过 10W，开发者担心如果作者将其售卖给一些黑客，可能会让 event-stream 事件 重演，后果不堪设想。koa 团队也参照 egg 团队的做法，fork 一份，让社区一起来维护。
2019.1 Rust 创始人谈 Rust 2019 和未来：社区应限制成长速度

事件的结局没有大家想的那么坏，koa-router 最后由一位名为 ZijianHe 的开发者接手，ZijianHe 的个人简介称自己是全栈开发者，在过去几年中为私人项目做过上百次贡献。不过，作者最后没有披露这是正常的权限转移还是金钱交易的结果。

Jeff Atwood 曾提出“任何能够用 JavaScript 实现的应用，最终都必将用 JavaScript 实现”

- [TensorFlow](https://github.com/tensorflow/tensorflow)机器学习![](https://img.shields.io/github/stars/tensorflow/tensorflow.svg)
- [vscode](https://github.com/Microsoft/vscode)代码编辑器![](https://img.shields.io/github/stars/Microsoft/vscode.svg)
- [webpack](https://github.com/Microsoft/vscode)前端打包编译![](https://img.shields.io/github/stars/Microsoft/vscode.svg)
- [electron](https://github.com/electron/electron)跨平台桌面应用开发![](https://img.shields.io/github/stars/electron/electron.svg)
- [puppeteer](https://github.com/GoogleChrome/puppeteer)自动化 UI 测试![](https://img.shields.io/github/stars/GoogleChrome/puppeteer.svg)
- [socket.io](https://github.com/socketio/socket.io)实时双向通信![](https://img.shields.io/github/stars/socketio/socket.io.svg)
- [express](https://github.com/expressjs/express)Web 服务![](https://img.shields.io/github/stars/expressjs/express.svg)
- [meteor](https://github.com/meteor/meteor)全栈开发平台![](https://img.shields.io/github/stars/meteor/meteor.svg)
- [yarn](https://github.com/yarnpkg/yarn) 前后端仓库![](https://img.shields.io/github/stars/yarnpkg/yarn.svg)
- [gulp](https://github.com/gulpjs/gulp)流式自动化构建![](https://img.shields.io/github/stars/gulpjs/gulp.svg)
- [ghost](https://github.com/TryGhost/Ghost)CMS 建站![](https://img.shields.io/github/stars/TryGhost/Ghost.svg)
- [serverless](https://github.com/serverless/serverless)无服务器架构![](https://img.shields.io/github/stars/serverless/serverless.svg)
- [tesseract](https://github.com/tesseract-ocr/tesseract) OCR![](https://img.shields.io/github/stars/tesseract-ocr/tesseract.svg)
- [Superset](https://github.com/apache/incubator-superset) 实时数据看板![](https://img.shields.io/github/stars/apache/incubator-superset.svg)
- [webtorrent](https://github.com/webtorrent/webtorrent)P2P 流式传输![](https://img.shields.io/github/stars/webtorrent/webtorrent.svg)
- [ipfs](https://github.com/ipfs/ipfs)P2P 分布式文件系统![](https://img.shields.io/github/stars/ipfs/ipfs.svg)
- [mongodb](https://github.com/mongodb/mongo)数据库![](https://img.shields.io/github/stars/mongodb/mongo.svg)
- [windows95](https://github.com/felixrieseberg/windows95)操作系统![](https://img.shields.io/github/stars/felixrieseberg/windows95.svg)
- [commander.js](https://github.com/tj/commander.js)命令行工具开发![](https://img.shields.io/github/stars/tj/commander.js.svg)
- [nest](https://github.com/nestjs/nest) 微服务![](https://img.shields.io/github/stars/nestjs/nest.svg)
- [homebridge](https://github.com/nfarina/homebridge)智能家庭![](https://img.shields.io/github/stars/nfarina/homebridge.svg)
- [pomelo](https://github.com/NetEase/pomelo)游戏服务引擎![](https://img.shields.io/github/stars/NetEase/pomelo.svg)
- [johnny-five](https://github.com/rwaldron/johnny-five)IoT 开发![](https://img.shields.io/github/stars/rwaldron/johnny-five.svg)
- [vert.x](https://github.com/eclipse-vertx/vert.x)异步服务框架![](https://img.shields.io/github/stars/eclipse-vertx/vert.x.svg)
- [node-red](https://github.com/node-red/node-red)IoT 可视化![](https://img.shields.io/github/stars/node-red/node-red.svg)
- [assemblyscript](https://github.com/AssemblyScript/assemblyscript)Web 汇编语言![](https://img.shields.io/github/stars/AssemblyScript/assemblyscript.svg)
- [serialport](https://github.com/node-serialport/node-serialport)机器人开发![](https://img.shields.io/github/stars/node-serialport/node-serialport.svg)
- [MQTT](https://github.com/mqttjs/MQTT.js)MQTT![](https://img.shields.io/github/stars/mqttjs/MQTT.js.svg)
- [opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs)图像识别![](https://img.shields.io/github/stars/justadudewhohacks/opencv4nodejs.svg)
- [jerryscript](https://github.com/pando-project/jerryscript) IoT 引擎![](https://img.shields.io/github/stars/pando-project/jerryscript.svg)
- [石墨文档](https://shimo.im/)云端 office

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
