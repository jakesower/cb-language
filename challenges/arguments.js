const assertEqual = require('../lib/assert-equal');

/**
 * `arguments` is a special variable passed into the body of each function as
 * it is executed. It is seldom used in day-to-day programming, but it is a key
 * idea in understanding how some specialized functions work. There will be
 * concrete examples of why these are useful in the next lesson.
 */

/**
 * Example 1: Ways to Call A Function
 * JavaScript has four ways to call a function:
 * 1. Simple invocation
 * 2. With the `new` keyword (we'll ignore this one for now)
 * 3. With the `call` method
 * 4. With the `apply` method
 */

function add(x, y) {
  return x + y;
}

assertEqual(
  add(9, 7),
  16
);

assertEqual(
  // the first argument is what is to be bound to `this` within the function;
  // since `add` doesn't use `this` we'll just pass in `null`. subsequent
  // arguments are passed in order to the function
  add.call(null, 9, 7),
  16
);

assertEqual(
  // same as with call, but all the arguments are passed at once via an array
  add.apply(null, [9, 7]),
  16
);

/**
 * Example 2: Reading Arguments
 * JavaScript functions really are strange things. They can be invoked with
 * pretty much anything or nothing. As stated above, doing things like this
 * should be a rare thing.
 */

function argumentAdd(...args) {
  // coerce the strange argument beast into a simple array
  const x = args[0] || 0;
  const y = args[1] || 0;
  return x + y;
}

assertEqual(
  argumentAdd(8, 3),
  11
);

assertEqual(
  argumentAdd(),
  0
);

assertEqual(
  argumentAdd(2),
  2
);

assertEqual(
  argumentAdd(5, 6, 7, 9, 'boy howdy!'),
  11
);


/**
 * Challenge: Argument Counting
 * Write a function that returns the number of arguments passed to it.
 */

function numArguments(...args) {
  return args.length;
}

assertEqual(numArguments(), 0, 'Num Arguments 1');
assertEqual(numArguments(3, 4, 5), 3, 'Num Arguments 2');
