/**
 * @description 使用闭包的方式创建
 */
var Universe;
(function Universe() {
  var instance;
  Universe = function () {
    if (instance) {
      return instance;
    }
    instance = this;
    this.start_time = 0;
    thid.bang = 'big';
  };
})();