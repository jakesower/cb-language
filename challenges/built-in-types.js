const assertEqual = require('../lib/assert-equal');

/**
 * These challenges go over some useful built in functions concerning arrays
 * and objects.
 */

/**
 * Example 1: Arrays
 *
 * Arrays are exactly what you'd expect from other languages. They can be used
 * to represent lists, tuples, and various other constructs as well.
 */

const emptyArray = [];
const oneTwoThree = [1, 2, 3];
const heterogenous = [1, "Oh hai", function (x, y) { return x + y; }];

// Iteration

for (let i = 0, l = oneTwoThree.length; i < l; i += 1) {
  console.log(oneTwoThree[i]);
}

// Note the use of `of` and not `in`. The latter will not behave as you expect
// it to and will cause headache.
for (elt of oneTwoThree) {
  console.log(elt);
}

// Destructuring

const [one, two, three] = oneTwoThree;
assertEqual(one, 1);

const [uno, ...resto] = oneTwoThree;
assertEqual(uno, 1);
assertEqual(resto, [2, 3]);

/**
 * Challenge 1: Double Array
 *
 * Write a function that takes an array and returns another array with all of
 * the elements of the first duplicated. Consider using the `push` or the
 * `concat` method on arrays.
 */

function doubleElements(ary) {

}

assertEqual(
  doubleElements(oneTwoThree),
  [1, 1, 2, 2, 3, 3],
  'Double Elements 1'
);

assertEqual(
  doubleElements(emptyArray),
  [],
  'Double Elements 2'
);

/**
 * Example 2: Objects
 *
 * Objects are key/value stores in JavaScript. Furthermore, they have
 * prototypes, which means that they can inherit from other objects. In this
 * class, we'll use them as simple key/value stores. I may refer to them as
 * "POJOs" (plain old JavaScript objects), "String Maps", or "Dictionaries",
 * any of which may sound more familiar depending on your background.
 */

const simpleObject = {
  a: 1,
  b: 2
};

assertEqual(simpleObject.a, 1);
assertEqual(simpleObject['b'], 2);

// Objects can hold mixed types, including functions
const anotherObject = {
  b: 5,
  c: 'hello',
  d: function (x, y) { return x * y; }
};

// Destructuring / Constructing
const destructuringFunc = function ({ a }) {
  const c = a + 5;
  return { c };
}

assertEqual(destructuringFunc(simpleObject), { c: 6 });

// Object can be merged together using `Object.assign`
const mergedObject = Object.assign({}, simpleObject, anotherObject);

assertEqual(mergedObject.a, 1);
assertEqual(mergedObject.b, 5);
assertEqual(mergedObject.d(5, 6), 30); // note the invocation of the function

// Converting objects to arrays
// IMPORTANT NOTE: The order of these arrays is not guaranteed to be the same
// across different JS implementations, so don't depend on it!
Object.keys(simpleObject); // could return ['a', 'b'] or ['b', 'a']
Object.values(simpleObject); // likewise could return [1, 2] or [2, 1]

// Function to deal with this limitation
function sortedKeys(ary) {
  return ary.slice(0).sort(); // slice(0) clones the array
}


/**
 * Challenge 2: Making Pairs
 *
 * Write a function that turns an object into an array of arrays, with each
 * inner array representing a key/value pair. See the tests for examples.
 */

function toPairs(obj) {
  // use `sortedKeys` in here
}

assertEqual(
  toPairs(simpleObject),
  [['a', 1], ['b', 2]],
  'Pairs 1'
);

const increment = function (x) { return x + 1; };
const pairsObj2 = {
  'odd:': 1,
  'other-thing': 4,
  increment
}

assertEqual(
  toPairs(pairsObj2),
  [['increment', increment], ['odd:', 1], ['other-thing', 4]],
  'Pairs 2'
);
