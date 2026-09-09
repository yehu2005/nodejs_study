"use strict";
// console.log('hello nodejs');
// 创建buffer
// 1.Buffer.alloc
let buf = Buffer.alloc(10);
// console.log(buf);
// 2.Buffer.allocUnsafe
let buf2 = Buffer.allocUnsafe(10000);
// console.log(buf2);
// 3.Buffer.from
let buf3 = Buffer.from('hello');
// console.log(buf3[0]?.toString(2));
// buf3[0] = 95;
// console.log(buf3.toString());
// buffer与字符串的转换
let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf4.toString());// utf-8编码
// buffer溢出
let buf5 = Buffer.from('hello');
buf5[0] = 361; // 溢出，超过255，取模256 会舍弃高位的数字 0001 0110 1001 => 0110 1001 => 105
// console.log(buf5.toString());// 105 => 0110 1001 => 0x69 => 'i'
//buffer中文
let buf6 = Buffer.from('中国');
console.log(buf6); // utf-8编码:每个汉字对应3个字节 <Buffer e4 b8 ad e5 9b bd>
