function add(a,b){
    return a + b;
}

function div(a,b){
    return a/b;
}

// 暴露数据
// module.exports = add;
module.exports = {
    add,    //add:add.
    div  //div:div
}