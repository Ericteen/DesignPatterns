// 1. Currying
// 2. Uncurrying
// 3. 函数节流 (Throttle)
/**
 * Throttle
 * @Author Cheng_Guanghui
 * @Date   2017-07-20T09:09:49+0800
 * @param  {Function}               fn       需要吧延迟的函数
 * @param  {number}                 interval 延迟指行的时间
 * @return {Function}                        返回新的函数
 * @description 将即将被执行的函数用
 * setTimeout 延迟一段时间执行。如果该次延迟执行还没有完成，则忽略接下来调用该函数的请求。
 */
var throttle = function(fn, interval) {
    var __self = fn, // 保存需要被延迟执行的函数引用
        timer, // 定时器
        firstTime = true; // 是否是第一次调用
    return function() {
        var args = arguments,
            __me = this;

        if (firstTime) { // 若是第一次调用 不需要延迟
            __self.apply(__me, args);
            firstTime = false;
            return firstTime;
        }

        if (timer) { // 若定时器还在， 说明前一次延迟执行还没有完成
            return false;
        }

        timer = setIimeout(function() { // 延迟执行一段时间
            clearTimeout(timer);
            timer = null;
            __self.apply(__me, args);
        }, interval || 500);
    };
};

window.onresize = throttle(function() {
    console.log(1);
}, 500);


// 4. 分时函数 (timeChunk)
/**
 * TimeChunk
 * @Author Cheng_Guanghui
 * @Date   2017-07-20T10:41:46+0800
 * @param  {array}                 arr   输入的数据
 * @param  {Function}               fn    封装了逻辑的函数
 * @param  {number}                 count 每一批创建的节点数量
 * @return {function}                       返回分时函数
 */
var timeChunk = function(arr, fn, count) {
    var obj, t, len = arr.length;
    var start = function(fn, count) {
        for (var i = 0; i < Math.min(count || 1, len); i++) {
            obj = arr.shift();
            fn(obj);
        }
    };

    return function() {
        t = setInterval(function() {
            if (len === 0) {
                clearInterval(t);
            }
            start();
        }, 200);
    };
};

var arr = [];
for (var i = 1; i <= 1000; i++) {
    arr.push(i);
}
var renderFriendList = timeChunk(arr, function(n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
}, 8);
renderFriendList();


// 5. 惰性加载函数
// 在第一次进入条件分支之后，在函数内部会重写这个函
// 数，重写之后的函数就是我们期望的 addEvent 函数，在下一次进入 addEvent 函数的时候， addEvent
// 函数里不再存在条件分支语句
var addEvent = function (ele, type, handler) {
  if (window.addEventListener) {
    addEvent = function (ele, type, handler) {
      ele.addEventListener(type, handler, flase);
    };
  } else if (window.attachEvent) {
    addEvent = function (ele, type, handler) {
      ele.attachEvent('on' + type, handler);
    };
  }

  addEvent(ele, type, handler);
}