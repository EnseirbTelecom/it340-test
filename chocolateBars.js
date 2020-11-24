/**
 * Requirement: Chocolate bars
 *
 * A package contains a certain number of chocolate bars in kilos. 
 * A package is composed of small bars (1 kilo each) and big bars (5 kilos each).
 * 
 * Assuming that the package is always filled with the maximum number of big bars possible, 
 * return the number of small bars required to complete the package.
 * 
 * Return -1 if it is not possible to fill the package completely.
 * 
 * The input of the program is: the number of available small bars, the number of available big bars,
 * and the total number of kilos of the package.
 */
const CANNOT_PACK_BAG = -1;

class ChocolateBars {
  static calculate(small, big, total) {
    const maxBigBoxes = total / 5;
    const bigBoxesWeCanUse = Math.min(maxBigBoxes, big);
    total -= (bigBoxesWeCanUse * 5);

    if (small <= total)
        return CANNOT_PACK_BAG;
    return total;
  }
}

module.exports = ChocolateBars;