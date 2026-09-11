// 需要持久化保存数据时，需要用文件写入
const fs = require('fs');

// 异步写文件
fs.writeFile('../test.txt', 'hello world', (err: any) => {
    if (err) {
        console.log('写入失败～～');
        return;
    }

    console.log('写入成功')
});
//
console.log('继续执行main主线程余下代码');

// 同步写文件：会等主线程把文件处理好，才会继续执行。
// fs.writeFileSync('../test2.txt', 'hello world');

// 异步追加写入
// fs.appendFile('../test.txt', ', love, love', (err: any) => {
//     if (err) {
//         console.log('追加失败～～');
//         return;
//     }
//     console.log('追加成功');
// });

// 可以使用writeFile现实追加的效果，需要加配置项
// fs.writeFile('../test.txt', '\r\n i love you', { flag: 'a' }, (err: any) => {
//     if (err) {
//         console.log('追加失败～～');
//         return;
//     }
//     console.log('追加成功');
// });

// 同步追加写入
// fs.appendFileSync('../test.txt', '\r\nyou, you,you');

// 通过流对象写入文件：适用于写入频繁的写入
const ws = fs.createWriteStream('../test.txt');
ws.write('hihihi\r\n');
ws.write('hihihi2\r\n');
ws.write('hihihi3\r\n');
// 关闭通道
ws.close();


