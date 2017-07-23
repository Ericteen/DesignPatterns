// 1. Simple Strategy Sample
var performanceS = function() {
    // body...
};

performanceS.prototype.calculate = function(salary) {
    return salary * 4;
};

var performanceA = function() {
    // body...
};

performanceA.prototype.calculate = function(salary) {
    return salary * 3;
};

var performanceB = function() {
    // body...
};

performanceB.prototype.calculate = function(salary) {
    return salary * 4;
};

var Bonus = function() {
    this.salary = null;
    this.strategy = null;
};

Bonus.prototype.setSalary = function(salary) {
    this.salary = salary;
};

Bonus.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
};

Bonus.prototype.getBonus = function() {
    return this.strategy.calculate(this.salary);
};

var bonus = new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS()); // 设置策略对象
console.log(bonus.getBonus()); // 输出： 40000
bonus.setStrategy(new performanceA()); // 设置策略


// 2. JS中的策略模式
var strategies = {
    'S': function(salary) {
        return salary * 4;
    },

    'A': function(salary) {
        return salary * 3;
    },

    'B': function(salary) {
        return salary * 2;
    }
};

var claculateBonus = function(salary, level) {
    return strategies[level](salary);
};

console.log(calculateBonus('S', 20000)); // 输出： 80000
console.log(calculateBonus('A', 10000)); // 输出： 30000


// 2. 表单验证
var verifiPolicy = {
    isNoEmpty: function(val, errMsg) {
        if (val === '') {
            return errMsg;
        }
    },

    minLength: function(val, len, errMsg) {
        if (val.length < len) {
            return errMsg;
        }
    },

    isMobile: function(val, errMsg) {
        if (!/(^1[3|5|8]{9}$)/.test(val)) {
            return errMsg;
        }
    }
};

var FormValidation = function(verifiPolicy) {
    this.strategies = verifiPolicy;
    this.validationFns = [];
};

FormValidation.prototype.add = function(dom, rule, errMsg) {
    var arr = rule.split(':');
    var arg = [];
    var self = this;
    this.validationFns.push(function() {
        arg = []; // 重置参数
        var ruleName = arr[0]; // 策略对象方法名

        // 组装参数
        arg.push(dom.value);
        if (arr[1]) {
            arg.push(arr[1]);
        }
        arg.push(errorMsg);

        // 调用策略函数
        return self.strategies[ruleName].apply(dom, arg);
    });
};

FormValidation.prototype.start = function() {
    for (var i = 0;; i++) {
        var msg = this.validationFns[i]();
        if (msg) {
            return msg;
        }
    }
};


// 3. 缓动动画的实现
var tween = {
    // t: 动画已消耗的时间
    // b: 原始位置
    // c: 目标位置
    // d: 动画持续的时间　
    linear: function(t, b, c, d) {
        return c * t / d + b;
    },

    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t + b;
    },

    strongEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },

    strongEaseOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },

    sineaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },

    sineaseOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }
};

var Animate = function(dom) {
    this.dom = dom; // 进行运动的 dom 节点
    this.startTime = 0; // 动画开始时间
    this.startPos = 0; // 动画开始时， dom 节点的位置，即 dom 的初始位置
    this.endPos = 0; // 动画结束时， dom 节点的位置，即 dom 的目标位置
    this.propertyName = null; // dom 节点需要被改变的 css 属性名
    this.easing = null; // 缓动算法
    this.duration = null; // 动画持续时间
};

Animate.prototype.start = function(propertyName, endPos, duration, easing) {
    this.startTime = +new Date(); // 动画启动时间
    this.startPos = this.dom.getBoundingClientRect()[propertyName]; // dom 节点初始位置
    this.propertyName = propertyName; // dom 节点需要被改变的 CSS 属性名
    this.endPos = endPos; // dom 节点目标位置
    this.duration = duration; // 动画持续事件
    this.easing = tween[easing]; // 缓动算法
    var self = this;
    var timeId = setInterval(function() { // 启动定时器，开始执行动画
        if (self.step() === false) { // 如果动画已结束，则清除定时器
            clearInterval(timeId);
        }
    }, 19);
};

Animate.prototype.step = function() {
    var t = +new Date(); // 取得当前时间
    if (t >= this.startTime + this.duration) { // (1)
        this.update(this.endPos); // 更新小球的 CSS 属性值
        return false;
    }
    var pos = this.easing(t - this.startTime, this.startPos,
        this.endPos - this.startPos, this.duration);
    // pos 为小球当前位置
    this.update(pos); // 更新小球的 CSS 属性值
};

Animate.prototype.update = function(pos) {
    this.dom.style[this.propertyName] = pos + 'px';
};

// TEST
var div = document.getElementById('div');
var animate = new Animate(div);
animate.start('left', 500, 1000, 'strongEaseOut');
// animate.start( 'top', 1500, 500, 'strongEaseIn' );


// 4. 表单校验
var strategies = {
    isNonEmpty: function(value, errorMsg) { // 不为空
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: function(value, length, errorMsg) { // 限制最小长度
        if (value.length < length) {
            return errorMsg;
        }
    },
    isMobile: function(value, errorMsg) { // 手机号码格式
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
};

// Validator 类
var Validator = function() {
    this.cache = []; // 保存校验规则
};
Validator.prototype.add = function(dom, rule, errorMsg) {
    var ary = rule.split(':'); // 把 strategy 和参数分开
    this.cache.push(function() { // 把校验的步骤用空函数包装起来，并且放入 cache
        var strategy = ary.shift(); // 用户挑选的 strategy
        ary.unshift(dom.value); // 把 input 的 value 添加进参数列表
        ary.push(errorMsg); // 把 errorMsg 添加进参数列表
        return strategies[strategy].apply(dom, ary);
    });
};
Validator.prototype.start = function() {
    for (var i = 0; i < this.cache.length; i++) {
        var msg = this.cache[i](); // 开始校验，并取得校验后的返回信息
        if (msg) { // 如果有确切的返回值，说明校验没有通过
            return msg;
        }
    }
};

// 函数的调用
var validataFunc = function() {
    var validator = new Validator(); // 创建一个 validator 对象
    /***************添加一些校验规则****************/
    validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
    validator.add(registerForm.password, 'minLength:6', '密码长度不能少于 6 位');
    validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');
    var errorMsg = validator.start(); // 获得校验结果
    return errorMsg; // 返回校验结果
};
var registerForm = document.getElementById('registerForm');
registerForm.onsubmit = function() {
    var errorMsg = validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if (errorMsg) {
        alert(errorMsg);
        return false; // 阻止表单提交
    }
};
