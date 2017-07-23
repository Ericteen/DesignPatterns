/**
 * 职责链模式
 * @Author Cheng_Guanghui
 * @Date   2017-07-22T22:32:34+0800
 */
var order500 = function(orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购，得到 100 优惠券');
    } else {
        return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
    }
};
var order200 = function(orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购，得到 50 优惠券');
    } else {
        return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
    }
};
var orderNormal = function(orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券');
    } else {
        console.log('手机库存不足');
    }
};


var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
};

Chain.prototype = {
  setNextSuccessor: function (successor) {
    this.successor = successor;
  },

  passRequest: function () {
    var ret = this.fn.apply(this, arguments);

    if (ret === 'nextSuccessor') {
      return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }

    return ret;
  }
};

// 把 3 个订单函数分别包装成职责链的节点
var chainOrder500 = new Chain( order500 );
var chainOrder200 = new Chain( order200 );
var chainOrderNormal = new Chain( orderNormal );

chainOrder500.setNextSuccessor( chainOrder200 );
chainOrder200.setNextSuccessor( chainOrderNormal );

chainOrder500.passRequest( 1, true, 500 ); // 输出： 500 元定金预购，得到 100 优惠券
chainOrder500.passRequest( 2, true, 500 ); // 输出： 200 元定金预购，得到 50 优惠券
chainOrder500.passRequest( 3, true, 500 ); // 输出：普通购买，无优惠券
chainOrder500.passRequest( 1, false, 0 ); // 输出：手机库存不足


/**
 * 用 AOP 实现职责链模式
 */

Function.prototype.after = function (fn) {
  var __self = this;
  return function () {
    var ret = __self.apply(this, arguments);
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments);
    }
    return ret;
  };
};

var order = order500yuan.after( order200yuan ).after( orderNormal );
order( 1, true, 500 ); // 输出： 500 元定金预购，得到 100 优惠券
order( 2, true, 500 ); // 输出： 200 元定金预购，得到 50 优惠券
order( 1, false, 500 ); // 输出：普通购买，无优惠券