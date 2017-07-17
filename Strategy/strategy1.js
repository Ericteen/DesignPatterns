/**
 * Strategy Pattern
 * @description 完整的策略模式分为环境类和策略类， 环境类接收请求， 委托给策略类进行处理
 */
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

FormValidation.prototype.start = function () {
  for ( var i = 0;; i++) {
    var msg = this.validationFns[i]();
    if (msg) {
      return msg;
    }
  }
};

// 获取表单form元素
var form = document.getElementById('f1');

// 创建表单校验实例
var validation = new Formvalidation(VerifiPolicy);
// 编写校验配置
validation.add(form.username, 'isNoEmpty', '用户名不能为空');
validation.add(form.password, 'minLength: 6', '密码长度不能小于6个字符');
validation.add(form.code, 'isMobile', '请填写正确的手机号');

// 开始校验，并接收错误信息
var errorMsg = validation.start();

// 如果有错误信息输出，说明校验未通过
if(errorMsg){
  // 做一些其他的事
  return false;
}