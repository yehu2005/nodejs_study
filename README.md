# nodejs_study
Study node.js

node.js 是一个开源的，跨平台的javascript运行环境

node.js 无法使用 BOM 和 dom api
// BOM
console.log(window)
console.log(history)
console.log(navigator)
console.log(location)
// DOM
console.log(document)

//AJAX
let xhr = new XMLHttpRequest()
//以上不可用在node.js

//global 顶级对象 可用