// Basic object
var Book = {
    name: 'great book'
  , pages: 145
  }

// Decoration function
function decorate(obj, decoration) {
  var objNew = Object.create(obj)
  for(i in decoration){
    objNew[i] = decoration[i]
  }
  return objNew
}

// Let's decorate
var BookNew = decorate(Book, {
  getHeading: function(){
    return 'title: ' + this.name + '; pages: ' + this.pages
  }
, isItBig: function(){
    return this.pages > 500
  }
})

console.log(BookNew.getHeading()) // title: great book; pages: 145
console.log(BookNew.isItBig()) // false