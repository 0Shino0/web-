// 安装 express
// 引入 express 包
const { response } = require('express');
const express = require('express');
// 创建应用对象
const app = express();

// 1.静态资源服务中间件
app.use(express.static('./public'));

app.get('/form',(request,response) => {
    // 将某个文件中的内容 响应
    response.sendFile('./form.html');
})

// 监听端口 启动服务
app.listen(8000, () => {
    console.log('服务已经启动.. 端口 80 监听中....');
});
