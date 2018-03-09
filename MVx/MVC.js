/**
 * MVC
 * MVC的业务逻辑主要集中在Controller, 而View层已具备了独立处理用户事件的能力
 * 当每个事件都流经Controller时, 这一层会变得臃肿。
 * 而且View和Controller是一一对应的，这种紧耦合使Controller的复用成为问题。
 * 
 */
var myapp = {}

// 作为Model层
myapp.Model = function () {
  var val = 0

  this.add = function (v) {
    if (val < 100) {
      val += v
      return val
    }
  }

  this.sub = function (v) {
    if (val > 0) {
      val -= v
      return val
    }
  }

  this.getVal = function () {
    return val
  }

  // 观察者模式
  var self = this
  var views = []

  this.register = function (view) {
    views.push(view)
  }

  this.notify = function () {
    for (var i = 0, len = views.length; i < len; i++) {
      views[i].render(self)
    }
  }
}

// 作为View层
myapp.View = function (controller) {
  var num = document.querySelector('#increase')
  var incBtn = document.querySelector('#increase')
  var decBtn = document.querySelector('#decrease')

  this.render = function (model) {
    num.textContent = model.getVal() + 'rmb'
  }

  incBtn.addEventListener('click', controller.increase, false)
  decBtn.addEventListener('click', controller.decrease, false)
}

// Controller
myapp.Controller = function () {
  var model = null
  var view = null

  this.init = function () {
    model = new myapp.Model()
    view = new myapp.View(this)

    model.register(view)
    model.notify()
  }

  this.increase = function () {
    model.add(1)
    model.notify()
  }

  this.decrease = function () {
    model.sub(1)
    model.notify()
  }
}

// 运行时以Controller为入口
;
(function () {
  var controller = new myapp.Controller()
  controller.init()
})()
