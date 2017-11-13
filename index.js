/*
 *  @author       ::  Preston Wang-Stosur-Bassett <preston.wang-stosur-bassett14@kzoo.edu>
 *  @date         ::  Nov 13, 2017
 *  @description  ::  A driver function for the monty hall game
*/

// Require Dependencies
var Game = require('./classes/Game.js');

// Define the number of times to play the game
var numberOfTurns = 1000000;

// Define the number of doors each game has
var numberOfDoors = 3;

// Simulate the game play x number of times
var results = Game.simulate(numberOfTurns, numberOfDoors);

// Format the results as percentages
var formatted = results.probability * 100;

// Display the results
if(results.assertionCorrect) {
  console.log("Switching wins with a probability of winning at " + formatted + "%.");
} else {
  console.log("Switching loses with a probability of winning at " + formatted + "%.");
}
