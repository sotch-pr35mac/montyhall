/*
 *  @author       ::  Preston Wang-Stosur-Bassett <preston.wang-stosur-bassett14@kzoo.edu>
 *  @date         ::  Nov 13, 2017
 *  @description  ::  A Game class for playing the monty hall game
*/

// Require Dependencies
var Door = require('./Door.js');
var _ =  require('underscore');

module.exports = class Game {
  /*
   *  The constructor defines a new instance of Game with input of how many doors to create for this game
  */
  constructor(numOfDoors) {
    var doors = [];

    // Create 3 doors, mark the third as the winning door
    for(var i = 0; i < numOfDoors; i++) {
      if(i < 2) {
        doors.push(new Door(false));
      } else {
        doors.push(new Door(true));
      }
    }

    // Shuffle the order of the doors
    doors = _.shuffle(doors);

    this.doors = doors;
  }

  /*
   *  Play the instantiated game:
   *  How does it work?
   *  STEP 1: Pick a door at random
   *  STEP 2: Open a door that is not the door chosen or the door with the car
   *  STEP 3: Switch the chosen door to the other unopened door
  */
  play() {
    // First pick a random door
    var random = Math.floor(Math.random() * 4);

    // Now that we have chosen a door, lets open a door that is a goat
    var openDoor;
    for(var i = 0; i < 3; i++) {
      if(!this.doors[i].containsCar && i != random) {
        openDoor = i;
        break;
      }
    }

    // Now that we have an open door, lets switch our choice to the next door
    var newChoice;
    for(var i = 0; i < 3; i++) {
      if(i != random && i != openDoor) {
        newChoice = i;
      }
    }

    // Now lets open our new choice to see if there is a car behind it
    var win = false;
    if(this.doors[newChoice].containsCar) {
      win = true;
    } else {
      win = false;
    }

    // Return the results
    return win;
  }

  /*
   *  Simulate game play an x amount of times and return the results.
   * Just go through and play the game the provided number of times and record when a game wins or when a game loses
  */
  static simulate(numOfGames, numOfDoors) {
    // Keep a record of how many times it was correct to switch choice, and how many times it was incorrect to switch choice
    var correct = 0;
    var incorrect = 0;

    // Create x amount of games and play it, then mark whether or not the game was won or not
    for(var i = 0; i < numOfGames; i++) {
      var currentGame = new Game(numOfDoors);
      if(currentGame.play()) {
        correct++;
      } else {
        incorrect++;
      }
    }

    // There was some sort of error, report it to the console.
    if((correct + incorrect) != numOfGames) {
      console.log("There was some sort of error with the number of games played. Moving on...");
    }

    // Record the data
    var correctAssertion;
    if(correct > incorrect) {
      correctAssertion = true;
    } else {
      correctAssertion = false;
    }

    var results = {
      probability: (correct / numOfGames),
      assertionCorrect: correctAssertion
    };

    // Return the results
    return results;
  }
}
