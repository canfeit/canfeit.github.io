node index.js 启动

1. src/node_main.cc 的 main 函数
1. 初始化，加载内建模块和本地模块
1. v8 初始化，创建了一个 v8 的 Isolate（隔离）， // 一个 Isolate 是一份独立的 V8 runtime,
   隔离在 v8 中非常常见，仿佛和进程一样，不同隔离不共享资源，有着自己得堆栈，创建一个 Context（js 的执行环境）
1. libuv 的初始化以及 process 对象的定义
1. 暴露 global 出去，在 js 中可以访问
1. 加载 bootstrap/node.js 入口文件，process, GetBinding 等作为参数传给 js 方法 并且利用 v8 来执行
1. 获取命令行参数(index.js),加载执行
1. require 方法定义在 Module 的原型链上
1. builtin 优先级最高,其次 native module
1. 调用 require 方法时查看缓存 Module.\_cache 中是否有该模块，如果有，直接返回，通过 NativeModule.nonInternalExists 判断该模块是否为 NativeModule，如果是，调用 NativeModule.require，
   Node.js 源码编译的时候，会采用 v8 附带的 js2c.py 工具，将 lib 文件夹下面的 js 模块的代码都转换成 C 里面的数组 natives
   process.binding('natives'); 的作用，就是从内存中取出这个 natives 数组
   否则，新创建一个 Module 对象，调用 tryModuleLoad 函数加载模块
1. 如果路径是一个文件并且存在，那么直接返回文件的路径
   如果路径是一个目录，调用 tryPackage 函数去解析目录下的 package.json，然后取出其中的 main 字段所写入的文件路径
   判断路径如果存在，直接返回
   尝试在路径后面加上 .js, .json, .node 三种后缀名，判断是否存在，存在则返回
   尝试在路径后面依次加上 index.js, index.json, index.node，判断是否存在，存在则返回
   如果还不成功，直接对当前路径加上 .js, .json, .node 后缀名进行尝试
   Module.wrapper = [
   '(function (exports, require, module, __filename, __dirname) { ',
   '\n});'
   ];
   给源代码加上了一头一尾，其实相当于是将源码包在了一个函数中，这个函数的参数有 exports, require, module 等。这就是为什么我们写模块的时候，不需要定义 exports, require, module 就可以直接用的原因。执行，最后返回 exports 的值
   对于 built-in 模块而言，它们不是通过 require 来引入的，而是通过 precess.binding('模块名') 引入的。一般我们很少在自己的代码中直接使用 process.binding 来引入 built-in 模块，而是通过 require 引用 native 模块，而 native 模块里面会引入 built-in 模块
   process.binding 这个方法定义在 node.cc 中：
   针对不同的扩展名，调用不同的 Module.\_extensions 方法来加载、编译模块。
   一共支持三种类型的模块加载：.js, .json, .node。其中 .json 类型的文件加载方法是最简单的，直接读取文件内容，然后 JSON.parse 之后返回对象即可。
   对 .js 的处理，首先也是通过 fs 模块同步读取文件内容
   加载第三方 C/C++模块（.node 后缀）。直观上来看，很简单，就是调用了 process.dlopen 方法。这个方法的定义在 node.cc 中：
   该函数中最重要的是使用 uv_dlopen 方法打开动态链接库，然后对 C/C++ 模块进行加载。uv_dlopen 方法是定义在 libuv 库中的

全局对象是最顶层的对象，在浏览器环境指的是 window 象，在 Node.js 指的是 global 对象。ES5 之中，全局对象的属性与全局变量是等价的。

window.a = 1;  
a // 1

a = 2;  
window.a // 2  
上面代码中，全局对象的属性赋值与全局变量的赋值，是同一件事。（对于 Node 来说，这一条只对 REPL 环境适用，模块环境之中，全局变量必须显式声明成 global 对象的属性。）
在模块里用 var 声明的变量，全部都是在 module 作用域里的，优先于 global 作用域的属性
不用 var 关键字声明变量，也会成为 global 的属性
exports 和 module.exports 都是某个对象的引用（reference）,node 导出的，永远是 module.exports 指向的对象，
require=module.require
node.js 中不可能在最外层定义变量，因为所有的用户代码都是属于当前模块的(被包裹)

node 启动流程,js 入口,global 绑定,repl 和 module 中 global 区别
process 添加到 global
加载执行 js 主入口 node.js,global 作为参数
