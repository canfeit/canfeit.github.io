---
title: "this"
---

https://github.com/nodejs/node/blob/master/lib/timers.js#L335

```js
// 全局变量 "x"
var x = 10;

// 全局 function
function foo() {
  console.log(x);
}

(function(funArg) {
  // 局部变量 "x"
  var x = 20;

  // 这不会有歧义
  // 因为我们使用"foo"函数的[[Scope]]里保存的全局变量"x",
  // 并不是 caller 作用域的"x"

  funArg(); // 10, 而不是 20
})(foo); // 将 foo 作为一个"funarg"传递下去

//全局上下文的变量对象是从"Object.prototype"继承到的
Object.prototype.x = 10;

var w = 20;
var y = 30;

// 在SpiderMonkey全局对象里
// 例如，全局上下文的变量对象是从"Object.prototype"继承到的
// 所以我们可以得到“没有声明的全局变量”
// 因为可以从原型链中获取

console.log(x); // 10

function baz() {
  var x = 1;
  return {
    foo: function foo() {
      return ++x;
    },
    bar: function bar() {
      return --x;
    }
  };
}

var closures = baz();

console.log(
  closures.foo(), // 2
  closures.bar() // 1
);
//在某个循环中创建多个函数时，上图会引发一个困惑。如果在创建的函数中使用循环变量(如”k”)，那么所有的函数都使用同样的循环变量，导致一些程序员经常会得不到预期值。现在清楚为什么会产生如此问题了——因为所有函数共享同一个[[Scope]]，其中循环变量为最后一次复赋值。
//在ECMAScript中，是不可以给this赋值的，
var data = [];

for (var k = 0; k < 3; k++) {
  data[k] = function() {
    alert(k);
  };
}

data[0](); // 3, but not 0
data[1](); // 3, but not 1
data[2](); // 3, but not 2

var bar = {
  baz: function() {
    console.log(this);
  }
};
bar.baz(); // equals (bar.baz)(); also bar
```
