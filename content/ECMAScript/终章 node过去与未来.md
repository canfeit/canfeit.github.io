## 另一个版本的历史

### node 过去与未来

- 2009 年 Ryan Dahl(ry)发布 Node.js
- 2010 年 Joyent 收购 node,npm 发布
- 2012 年 ry 离开 node,从此没给 node 写过一行代码
- 2014 年 由于 npm intall 奇慢，淘宝发布符合国情的 cnpm，安装的 node_modules 与 npm 不兼容
- 2014 年 node 团队分裂,IO.js 项目创立
- 2015 年 npm3 发布,适应大量前端框架涌入,解决路径过长问题,扁平化设计与 npm2 不兼容
- 2016 年 对 npm 无力吐槽的 Facebook 发布另一个包管理工具 yarn，与 npm 不兼容
- 2016 年 kik&left-pad 事件爆发,babel/react/atom 等大量项目构建失败
  > Azer 在 npm 发布了名为 kik 的包，与 kik 公司商标冲突，kik 公司给 Azer 发律师函要求删包，遭 Azer 拒绝后 kik 公司联系了 npm，npm 将 kik 包所有权从 Azer 转移给了 kik 公司，Azer 一气之下，删除了其名下所有 package，包括 left-pad<br>
  > 同年 express 模板引擎 jade 因商标权问题被迫改名 pug,引起一片混乱
- 2018 年 一款标题包含“JavaScript”的 APP 遭苹果商店下架，因为美国商标注册号 2416017 的 JAVASCRIPT 为甲骨文公司所有
  > JavaScript 并不自由和免费<br>
  > 收购 Sun 后,Oracle 禁止 csdn 旗下国内知名技术论坛 JavaEye 使用 JAVA 字样并提出苛刻条件,JavaEye 被迫改名 ITeye<br>
  > Oracle 与 Google 之间长达八年的 Java API 版权案,至今仍无定论
- 2018 年 知名 JavaScript 应用库 event-stream 被发现存在用于窃取用户数字钱包的恶意代码。
  > 这是一个非常受欢迎的 JavaScript 库，在 npm.org 存储库上每周下载量超过 200 万。恶意依赖已经存在了 2.5 个月内未被发现,期间已被下载 2225 万次,包括 Angular、Vue、Bootstrap、Gatsby,nodemon 等都在使用 event-stream
  > 由于缺乏时间和兴趣，event-stream 原作者将其开发交给另一位名为 Right9ctrl 的程序员。随后此人在库中植入恶意代码,它将窃取用户的钱包信息，包括私钥，并将其发送到 copayapi.host 的 8080 端口上，
- 2018.12 月 25 日，正当人们沉浸在节日的气氛中时，有人突然发现他们开发的应用界面发生了变化，按钮上方出现“积雪”，最开始以为是被黑客代码植入了，在反复检查之后才确定是前端 UI 组件库 Ant Design 提前埋入了“圣诞节彩蛋”，事件迅速发酵,尤其 Antd 大量用于 2B 应用,导致程序员失业.

<!-- ![](https://upload-images.jianshu.io/upload_images/2974893-699e66f80ccb9d3d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp) -->
<!-- ![](https://static.geekbang.org/infoq/5c221266ccc6a.png) -->

- 2019 年 koa 路由中间件 koa-router 项目被作者公开售卖，售价为 5000 美元，koa-router 周平均下载量超过 10W，一旦被售卖给黑客，可能会让 event-stream 事件重演，后果不堪设想。koa 团队及 egg 团队纷纷 fork 其仓库以防不测
- 2019.4 Node 最古老的 npm 包 request 宣布停止维护,周下载量 1412 万

## node 膨胀了需要降降温

- 2018 年 node 之父披露 node 十大设计错误,用 TS 和 Rust 重新开发 deno ![](https://img.shields.io/github/stars/denoland/deno.svg)

  1. 使用 es6 import，不使用 require()
  2. 浏览器兼容,代码无需修改直接在 Web 浏览器中运行
  3. No package.json
  4. No npm
  5. Not Node

- 2019 年 Rust 创始人谈 Rust 2019 和未来：社区应限制成长速度
