//选手数据
const player = [
    { id: 1, name: 'xiaoming' },
    { id: 2, name: 'xiaoning' },
    { id: 3, name: 'xiaotian' },
    { id: 4, name: 'knight' },
];

// 引入 express包
const express = require('express');
// 创建应用对象
const app = express();

// 设置express 使用的模板引擎 ejs
app.set('view engine','ejs');
app.set('views','./template');
// 设置ejs使用的模板存放位置 模板指的是 HTML代码存放的文件


// 路由的设置
app.get('/player', (request,response) => {
    // 2.到指定文件夹下创建模板文件
    // 3.设置模板响应 使用ejs编译 ./template/player.ejs
    response.render('player',{player:player});
});

// 监听端口 启动服务
app.listen(8000,() =>{
    console.log('服务已经启动 ..');
})