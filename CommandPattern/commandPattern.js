/**
 * CommandPattern
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T16:49:38+0800
 * @description 命名模式的目标是将方法的调用,请求或者操作封装到一个单独的对象中,给我们酌情执行同时参数化和传递方法调用的能力
 */
(function() {
    var CarManager = {
        /* request information */
        requestInfo: function(model, id) {
            return 'The purchase info for ' + model + ' with ID ' + id + ' is being processed...';
        },
        /* purchase the car */
        buyVehicle: function(model, id) {
            return 'You have successfully purchased Item ' + id + ', a ' + model + '.';
        }
    };
    CarManager.execute = function(commad) {
        return CarManager[commad.request](commad.model, commad.carID);
    };
    var actionA = CarManager.execute({ request: 'requestInfo', model: 'Ford Mondeo', carID: '543434' });
    console.log(actionA);
    var actionB = CarManager.execute({ request: 'buyVehicle', model: 'Ford Mondeo', carID: '543434' });
    console.log(actionB);
})();
