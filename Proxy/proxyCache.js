var mult = function () {
  var a = 1;
  for (var i = 0, len = arguments.length; i < len; i++) {
    a = a* arguments[i];
  }
  return a;
};

var plus = function () {
  var a = 0;
  for (var i = 0, len = arguments.length; i < len; i++) {
    a = a + arguments[i];
  }
  return a;
};

var proxy = function (fn) {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    cache[args] = fn.apply(this, arguments);
    return cache[args];
  };
};

var proxyMult = proxy(mult);
var proxyPlus = proxy(plus);

console.log(proxyMult(1, 2, 3, 4));
console.log(proxyMult(1, 2, 3, 4));
console.log(proxyPlus(1, 2, 3, 4));
console.log(proxyPlus(1, 2, 3, 4));