import Interface from './INTERFACE.js'

var Macbook = new Interface( "Macbook",
  ["addEngraving",
  "addParallels",
  "add4GBRam",
  "add8GBRam",
  "addCase"]);
 
// A Macbook Pro might thus be represented as follows:
var MacbookPro = function(){
    // implements Macbook
};
 
MacbookPro.prototype = {
    addEngraving: function(){
    },
    addParallels: function(){
    },
    add4GBRam: function(){
    },
    add8GBRam:function(){
    },
    addCase: function(){
    },
    getPrice: function(){
      // Base price
      return 900.00;
    }
};

// Macbook decorator abstract decorator class
 
var MacbookDecorator = function( macbook ){
 
    Interface.ensureImplements( macbook, Macbook );
    this.macbook = macbook;
 
};
 
MacbookDecorator.prototype = {
    addEngraving: function(){
        return this.macbook.addEngraving();
    },
    addParallels: function(){
        return this.macbook.addParallels();
    },
    add4GBRam: function(){
        return this.macbook.add4GBRam();
    },
    add8GBRam:function(){
        return this.macbook.add8GBRam();
    },
    addCase: function(){
        return this.macbook.addCase();
    },
    getPrice: function(){
        return this.macbook.getPrice();
    }
};

// First, define a way to extend an object a
// with the properties in object b. We'll use
// this shortly!
function extend( a, b ){
    for( var key in b )
        if( b.hasOwnProperty(key) )
            a[key] = b[key];
    return a;
}
 
var CaseDecorator = function( macbook ){
   this.macbook = macbook;
};
 
// Let's now extend (decorate) the CaseDecorator
// with a MacbookDecorator
extend( CaseDecorator, MacbookDecorator );
 
CaseDecorator.prototype.addCase = function(){
    return this.macbook.addCase() + "Adding case to macbook";
};
 
CaseDecorator.prototype.getPrice = function(){
    return this.macbook.getPrice() + 45.00;
};

// Instantiation of the macbook
var myMacbookPro = new MacbookPro();
 
// Outputs: 900.00
console.log( myMacbookPro.getPrice() );
 
// Decorate the macbook
var decoratedMacbookPro = new CaseDecorator( myMacbookPro );
 
// This will return 945.00
console.log( decoratedMacbookPro.getPrice() );