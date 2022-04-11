// 暴露语法
//1. 暴露的数据可以是任意类型
// 但一般暴露的数据 都是引用类型的 数组 对象 函数
// module.exports =1111;
// module.exports = 'iloveyou';

// 2.exports 暴露
let a = a;
let b = b;

exports.a =a;
exports.b =b;
module.exports = {a,b};

// exports = module.exports = {a:a,b:b};

// 3.不能使用 exports = xx 进行暴露
// exports = 100;
// exports = 100;
// module.exports = {};

//简化记忆 module.exports = xx; 


