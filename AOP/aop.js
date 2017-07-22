/**
 * AOP
 * @Author Cheng_Guanghui
 * @Date   2017-07-22T18:29:05+0800
 * @description AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些
 * 跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后，
 * 再通过“动态织入”的方式掺入业务逻辑模块中。这样做的好处首先是可以保持业务逻辑模块的
 */
Function.prototype.before = function(beforefn) {
    var __self = this;
    return function() {
        beforefn.apply(this, arguments);
        return __self.apply(this, arguments);
    };
};

Function.prototype.after = function(afterfn) {
    var __self = this;
    return function() {
        var ret = __self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    };
};
var func = function() {
    console.log(2);
};
func = func.before(function() {
    console.log(1);
}).after(function() {
    console.log(3);
});
func();
