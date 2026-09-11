// 文件读取
const fs = require('fs');
const process = require('process');

// 异步读取文件
// fs.readFile('../test.txt', (err: any, data: any) => {
//     if (err) {
//         console.log('读取文件失败～～');
//         return;

//     }
//     console.log('读取文件成功');
//     console.log(data.toString());
// });

// 同步读取文件
// const data = fs.readFileSync('../test.txt');
// console.log(data.toString());


// 使用读取流读取文件：可以提高读取的效率
// const rs = fs.createReadStream('../test.txt');
// // 绑定data事件
// rs.on('data', (chunk: any) => {
//     console.log(chunk);
//     console.log(chunk.length);
//     // 对于视频等其他文件，则会打印乱码，不是字符串
//     console.log(chunk.toString());

// });

// rs.on('end', () => {
//     console.log('读取完成');
// });

// 通过readFile复制文件
// const data = fs.readFileSync('../AweSun_16.6.0.32198_arm64.dmg');
// fs.writeFileSync('../AweSun_16.6.0.32198_arm643.dmg', data);
// console.log(process.memoryUsage()); // 查看内存使用情况，复制大文件时会占用大量内存
// // rss 210796544 201MB


// 通过使用读取流复制一个文件:更好，推荐使用这个，理想状态只使用64KB空间即可完成
const rs = fs.createReadStream('../AweSun_16.6.0.32198_arm64.dmg');
const wr = fs.createWriteStream('../AweSun_16.6.0.32198_arm642.dmg');
// rs.on('data', (chunk: any) => {
//     wr.write(chunk);
// });

// rs.on('end', () => {
//     console.log(process.memoryUsage()); // 查看内存使用情况，复制大文件时会占用大量内存
//     // rss 97320960 92MB
//     console.log('复制文件完成');

// });

// 通过管道流复制文件
rs.pipe(wr);
wr.on('finish', () => {
    console.log(process.memoryUsage()); // 查看内存使用情况，复制大文件时会占用大量内存
    // rss 86884352 82MB
    console.log('复制文件完成');
});
