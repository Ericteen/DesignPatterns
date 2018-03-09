var myNamespace = (function () {
  var myPriveteVar, myPrivateMethod;
  myPriveteVar = 0
  myPrivateMethod = function (foo) {
    console.log(foo)
  }
  return {
    myPublicVar: 'foo',
    myPublicFunction: function (bar) {
      myPrivateVar++
      myPrivateMethod(bar)
    }
  }
})()