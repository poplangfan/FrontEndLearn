// -----------------独立测试区 1：执行环境 于 执行流----------------------
// 每个作用域都有它自己的执行环境。
// 也叫执行上下文。每个执行环境就是一个变量对象，存储了变量与函数
// 下面的顺序就是执行流（可以在浏览器打断点查看）
// var a = 1;              // 顺序1
// var b = 2;              // 顺序2
// function fn(x) 
// {        
//     var a = 10;         // 顺序4
//     function bar(x) 
//     {
//         var a = 100;    // 顺序6    顺序11
//         b = x + a;      // 顺序7    顺序12
//         return b;       // 顺序8    顺序13
//     }                   // 顺序9    顺序14
//     bar(20);            // 顺序5
//     // bar(20)执行环境： x:20, a:undefined, arguments:[0], this:window
//     bar(200);           // 顺序10
// }                       // 顺序15
// fn(0);                  // 顺序3
// // fn(0)执行环境：是一个变量对象，存储了：
// // x:0, a:undefined, bar:function, arguments:[0], this:window


// -----------------独立测试区 2：arguments是什么----------------------
// function fff() 
// {
//     console.log(arguments);
// }
// fff('cc', 222, 'cccc'); // Arguments : [2]
// fff();// Arguments: 


// -----------------独立测试区 2：作用域----------------------
// 如图
// 每个作用域都有变量提升var（let和const 不吃这套！）, 但是var也有它的作用

/*
    总结:
    1   在js中,除了全局作用域,每个函数都会创建自己的作用域
    2   作用域在函数定义时就已经确定,与函数调用无关
    3   通过作用域,可以查找 作用域范围内 的变量和函数 有哪些, 却不知道变量的值是什么 
    所以,作用域是静态

    4   对于函数来说,执行环境在函数调用时确定的     
    5   执行环境包含作用域所有的变量和函数的值
    6   在同一作用域下,不同的调用会产生不同的执行环境,从而产生不同的变量和值
    7   所以,执行环境时动态的

*/

