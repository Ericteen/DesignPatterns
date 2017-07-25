/**
 * Constructor Pattern
 */
class Car {
  constructor (opts) {
    this.model = opts.model
    this.year = opts.year
    this.miles = opts.miles    
  }

  toString () {
    return `${this.model} has driven ${this.miles}.`
  }
}

var civic = new Car({
  model: 'Honda',
  year: '2013',
  miles: 5000
})


/**
 * ES 5
 */
function Car() {
  this.model = opts.model
  //...
}

Car.prototype.toString = function () {
  // body...
}