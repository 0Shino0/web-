const fs = require('fs');
// const { request, response } = require('express');
const express = require('express');
const moment = require('moment');
const app = express();

// 1.声明一个中间件   next 是一个函数类型值
let record = function(request,response,next){
    // 获取时间 Date getFulleYear getMonth  getDate
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    // 获取路径
    const path = request.url;
    //  拼接要写入的字符串
    let str = `[${time} ${path}\r\n]`;
    // 写入文件
    fs.writeFileSync('./access.log',str,{flag:'a'});
    // 调用next 函数
    next();
}

//  路由中间件
let checkUser = function(request,response,next){
     // 获取admin url参数
     let isAdmin = request.query.admin;
     // 判断
     if(isAdmin === '1'){
        //  response.send('后台设置');
        next();
     }else{
         // 登录跳转页面
         response.redirect('/login');
     }
}
// 3.路由中间件 的使用 将中间件函数 作为路由的第二个参数使用

// 2.中间件使用  配置 （全局中间件） (app.use 每个 app.方法 在执行前都会调用)
app.use(record);

// 路由
// 将用户的请求 记录在文件中 access.log
app.get('/admin',checkUser,(request,response) =>{
   response.send('后台首页')
});

app.get('/setting',checkUser,(request,response) =>{
    response.send('后台设置');
});

app.get('/cart',checkUser,(request,response) =>{
    response.send('购物车');
});

app.get('/home',(request,response) =>{
    response.send('前端页面');
});

app.get('/login',(request,response) =>{
    response.send('登录页面');
});

app.listen(8000);