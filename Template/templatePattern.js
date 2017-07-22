/**
 * Template Pattern
 * @Author Cheng_Guanghui
 * @Date   2017-07-21T22:09:42+0800
 */
var Beverage = function() {};
Beverage.prototype.boilWater = function() {
    console.log('把水煮沸');
};
Beverage.prototype.brew = function() {}; // 空方法，应该由子类重写
Beverage.prototype.pourInCup = function() {}; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function() {}; // 空方法，应该由子类重写
Beverage.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
};

var Coffee = function () {
  // body...
};

Coffee.prototype = new Beverage();
Coffee.prototype = {
  brew: function () {
    conosle.log('用沸水冲泡咖啡');
  },

  pourInCup: function () {
    console.log('把咖啡倒进了杯子');
  },

  addCondiments: function () {
    console.log('加糖和牛奶');
  }
};

var coffee = new Coffee();
coffee.init();