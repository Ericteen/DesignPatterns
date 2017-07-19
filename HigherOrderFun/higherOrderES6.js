const curry = f => a => b => f(a, b);
const uncurry = f => (a, b) => f(a, b);
const papply = (f, a) => b => f(a, b);

// test 
const add = (a, b) => a + b;
const curriedAdd = a => b => a + b;

add(5, 6); // 11
curriedAdd(5)(6); // 11

uncurry(curry(add))(5, 6); // 11
curry(uncurry(curriedAdd))(5)(6); // 11