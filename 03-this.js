const assertEqual = require('./lib/assert-equal');

/**
 * `this` is the context variable in JavaScript. It behaves similarly to the
 * way it does in other object oriented languages. I consider it a four letter
 * word in JavaScript, mainly because it's so quirky. It's bad enough on the
 * back end, but the front end is where it really gets nasty.
 *
 * Pretty much all the material presented in the class eschews `this`, but it's
 * worth exploring exactly why it's so bad.
 *
 * We'll cover the `new` keyword while we're at it.
 */

// When called using the `new` keyword, the function implicitly returns `this`.
// The capitalized function name is conventional and has no actual effect.
function Chinchilla(name, color, cutenessLevel) {
  this.name = name;
  this.color = color;
  this.cutenessLevel = 10; // forget what anyone else says
}

Chinchilla.prototype.getName = function () {
  return this.name;
}

const trent = new Chinchilla('Trent', 'gray', 9);

assertEqual(trent.getName(), 'Trent');
assertEqual(trent.color, 'gray');
assertEqual(trent.cutenessLevel, 10);


// Here's where things get ugly

assertEqual(
  trent.getName.call({ name: 'Tofy' }),
  'Tofy'
);

// I just reached into the `getName` method and set `this` externally! Good
// luck trying to debug that. While this might seem like an edge case, the
// browser environment is notorious for `this` surprises. I guarantee that if
// you use `this` extensively, it will bite you (just as it has bitten me).

// Also, it works differently for arrow functions and function () declarations.
