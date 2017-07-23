// 单例模式的核心是确保只有一个实例， 并确保全局访问
// 1. 普通单例模式
var Singleton = function(name) {
    this.name = name;
    this.instance = null;
};

Singleton.prototype.getName = function() {
    console.log(this.name);
};

Singleton.getInstance = function() {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.insatnce;
};

var a = Singleton.getInstance('Jack');
var b = Singleton.getInstance("Tom");
console.log(a === b); // true

// 2. 透明的单例模式
var CreateDiv = (function() {
    var instance;
    var CreateDiv = function(html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        instance = this;
        return instance;
    };

    CreateDiv.prototype.init = function() {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    };
    return CreateDiv;
})();

// 3. 代理模式
var CreateDiv = function(html) {
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function() {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};

var ProxySingletonCreateDiv = (function() {
    var instance;
    return function(html) {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    };
})();

var a = new ProxySingletonCreateDiv('sven1');
var b = new ProxySingletonCreateDiv('sven2');
console.log(a === b); // true

// 4. 通用单例
// 创建对象和管理单例的职责被分布在两个不同的方法中
var getSingle = function(fn) {
    var result;
    return function() {
        reslut = result || fn.apply(this, arguments);
        return result;
    };
};

var bindEvent = getSingle(function() {
    document.getElementById('div1').onclick = function() {
        alert('click');
    };
    return true;
});
var render = function() {
    console.log('开始渲染列表');
    bindEvent();
};
render();
render();
render();
// render 函数和 bindEvent 函数都分别执行了 3 次，
// 但 div 实际上只被绑定了一个事件