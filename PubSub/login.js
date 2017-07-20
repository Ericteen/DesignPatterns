// 使用 Pub/Sub 模式对请求完的函数进行封装
$.ajax('http:// xxx.com?login', function(data) { // 登录成功
    login.trigger('loginSucc', data); // 发布登录成功的消息
});

var header = (function() { // header 模块
    login.listen('loginSucc', function(data) {
        header.setAvatar(data.avatar);
    });
    return {
        setAvatar: function(data) {
            console.log('设置 header 模块的头像');
        }
    };
})();
var nav = (function() { // nav 模块
    login.listen('loginSucc', function(data) {
        nav.setAvatar(data.avatar);
    });
    return {
        setAvatar: function(avatar) {
            console.log('设置 nav 模块的头像');
        }
    };
})();

var address = (function() { // nav 模块
    login.listen('loginSucc', function(obj) {
        address.refresh(obj);
    });
    return {
        refresh: function(avatar) {
            console.log('刷新收货地址列表');
        }
    };
})();
