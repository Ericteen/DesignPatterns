/**
 * Singleton
 * @Author Cheng_Guanghui
 * @Date   2017-07-17T16:36:24+0800
 * @description 重写构造函数
 */
function Universe() {
  var instance;
  var Universe = function () {
    return instance;
  };

  Universe.prototype = this;
  instance = new Universe();
  instance.constructor = Universe;

  instance.start_time = 0;
  instance.bang = 'big';
  return instance;
}

// 修改原型，创建对象
Universe.prototype.nothing = true; // true
var uni = new Universe();
Universe.prototype.everything = true; // true
var uni2 = new Universe();

// 它们是同一个实例
uni === uni2; // true

// 所有的原型上的属性都正常工作，不管是什么时候在哪添加的
uni.nothing && uni.everything && uni2.nothing && uni2.everything; // true
// 普通成员也可以正常工作
uni.bang; // "Big"
// constructor指向正确
uni.constructor === Universe; // true