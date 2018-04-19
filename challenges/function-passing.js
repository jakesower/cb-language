const assertEqual = require('../lib/assert-equal');

/**
 * The definition of functions and their invocations are separate things. These
 * challenges will help cement this concept, since it can be tricky to grasp
 * for those coming from some languages.
 */

/**
 * Example 1: Bomb-O-Matic
 * Here we define a bomb function. It will throw an exception when called.
 * Let's see how many things we can do with it without actually calling it.
 * This bomb function will be used in multiple exercises as well.
 */

function bomb() {
  throw 'boom!';
}

// Uncomment this to see what will happen if it's called:
// bomb();

let bombOMaticCalled = false;

function bombOMatic() {
  bombOMaticCalled = true;
  return bomb;
}

const genBomb = bombOMatic();
assertEqual(genBomb, bomb);
assertEqual(bombOMaticCalled, true);

/**
 * Challenge 1: Bomb Juggling
 * Write a function that takes in a number and returns a list of bombs. The
 * length of the returned list should be the number passed in.
 */

function bombJuggler(numBombs) {

}

assertEqual(bombJuggler(1), [bomb], 'Bomb Juggler 1');
assertEqual(bombJuggler(3), [bomb, bomb, bomb], 'Bomb Juggler 2');


/**
 * Challenge 2: Box
 * Create a function that returns functions that satisfy the tests. This will
 * look similar to the getter/setter function we went over.
 */

function makeBox() {

}

const box = makeBox();
assertEqual(box.isEmpty(), true, 'Make Box 1');
box.addItem(bomb);
assertEqual(box.isEmpty(), false, 'Make Box 2');
assertEqual(box.getContents(), bomb, 'Make Box 3');

/**
 * Challenge 3: Bomb Disposal
 * Create a function that safely calls a bomb function. This will use a
 * try/catch structure.
 */

let bombCalled = false;
function disposableBomb() {
  bombCalled = true;
  throw 'boom!';
}

function disposeBomb(bomb) {

}

assertEqual(bombCalled, false, 'Dispose Bomb 1');
disposeBomb(disposableBomb);
assertEqual(bombCalled, true, 'Dispose Bomb 2');


/**
 * Challenge 4: Calculator Functions
 * Create an object with some useful mathematical functions. The object will be
 * considered to be complete when the tests pass.
 */

// Fill this object in. I strongly encourage you to use the following forms for
// at least one function definition each (see the 01-functions file):
//
// Standard: function myName() { ... }
// Anonymous: function () { ... }
// Arrow: arg => ...
// Arrow with 2+ Arguments: (arg1, arg2) => ...
const calculatorUtils = {

};

assertEqual(
  calculatorUtils.add(3, 6),
  9,
  'Calculator Utils 1'
);

assertEqual(
  calculatorUtils.subtract(3, 6),
  -3,
  'Calculator Utils 2'
);

assertEqual(
  calculatorUtils.multiply(3, 6),
  18,
  'Calculator Utils 3'
);

assertEqual(
  calculatorUtils.negate(4),
  -4,
  'Calculator Utils 4'
);

assertEqual(
  calculatorUtils.negate(-3),
  3,
  'Calculator Utils 5'
);

assertEqual(
  calculatorUtils.absoluteValue(-3),
  3,
  'Calculator Utils 6'
);

assertEqual(
  calculatorUtils.absoluteValue(4),
  4,
  'Calculator Utils 7'
);

// `mod` refers to modular arithmetic. `mod(12, 5)` is the remainder when 12 is
// divided by 5. Technically speaking, "12 is congruent to (what?) mod 5". It
// should return a result between 0 and the second argument minus 1.
// Also: Handling invalid cases is not required for this exercise.
assertEqual(
  calculatorUtils.mod(12, 5),
  2,
  'Calculator Utils 8'
);

assertEqual(
  calculatorUtils.mod(12, 12),
  0,
  'Calculator Utils 9'
);

assertEqual(
  calculatorUtils.mod(-2, 5),
  3,
  'Calculator Utils 10'
);


/**
 * Challenge 5 (Optional): IIFE
 * Implement calculator inside an IIFE. This is not a normal application for an
 * IIFE, but it's not entirely inappropriate either. This challenge should be
 * seen as entirely optional. IIFE's are described in 01-functions.js.
 */
