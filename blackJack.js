/**
 * Requirement: Black-jack
 *
 * The program receives the number of points of two blackjack players. 
 * The program must return the number of points of the winner. 
 * In blackjack, whoever gets closer to 21 points wins. 
 * If a player goes over 21 points, the player loses. 
 * If both players lose, the program must return 0.
 */

class BlackJack {
  static play(left, right) {
    let ln = left;
    let rn = right;
    if (ln > 21)
      ln = 0;
    if (rn > 21)
      rn = 0;
    if (ln > rn)
      return ln;
    else
      return rn;
  }
}

module.exports = BlackJack;