const { response } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();

// 创建路由规则
app.get('/',(require,response) => {
    response.send('路由界面');
});

app.get('/admin',(request,response) =>{
    // send 方法是 express 封装的响应方法
    // response.setHeader()
    response.send('后台网页');
});

// 显示登录界面
app.get('/login',(require,response) => {
    const body = fs.readFileSync('./form.html');
    response.end(body);
});

app.get('/register',(require,response) => {
    response.send('注册界面');
});

app.get('/login',(require,response) => {
    response.send('登录处理界面');
});

// all方法 所以任意
app.all('test',(require,response)=>{
    response.send('测试');
}) ;

app.get('/introduce',(require,response) =>{
    const body = fs.readFileSync('./intro.html');
    response.end(body);
});

app.listen(8000); 