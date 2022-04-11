
//
const http = require('http');
const url = require('url');
const fs = require('fs');

//获取 JSON 数据
const data = fs.readFileSync('./data.json').toString();
const newsData = JSON.parse(data);
//
const server = http.createServer((request, response) => {
    //获取请求的类型
    let {method} = request;
    console.log(method);
    //获取请求的路径
    let pathname = url.parse(request.url, true).pathname;
    if(method === 'GET' && pathname === '/news'){
        //响应『新闻列表』
        let body = fs.readFileSync('./news.html');
        //拼接 新闻的 HTML 结构
        let str = '';
        //遍历数组
        for(let i=0;i<newsData.data.length;i++){
            str += `<div class="media">
                        <div class="media-left">
                            <a target="_blank" href="https://www.toutiao.com${newsData.data[i].source_url}">
                                <img class="media-object" src="${newsData.data[i].image_url}" />
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading title" >${newsData.data[i].title}</h4>
                            <p>
                            ${newsData.data[i].abstract ? newsData.data[i].abstract : ''}
                            </p>
                        </div>
                    </div>`;
        }

        response.end(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>新闻列表 | H5200826</title>
            <link crossorigin='anonymous' href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
                rel="stylesheet">
            <style>
                .title{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                body{
                    background:#889;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-xs-offset-3">
                        <h2 class="page-header">新闻列表</h2>
                        ${str}
                    </div>
                </div>
            </div>
        </body>
        
        </html>`);
    }else{
        response.statusCode = 404;
        response.end('404');
    }
});

server.listen(8000);