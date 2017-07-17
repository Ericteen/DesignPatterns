/* lib/module.js */
const shoppingList = new WeakMap();

/**
 * Module Pattern
 */
class AbstractDataType {
  constructor() {
    // woo! our Class is instantiated lets add some private properties.
    shoppingList.set(this, ['coffee', 'chicken', 'pizza'])
  }

  // Lets create a public prototype method to access our private `shoppingList`
  getShoppingList() {
    return shoppingList.get(this);
  }

  addItem(item) {
    shoppingList.get(this).push(item);
  }
}

// Now we export our `Class` which will become an importable module.
export default AbstractDataType;