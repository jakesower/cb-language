const assertEqual = require('./lib/assert-equal');

/**
 * Closures are a key concept in JavaScript. They are about scope in nature,
 * specifically with variables that drop out of scope sticking around when used
 * in an inner scope. Examples are a more effective way of understanding than
 * technical definitions.
 */

/**
 * Example 1: Partially Applied Add
 * In this example we have a function returning another function. The variable
 * `n` is lexically enclosed within the `innerAdd` function. When `addN` is
 * called, the inner function is returned. At this point, `n` leaves scope
 * since it was an argument passed into the `addN` and that function has left
 * the stack.
 *
 * However, since it is used in `innerAdd` it doesn't actually go out of scope.
 * The inner function "closes around" used variables from the outer scope,
 * hence the term "closure".
 */

function addN(n) {
  return function innerAdd(m) { // typically anonymous
    return m + n;
  }
}

assertEqual(
  addN(5)(7), // make sure you understand this form!
  12
);


/**
 * Example 2: Getter/Setter
 * In this example, have have two functions that close over the same value. The
 * key point is that the functions are closing over the same variable. The
 * reference is the same, and not just the value at the time when the functions
 * are created.
 */

function makeGetterSetter(initValue) {
  let value = initValue;

  function get() {
    return value;
  }

  function set(newValue) {
    value = newValue;
  }

  return {
    get: get,
    set: set,
  };
}

const gs1 = makeGetterSetter(1);
const gs2 = makeGetterSetter(2);

assertEqual(
  gs1.get(),
  1
);

assertEqual(
  gs2.get(),
  2
);

gs1.set(5);

assertEqual(
  gs1.get(),
  5
);

assertEqual(
  gs2.get(),
  2
);

// This is functionally identical to `makeGetterSetter`. I put it here to show
// how terse JavaScript can be about such structures.
function terseGetterSetter(value) {
  return {
    get: () => value,
    set: function (newValue) { value = newValue; }
  };
}

const gs3 = terseGetterSetter(4);

assertEqual(
  gs3.get(),
  4
);

gs3.set(5);

assertEqual(
  gs3.get(),
  5
);
