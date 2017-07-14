/**
 * 模块模式
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T13:08:02+0800
 * @description 下面是一个模板包含了命名空间，公共变量和私有变量
 */
var myNamespace = (function() {

    var myPrivateVar, myPrivateMethod;

    // 私有变量
    myPrivateVar = 0;

    // 私有函数
    myPrivateMethod = function(foo) {
        console.log(foo);
    };

    return {

        // 公有变量
        myPublicVar: "foo",

        // 共有函数调用私有变量和私有函数
        myPublicFunction: function(bar) {

            myPrivateVar++;

            myPrivateMethod(bar);

        }
    };

})();
