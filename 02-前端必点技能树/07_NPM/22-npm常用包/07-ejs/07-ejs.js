// ejs 模板引擎 一种技术 并不是 JS独有
// 1.安装ejs

// 2.引入ejs
const ejs = require('ejs');
const fs = require('fs');

// 调用方法
/**
 * str      要编译的字符串
 * data     数据对象
 * 
 */

// 一变量拼接
// let str = `<h1><%= msg %></h1>`
// let str = fs.readFileSync('./荣耀.html').toString();
// let data = {
//     msg:'gogogogogo',
//     title:'H9084901284'
// };

// const result = ejs.render(str,data);
// console.log(result);

// 二.数据遍历
// let str = fs.readFileSync('./nb人物.html').toString();
// let data = {
//     songs:[
//         '鬼谷子',
//         '如来佛祖',
//         '斗战胜佛',
//         '弼马温',
//         '666'
//     ]
// };
// let result = ejs.render(str,data);

// console.log(result);

// 三.判断
let str = `
    <h2>布布TV</h2>
    <% if(!vip){ %>
    <p><%= ad %></p>
    <% }%>
`;

let data = {
    vip:0,
    ad:'不是每一个牛马，都叫做草泥马'
};
const result = ejs.render(str,data);
console.log(result);