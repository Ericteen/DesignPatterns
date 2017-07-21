// 单一职责原则在迭代模式中的应用
var each = function (obj , cb) {
  var i, len = obj.length;
  if (Array.isArray(obj)) {
    for (i = 0; i < len; i++) {
      cb.call(obj[i], i, obj[i]);
    }
  } else {
    for (i in obj) {
      cb.call(obj[i], i, obj[i]);
    }
  }
  return obj;
};

var appendDiv = function (data) {
  each(data, function (i, n) {
    var div =  document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
  });
};

// 易于扩展
appendDiv([1, 2, 3, 4, 5, 6]);
appendDiv({a: 1, b: 2, c: 3, d: 4});