// 文件的其他操作：重命名(移动），删除，创建目录，删除目录，读取目录
const fs = require('fs');
const path = require('path');

// 重命名文件:同步和异步（还可以移动）
// fs.renameSync('../test.txt', '../test2.txt');

// fs.rename('../test2.txt', '../test3.txt', (err: any) => {
//     if (err) {
//         console.log('重命名失败');
//         return;
//     }
//     console.log('重命名成功');
// });

// 文件的移动
// fs.rename('../tsconfig2.json', './tsconfig.json', (err: any) => {
//     if (err) {
//         console.log('移动失败');
//         return;
//     }
//     console.log('移动成功');
// });

// 文件删除
// fs.unlink('../test3.txt', (err: any) => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     }
//     console.log('删除成功');
// });

// fs.unlinkSync('../test.txt');

// 调用rm方法，node 14.4支持. rmSync方法，node 14.14支持
// fs.rm('../test.txt', (err: any) => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     }
//     console.log('删除成功');
// });
// 同步删除文件
// fs.rmSync('../test.txt');

// 新建文件夹
// fs.mkdir('./html', (err: any) => {
//     if (err) {
//         console.log('创建文件夹失败～～');
//         return;
//     }
//     console.log('新建文件夹成功')
// });

// fs.mkdirSync('./html/css');

// 递归创建文件夹
// fs.mkdir('./a/b/c', { recursive: true }, (err: any) => {
//     if (err) {
//         console.log('创建文件夹失败～～');
//         return;
//     }
//     console.log('新建文件夹成功')
// });

// 读取文件夹
// fs.readdir('../00-base', (err: any, data: any) => {
//     if (err) {
//         console.log('读取文件夹失败～～');
//         return;
//     }
//     console.log(data);
// });

// 删除文件夹:递归删除，不推荐使用rmdir
// fs.rm('./a', { recursive: true }, (err: any) => {
//     if (err) {
//         console.log('删除文件夹失败～～');
//         console.log(err)
//         return;
//     }
//     console.log('删除文件夹成功');
// });

// 查看文件资源情况
// fs.stat("../test.txt", (err: any, data: any) => {
//     if (err) {
//         console.log('查看文件资源失败～～');
//         return;
//     }
//     // console.log(data);
//     console.log(data.isFile());
//     console.log(data.isDirectory());
// });

// 相对路径和绝对路径
// 需要注意的地方:相对路径参照物：命令行的工作目录，而不是参考代码所在目录
// 相对路径不稳定，会随着命令行的工作目录不同，如何解决：换绝对路径
// fs.writeFileSync('./index.html', 'hello world');
// 绝对路径：__dirname ‘全局变量’ 保存的是：所在文件的所在目录的绝对路径
// console.log(__dirname);
// fs.writeFileSync(__dirname + '/index.html', 'hello world');

// console.log(__dirname + '/index.html');
// resolve 第一个参数：绝对路径，后面参数：都是相对路径
// const p1 = path.resolve(__dirname, './index.html');
const p2 = path.resolve(__dirname, 'index.html');
// console.log(p1);
console.log(p2);

// sep分隔符
// console.log(path.sep);

// parse 解析路径并返回对象
// __filename 文件的绝对路径
// console.log(__filename);
// let filePath = '/Users/a1/Devp/nodejs_study/01-fs/02-file_other.ts';
// console.log(path.parse(filePath));
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));















