/**
 * State Pattern
 * @description 首先定义一个 Light 类(Context)，然后在 Light 类的构造函数
 * 中， 创建每一个状态类的实例对象， Context 将持有这些状态对象的引用，以便把请求
 * 委托给状态对象
 */
var OffLightState = function (light) {
  this.light = light;
};

OffLightState.prototype.buttonWasPressed = function () {
  console.log('弱光');
  this.light.setState(this.light.weakLightState);
};

var WeakLightState = function (light) {
  this.light = light;
};

WeakLightState.prototype.buttonWasPressed = function () {
  console.log('强光');
  this.light.setState(this.light.strongLightState);
};

var StrongLightState = function (light) {
  this.light = light;
};

StrongLightState.prototype.buttonWasPressed = function () {
  console.log('关灯');
  this.light.setState(this.light.offLightState);
};


var Light = function () {
  this.offLightState = new OffLightState(this); // 持有对状态对象的引用
  this.strongLightState = new StrongLightState(this);
  this.weakLightState = new WeakLightState(this);
  this.button = null;
};

Light.prototype.init = function () {
  var button = document.createElement('button'), self = this;
  this.button = document.body.appendChild(button);
  this.button.innerHTML = '开关';

  this.currentState = this.offLightState;
  this.button.onClick = function () {
    self.currentState.buttonWasPressed();
  };
};

Light.prototype.setState = function (newState) {
  this.currentState = newState;
};

var light = new Light();
light.init();


// 为防止编写状态子类时少写特定的方法，追加一个父类
var State = function () {
  // body...
};

State.prototype.buttonWasPressed = function () {
  throw new Error('父类的 buttonWasPressed 方法必须重写');
};

var SuperLightState = function (light) {
  this.light = light;
};

SuperLightState.prototype = new State();

SuperLightState.prototype.buttonWasPressed = function () {
  console.log('关灯');
  this.light.setState(this.light.offLightState);
};
