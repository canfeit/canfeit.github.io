js 基础
执行栈与汇编语言
我们知道，CPU 只负责计算，本身不具备智能。你输入一条指令（instruction），它就运行一次，然后停下来，等待下一条指令。
汇编语言是二进制指令的文本形式，与指令是一一对应的关系。比如，加法指令 00000011 写成汇编语言就是 ADD。只要还原成二进制，汇编语言就可以被 CPU 直接执行，所以它是最底层的低级语言。
汇编语言都是针对特定的计算机体系结构的，例如 x86 汇编（本课重点内容）、MIPS 汇编、ARM 汇编，因此没有让所有计算机都通用的汇编语言。
后来有了 c/Java/js 跨平台,正如 electron/nwjs/react-native/flutter 也是为了跨平台

CPU 本身只负责运算，不负责储存数据。数据一般都储存在内存之中，CPU 要用的时候就去内存读写数据。但是，CPU 的运算速度远高于内存的读写速度，为了避免被拖慢，CPU 都自带一级缓存和二级缓存。基本上，CPU 缓存可以看作是读写速度较快的内存。
但是，CPU 缓存还是不够快，另外数据在缓存里面的地址是不固定的，CPU 每次读写都要寻址也会拖慢速度。因此，除了缓存之外，CPU 还自带了寄存器（register），用来储存最常用的数据。也就是说，那些最频繁读写的数据（比如循环变量），都会放在寄存器里面，CPU 优先读写寄存器，再由寄存器跟内存交换数据。
寄存器不依靠地址区分数据，而依靠名称。每一个寄存器都有自己的名称，我们告诉 CPU 去具体的哪一个寄存器拿数据，这样的速度是最快的。有人比喻寄存器是 CPU 的零级缓存。
我们常常看到 32 位 CPU、64 位 CPU 这样的名称，其实指的就是寄存器的大小。32 位 CPU 的寄存器大小就是 4 个字节。
ESP 寄存器有特定用途，保存当前 Stack 的地址.寄存器只能存放很少量的数据，大多数时候，CPU 要指挥寄存器，直接跟内存交换数据。所以，除了寄存器，还必须了解内存怎么储存数据。

程序运行过程中，对于动态的内存占用请求（比如新建对象，或者使用 malloc 命令），系统就会从预先分配好的那段内存之中，划出一部分给用户,这种因为用户主动请求而划分出来的内存区域，叫做 Heap（堆）。Heap 的一个重要特点就是不会自动消失，必须手动释放，或者由垃圾回收机制来回收。它由起始地址开始，从低位（地址）向高位（地址）增长.
除了 Heap 以外，其他的内存占用叫做 Stack（栈）。简单说，Stack 是由于函数运行而临时占用的内存区域。Stack 是由内存区域的结束地址开始，从高位（地址）向低位（地址）分配。

RISC 是 80 年代初发明的，那时整个计算机生态系统已经形成，编译器能力增强，就不需要 CPU 对外暴露过度复杂的指令集，因此有了 RISC 精简指令集。MIPS ARM 是 RISC 的代表，RISC 指令集特点是：
只关注一些简单常用的指令，因此简单轻量、高性能、功耗低
那些不常用的复杂指令，就依赖于编译器（即用软件来实现，而不是依赖于硬件的复杂指令），那时编译器已经比较强大
()[https://img.mukewang.com/5bab45350001ba4e11700818.png]()[https://img.mukewang.com/5bab455200011d6313820764.png]()[https://img.mukewang.com/5bab456a000173b605900774.png]()[https://image.fundebug.com/2019-0417-001.png]()[https://image.fundebug.com/2019-0417-003.png]
JavaScript 在执行期间为程序分配了三部分内存：代码区，调用栈和堆。 这些组合在一起称为程序的地址空间。
JavaScript 对所有数据类型都使用按值传递。它对数组和对象使用按值传递(实参的引用地址传给形参)，对参数重新赋值不会影响原来的实参
JS 引擎中的代码生成器在最终生成机器码之前，首先是将 js 代码编译为汇编代码。
根据约定，程序从\_main 标签开始执行，这时会在 Stack 上为 main 建立一个帧，并将 Stack 所指向的地址，写入 ESP 寄存器。后面如果有数据要写入 main 这个帧，就会写在 ESP 寄存器所保存的地址。

然后，开始执行第一行代码。

push3

push 指令用于将运算子放入 Stack，这里就是将 3 写入 main 这个帧。

虽然看上去很简单，push 指令其实有一个前置操作。它会先取出 ESP 寄存器里面的地址，将其减去 4 个字节，然后将新地址写入 ESP 寄存器。使用减法是因为 Stack 从高位向低位发展，4 个字节则是因为 3 的类型是 int，占用 4 个字节。得到新地址以后， 3 就会写入这个地址开始的四个字节。

push2

第二行也是一样，push 指令将 2 写入 main 这个帧，位置紧贴着前面写入的 3。这时，ESP 寄存器会再减去 4 个字节（累计减去 8）。

https://cn.bing.com/search?q=%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80+%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B&qs=n&form=QBRE&sp=-1&pq=%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80+%E5%86%85%E5%AD%98mo%27xing&sc=0-14&sk=&cvid=C4455DFCD0A346918CC9ACF15DE5DAD2
原型链与作用域链

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
