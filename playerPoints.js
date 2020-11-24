/**
 * Requirement: Calculating the number of points of a player
 *
 * Given the score of a player and the number of remaining lives of the player, the program does the following:
 * - If the player's score is below 50, then it always adds 50 points on top of the current points.
 * - If the player's score is greater than or equals to 50, then:
 *   - if the number of remaining lives is greater than or equal to 3, it triples the score of the player.
 *   - otherwise, it adds 30 points on top of the current points.
 */

class PlayerPoints {
  static totalPoints(currentPoints, remainingLives) {
    if (currentPoints < 50)
      return currentPoints+50;

    return remainingLives < 3 ? currentPoints+30 : currentPoints*3;
  }
}

module.exports = PlayerPoints;