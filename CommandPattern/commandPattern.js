/**
 * CommandPattern
 * @Author Cheng_Guanghui
 * @Date   2017-07-14T16:49:38+0800
 * @description 命名模式的目标是将方法的调用,请求或者操作封装到一个单独的对象中,给我们酌情执行同时参数化和传递方法调用的能力
 */
(function() {

    var CarManager = {

        // request information
        requestInfo: function(model, id) {
            return "The information for " + model + " with ID " + id + " is foobar";
        },

        // purchase the car
        buyVehicle: function(model, id) {
            return "You have successfully purchased Item " + id + ", a " + model;
        },

        // arrange a viewing
        arrangeViewing: function(model, id) {
            return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
        }
    };
})();

CarManager.execute = function(name) {
            return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
        };

CarManager.execute( "arrangeViewing", "Ferrari", "14523" );
CarManager.execute( "requestInfo", "Ford Mondeo", "54323" );
CarManager.execute( "requestInfo", "Ford Escort", "34232" );
CarManager.execute( "buyVehicle", "Ford Escort", "34232" );