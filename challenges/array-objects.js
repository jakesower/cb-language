const assertEqual = require('../lib/assert-equal');

/**
 * Functions do best when dealing with simple data structures, specifically
 * strings, numbers, booleans, null, arrays, and POJOs (plain old JavaScript
 * objects). This section provides practice in manipulating these common
 * structures. These problems will be revisited in a different light later in
 * the course.
 *
 * We'll be using a subset of team data from the FIFA Men's World Cup to derive
 * and play with these functions.
 */

const teamData = {
  argentina: {
    name: 'Argentina',
    titles: [1978, 1986],
    star: { firstName: 'Lionel', lastName: 'Messi' },
  },
  brazil: {
    name: 'Brazil',
    titles: [1958, 1962, 1970, 1994, 2002],
    star: { firstName: 'Neymar' },
  },
  germany: {
    name: 'Germany',
    titles: [1954, 1974, 1990, 2014],
    star: { firstName: 'Thomas', lastName: 'Müller' },
  }
};


/**
 * Challenge 1: Display the star play with a first and last name. If the last
 * name of a player is unknown, put ¯\_(ツ)_/¯.
 */

function getStar(team) {
  // for my actual solutions, see the code from day 2
}

assertEqual(
  getStar('argentina'),
  { firstName: 'Lionel', lastName: 'Messi' },
  'Get Star 1'
);

assertEqual(
  getStar('brazil'),
  { firstName: 'Neymar', lastName: '¯\_(ツ)_/¯' },
  'Get Star 2'
);



/**
 * Challenge 2: Rank the teams by the number of world cup titles they have.
 * Output should be a string of the country's name and the number of titles
 * they have, sorted from most titles to fewest.
 */

function showTitles() {

}

// Test it
const correctOutput2 = [
  'Brazil: 5 titles',
  'Germany: 4 titles',
  'Argentina: 2 titles',
];

assertEqual(showTitles(), correctOutput2, 'Show Titles');


/**
 * Challenge 3: Output a series of letters representing each team's victories
 * by year of victory. The letter in the string is the first letter of the
 * country's name.
 */
const correctOutput3 = 'GBBBGAAGBBG';

function showVictoryLetters() {

}

assertEqual(showVictoryLetters(), correctOutput3, 'Victory Letters');
