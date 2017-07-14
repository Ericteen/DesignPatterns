/**
 * 门面是一种经常可以在Javascript库中看到的结构性模式，像在jQuery中，
 * 尽管一种实现可能支持带有广泛行为的方法，但仅仅只有这些方法的“门面”或者说被限制住的抽象才会公开展现出来供人们所使用
 */

var addMyEvent = function( el,event,fn ){

   if( el.addEventListener ){
            el.addEventListener( event,fn, false );
      }else if(el.attachEvent){
            el.attachEvent( "on" + event, fn );
      } else{
           el["on" + event] = fn;
    }

};


var module = (function() {

    var _private = {
        i:5,
        get : function() {
            console.log( "current value:" + this.i);
        },
        set : function( val ) {
            this.i = val;
        },
        run : function() {
            console.log( "running" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };

    return {

        facade : function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    };
}());
 
 
// Outputs: "current value: 10" and "running"
module.facade( {run: true, val:10} );