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
