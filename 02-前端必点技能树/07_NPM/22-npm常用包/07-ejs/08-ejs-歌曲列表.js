const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');

// 显示列表
app.get('/songs', (require, response) => {
    // 字符串参数
    let str = fs.readFileSync('./nb人物.html').toString();
    // 数据对象
    let data = {
        songs: [
            '鬼谷子',
            '如来佛祖',
            '斗战胜佛',
            '弼马温',
            '666'
        ]
    };


    let result = ejs.render(str, data);
    // console.log(result);
    response.send(result);
});


app.listen(8000);