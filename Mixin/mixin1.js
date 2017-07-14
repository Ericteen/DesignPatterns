var Car = function (settings) {
  this.model = settings.model || 'no model provided';
  this.color = settings.color || 'no color provided';
};


var Mixin = function () {
  // body...
};

Mixin.prototype = {
  driveForward: function () {
    console.log('Drive forward.');
  },

  backForward: function () {
    console.log('Drive backward.');
  },

  driveSideways: function () {
    console.log('Drive sideways.');
  }
};

function augment(receive, give) {
  if (arguments[2]) {
    for (var i = 0, len = arguments.length; i < len; i++) {
      receive.prototype[arguments[i]] = give.prototype[arguments[i]];
    }
  } else {
    for (var methodName in give.prototype) {
      if (!Object.hasOwnProperty.call(receive.prototype, methodName)) {
        receive.prototype[methodName] = give.prototype[methodName];
      }
    }
  }
}

augment( Car, Mixin, "driveForward", "driveBackward" );

var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});

myCar.driveForward();
myCar.driveBackward();

augment( Car, Mixin );

var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideways();