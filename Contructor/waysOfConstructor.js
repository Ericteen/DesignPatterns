/**
 * Object creation
 * @description 创建新对象的三种方式
 */
var nweObj = new Object()
var newObj = Object.create(Object.prototype)
var newObj = {}

/**
 * @description 属性赋值的三种方式
 */
// 1. 点操作
nweObj.somekey = 'Hello world'
var value = newObj.somekey

// 2. 方括号操作
newObj["someKey"] = "Hello World"
var value = newObject["someKey"]

// 3. Object.defineProperty
Object.defineProperty(newObj, 'someKey', {
  value: 'Hello world',
  writable: true,
  enumerable: true,
  configurable: true
})
// 或者定义一个函数
var defineProp = function (obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumberable: true,
    configurable: true
  }
  Object.defineProperty(obj, key, config)
}

var person = Object.create(Object.prototype)
defineProp(person, 'car', 'Toyota')

// 4. Object.defineProperties
Object.defineProperties(newObj, {
  someKey: {
    value: 'Hello world',
    writable: false,
  },
  anotherKey: {
    value: 'foo bar',
    writable: true,
  }
})