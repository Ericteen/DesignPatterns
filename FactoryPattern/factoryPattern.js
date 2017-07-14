 var AbstractVehicleFactory = (function () {

    // Storage for our vehicle types
    var types = {};

    return {
        getVehicle: function ( type, customizations ) {
            var Vehicle = types[type];

            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function ( type, Vehicle ) {
            var proto = Vehicle.prototype;

            // only register classes that fulfill the vehicle contract
            if ( proto.drive && proto.breakDown ) {
                types[type] = Vehicle;
            }

            return AbstractVehicleFactory;
        }
    };
})();


// Usage: 

AbstractVehicleFactory.registerVehicle( "car", Car );
AbstractVehicleFactory.registerVehicle( "truck", Truck );

// Instantiate a new car based on the abstract vehicle type
var car = AbstractVehicleFactory.getVehicle( "car" , { 
            color: "lime green", 
            state: "like new" } );

// Instantiate a new truck in a similar manner
var truck = AbstractVehicleFactory.getVehicle( "truck" , { 
            wheelSize: "medium", 
            color: "neon yellow" } );