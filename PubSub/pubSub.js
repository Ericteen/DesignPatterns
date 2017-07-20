var event = {
    clientLists: [],
    listen: function(key, fn) {
        if (!this.clientLists[key]) {
            this.clientLists[key] = [];
        }
        this.clientLists[key].push(fn);
    },

    trigger: function() {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientLists[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        fns.map(fn => fn.apply(this, argumens));
    },

    remove: function(key, fn) {
        var fns = this.clientList[key];
        if (!fns) { // 如果 key 对应的消息没有被人订阅，则直接返回
            return false;
        }
        if (!fn) { // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
            return fns && (fns.length = 0);
        } else {
            for (var l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1); // 删除订阅者的回调函数
                }
            }
        }
    }
};

var installEvent = function(obj) {
    for (var i in event) {
        obj[i] = event[i];
    }
};

var salesOffices = {};
installEvent(salesOffices);
salesOffices.listen('squareMeter88', function(price) { // 小明订阅消息
    console.log('价格= ' + price);
});
salesOffices.listen('squareMeter100', function(price) { // 小红订阅消息
    console.log('价格= ' + price);
});
salesOffices.trigger('squareMeter88', 2000000); // 输出： 2000000
salesOffices.trigger('squareMeter100', 3000000); // 输出： 3000000


/**
 * 全局的发布订阅对象
 */

var Event = (function() {
    var clientList = {},
        listen,
        trigger,
        remove;
    listen = function(key, fn) {
        if (!clientList[key]) {
            clientList[key] = [];
        }
        clientList[key].push(fn);
    };
    trigger = function() {
        var key = Array.prototype.shift.call(arguments),
            fns = clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };
    remove = function(key, fn) {
        var fns = clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            return fns && (fns.length = 0);
        } else {
            for (var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1);
                }
            }
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    };

})();
Event.listen('squareMeter88', function(price) { // 小红订阅消息
    console.log('价格= ' + price); // 输出： '价格=2000000'
});
Event.trigger('squareMeter88', 2000000); // 售楼处发布消息
