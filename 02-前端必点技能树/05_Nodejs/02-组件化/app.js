// 2. 引入模块  
// 不需要添加 __dirname
// 但是 ./ 不能省略
// const {add,div} = require('./m1.js');

// console.log(add(100,200));
// console.log(div(2000,100));


// const num = require('./m2.js')
// console.log(num);

// 一.路径不带后缀
// const m3 = require('./m3');
// const m4 = require('./m4'); // JSON.parse(fs.readFileSync().toString());
// const m5 = require('./m5.html');
// console.log(m5);

// 二.文件夹情况 
const libs = require('./libs/home');

console.log(libs);

// * 其他扩展名  会以.js文件载入
// * 如果是文件夹则会默认加载该文件夹下 package.json 文件中 main 属性对应的文件
// * 如果 main 属性对应的文件不存在，则自动找 index.js  index.json 
// * 如果是内置模块或者是 npm 安装的模块，直接使用包名字即可
// * npm 引入包时，如果当前文件夹下的 node_modules 没有，则会自动向上查找


