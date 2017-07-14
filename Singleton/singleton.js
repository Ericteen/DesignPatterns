/**
 * Singleton
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T16:34:20+0800
 * @description 单例模式的实现
 */
var mySingleton = (function () {
  var instance;

  function init() {
    function privateMethod() {
      console.log("I am private.");
    }

    var privateVariable= 'I am also private.';

    var privateRandomNum = Math.random();

    return {
      publicMethod: function () {
        console.log('The public can see me.');
      },

      publicProperty: 'I am also public.',

      getRandomNum: function () {
        return privateRandomNum;
      }
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNum() === singleB.getRandomNum() ); // true