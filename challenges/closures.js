const assertEqual = require('../lib/assert-equal');

/**
 * These challenges go over the basics of closures. The concepts will be
 * developed much more in future lessons.
 *
 * These challenges are difficult.
 */

/**
 * Challenge 1: A Button Calculator
 * Create a calculator that transitions from forms depending on key presses.
 * The calculator has buttons for each digit as well as +, -, *, and =. For
 * simplicity's sake we won't bother with division.
 *
 * The calculator's state is a string that contains the number on the screen.
 *
 * The first step is to create a function that handles the input of numbers,
 * without worrying about operations.
 */

function noOperationCalc() {
  let number = '0';

  // key is a digit for this version
  // hint: use concat to append string characters
  function press(key) {

  }

  function screen() {

  }

  // ES6 Shorthand. It's the same as:
  // return {
  //   press: press,
  //   screen: screen
  // }
  return { press, screen };
}

function challenge1() {
  let calc = noOperationCalc();
  assertEqual(calc.screen(), '0', 'Noop 1');
  calc.press('3');
  assertEqual(calc.screen(), '3', 'Noop 2');
  calc.press('4');
  assertEqual(calc.screen(), '34', 'Noop 3');
}

challenge1();


/**
 * Challenge 2: Add Operations
 * When an operation key is pressed, the calculator should behave like a real
 * one. That is, there should be a stored operand, an operation, and a new
 * operand that is the same as the screen. Once again, the tests should make
 * the desired behavior clear. I implemented some of the more tedious parts of
 * the function, but review them to ensure you understand what's going on.
 *
 * Hint: parseInt() is your friend for making sure JavaScript treats numbers
 * like numbers.
 */

function calculator() {
  // These variables were sufficient for me to solve the challenge, but you can
  // use whatever you want.
  let operand = 0;
  let operation = '=';
  let number = '0';
  let inputting = true;


  /** IMPLEMENT BELOW! *******************************************************/
  const operations = {
    // implement this if you wish; see challenge 4 in `function-passing`
  };

  function digitPress(key) {
    // implement this
  }

  function operationPress(key) {
    // implement this
  }
  /** IMPLEMENT ABOVE! *******************************************************/


  // Helper function
  function isDigitKey(key) {
    return /[0-9]/.test(key);
  }

  function press(key) {
    isDigitKey(key) ? digitPress(key) : operationPress(key);
  }

  function screen() {
    return (inputting ? number : operand).toString();
  }

  return { press, screen };
}

function challenge2() {
  let calc = calculator();
  assertEqual(calc.screen(), '0', 'Calc 1');
  calc.press('3');
  assertEqual(calc.screen(), '3', 'Calc 2');
  calc.press('4');
  assertEqual(calc.screen(), '34', 'Calc 3');
  calc.press('+');
  assertEqual(calc.screen(), '34', 'Calc 4');
  calc.press('3');
  assertEqual(calc.screen(), '3', 'Calc 5');
  calc.press('0');
  assertEqual(calc.screen(), '30', 'Calc 6');
  calc.press('=');
  assertEqual(calc.screen(), '64', 'Calc 7');

  calc = calculator();
  calc.press('3');
  calc.press('4');
  calc.press('+');
  calc.press('3');
  calc.press('0');
  calc.press('-');
  assertEqual(calc.screen(), '64', 'Calc 8');
  calc.press('1');
  assertEqual(calc.screen(), '1', 'Calc 9');
  calc.press('=');
  assertEqual(calc.screen(), '63', 'Calc 10');
}

challenge2();
