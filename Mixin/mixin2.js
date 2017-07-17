/**
 * Mixin
 * @Author Cheng_Guanghui
 * @Date   2017-07-17T18:31:36+0800
 * @description 混入， 将多个对象混入为同一个对象
 */
function mix() {
    var arg, len, prop, child = {};

    for (arg = 0, len = arguments.length; arg < len; arg++) {
        for (prop in arguments[arg]) {
            if (arguments[arg].hasOwnProperty(prop)) {
                child[prop] = arguments[arg][prop];
            }
        }
    }

    return child;
}

var cake = mix({ eggs: 2, large: true }, { butter: 1, salted: true }, { flour: '3 cups' }, { sugar: 'sure!' });
console.dir(cake);
