/*
 *  @author        ::   Preston Wang-Stosur-Bassett <preston.wang-stosur-bassett14@kzoo.edu>
 *  @date          ::   Nov 13, 2017
 *  @description   ::   A Door class for the monty hall game, keeps track of what is behind a door
*/

module.exports = class Door {
  /*
   *  The constructor for this class only takes a boolean to record whether or not the door has a car behind it, true for yes, false for no
  */
  constructor(containsCar) {
    this.containsCar = containsCar;
  }
}
