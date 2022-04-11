'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showData = showData;
exports.showMsg = showMsg;
/* 
    module1使用【分别暴露】

*/

var data = exports.data = 'atguigu';
var msg = exports.msg = 'hellow,10086';

function showData() {
    console.log(data);
}

function showMsg() {
    console.log(msg);
}