---
title: "Type"
date: 2019-07-23T23:07:25+08:00
draft: true
---

7 中基本类型：
boolean:let areYouOk: boolean = true
null，一个表明 null 值的特殊关键字
undefined，变量未定义时的属性
number:let b: number = 1_000_000
string:let name: string = `xiaoming`;
symbol
const symbol = Symbol();const obj = { [symbol ]: "value"};console.log(obj[symbol]); // "value"
object
数组
let list: number[] = [1, 2, 3];
使用数组泛型：let list: Array<number> = [1, 2, 3];
类型推断：let list= [1, 2, 3];
类型断言
let oneString: any = "this is a string";
let stringLength: number = (oneString as string).length;
泛型用于提升代码的重用性。
const hello=<T>(arg: T): T=> arg
泛型变量 T，T 代表用户即将传入的类型
function hello<T>(arg: Array<T>): Array<T> {
console.log(arg.length);
return arg;
}
与后端开发约定订单的状态开始是 0，未结账是 1，运输中是 2，运输完成是 3，已收货是 4。这样的纯数字会使得代码缺乏可读性。枚举就用于这样的场景。枚举可以让我们定义一些名字有意义的常量。
enum OrderStatus{ Start, Unpaid, Shipping, Shipped, Complete,}现在，Start 的值就是 0 了，后面的枚举类型再依次递增。
数字枚举的反向映射
OrderStatus.Start //0
OrderStatus[0] //'Start'
enum OrderStatus{ Start= 1, Unpaid, Shipping, Shipped, Complete,}
当然枚举类型中的值必须是确定的，比如，像下面这样的写法是不允许的：enum Example { A = hello(), B, // error! 'A' is not constant-initialized, so 'B' needs an initializer}类似这样没有给出确定值的写法，在 TypeScript 中都是不允许的。
enum OrderStatus{ Start='开始', Complete='完成',}
