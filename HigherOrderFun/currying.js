// 函数柯里化
var curry = function(uncurried) {
    var para = Array.prototype.slice.call(arguments, 1);
    return function() {
        uncrried.apply(this, para.concat(Array.prototype.slice.call(arguments, 0)));
    };
};

var greeter = function(greeting, separator, emphasis, name) {
    console.log(greeting + separator + name + emphasis);
};
var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); //"Hello, Heidi."
greetHello("Eddie"); //"Hello, Eddie."


// Curryig
function curry(fn) {
    var arity = fn.length;

    return (function resolver() {
        var memory = Array.prototype.slice.call(arguments);
        return function() {
            var local = memory.slice(),
                next;
            Array.prototype.push.apply(local, arguments);
            next = local.length >= arity ? fn : resolver;
            return next.apply(null, local);
        };
    }());
}


// Uncurrying
Function.prototype.uncurrying = function () {
  var __self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    return __self.apply(obj, arguments);
  };
};

// OR
Function.prototype.uncurrying = function () {
  var __self = this;
  return function () {
    Function.prototype.apply(__self, arguments);
  };
}