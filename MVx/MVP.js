/**
 * MVP
 * Presenter除了作为M和V的中间者，还有大量的代码需要对从V到M和从M到V的手动同步
 * Presenter变得过重，难以维护。一旦V的需求发生改变，P也需要改变。
 */
var myapp = {}

myapp.Model = function () {
  var val = 0
  this.add = function (v) {
    if (val < 100) {
      val += v
    }
    return val
  }

  this.sub = function (v) {
    if (v > 0) {
      val -= v
    }
    return val
  }

  this.getVal = function () {
    return val
  }
}

myapp.View = function () {
  var num = document.querySelector('#num')
  var incBtn = document.querySelector('#increase')
  var decBtn = document.querySelector('#decrease')

  this.render = function (model) {
    num.textContent = model.getVal + 'rmb'
  }

  this.init = function () {
    var presenter = new myapp.Presenter(this)
    incBtn.addEventListener('click', presenter.increase, false)
    decBtn.addEventListener('click', presenter.decrease, false)
  }
}

myapp.Presenter = function (view) {
  var _model = new myapp.Model()
  var _view = view

  _view.render(_model)

  this.increase = function () {
    _model.add(1)
    _view.render(_model)
  }

  this.decrease = function () {
    _model.sub(1)
    _view.render(_model)
  }
}

// 运行程序时以View为入口
;
(function () {
  var view = new myapp.View()
  view.init()
})()
