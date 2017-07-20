var each = function(arr, cb) {
    for (var i = 0, len = arr.length; i < len; i++) {
        cb.call(arr[i], i, arr[i]);
    }
};

each([1, 2, 3, 4], function(i, n) {
    console.log([i, n]);
});

// 内部迭代器
var compare = function(ary1, ary2) {
    if (ary1.length !== ary2.length) {
        throw new Error('ary1 和 ary2 不相等');
    }
    each(ary1, function(i, n) {
        if (n !== ary2[i]) {
            throw new Error('ary1 和 ary2 不相等');
        }
    });
    alert('ary1 和 ary2 相等');
};
compare([1, 2, 3], [1, 2, 4]); // throw new Error ( 'ary1 和 ary2 不相等' );

// 外部迭代器
// 必须显式地请求迭代下一个元素
var Iterator = function(obj) {
    var current = 0;
    var next = function() {
        current += 1;
    };
    var isDone = function() {
        return current >= obj.length;
    };
    var getCurrItem = function() {
        return obj[current];
    };
    return {
        next: next,
        isDone: isDone,
        getCurrItem: getCurrItem
    };
};

var compare = function(iterator1, iterator2) {
    while (!iterator1.isDone() && !iterator2.isDone()) {
        if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
            throw new Error('iterator1 和 iterator2 不相等');
        }
        iterator1.next();
        iterator2.next();
    }
    alert('iterator1 和 iterator2 相等');
};
var iterator1 = new Iterator([1, 2, 3]);
var iterator2 = new Iterator([1, 2, 3]);
compare(iterator1, iterator2);
