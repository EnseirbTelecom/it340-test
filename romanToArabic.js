/**
 * Requirement: Roman numerals
 *
 * Implement a program that receives a string as a parameter containing a roman number and then converts it to an integer.
 *
 * In roman numerals, letters represent values:
 * - I = 1
 * - V = 5
 * - X = 10
 * - L = 50
 * - C = 100
 * - D = 500
 * - M = 1000
 * 
 * Letters can be combined to form numbers. For example we make 6 by using 5 + 1 = 6 and have the roman number VI.
 * Example: 7 is VII, 11 is XI and 101 is CI. Some numbers need to make use of a subtractive notation to be represented.
 * For example we make 40 not by XXXX, but instead we use 50 - 10 = 40 and have the roman number XL.
 * Other examples: 9 is XI, 40 is XL, 14 is XIV.
 * 
 * The letters should be ordered from the highest to the lowest value. The values of each individual letter is added together. 
 * Unless the subtractive notation is used in which a letter with a lower value is placed in front of a letter with a higher value.
 *
 * Combining both these principles we could give our method MDCCCXLII and it should return 1842.
 */
const ROMAN_CHAR_TO_DIGIT = {
  'I': 1,
  'V': 5,
  'X': 5,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

class RomanToArabic {
  static romanStringAsArabicNumber(chars) {
    const range = [...Array(chars.length).keys()];
    return range
            .map(i => RomanToArabic.getSubtractiveValue(chars, i, RomanToArabic.romanCharAsArabic(chars[i])))
            .reduce((acc, val) => acc + val);
  }

  static romanCharAsArabic(c) {
    return ROMAN_CHAR_TO_DIGIT[c];
  }

  static getSubtractiveValue(chars, i, currentNumber) {
    return RomanToArabic.isSubtractive(chars, i, currentNumber) ? -currentNumber : currentNumber;
  }

  static isSubtractive(chars, i, currentNumber) {
    return i + 1 < chars.length && currentNumber < RomanToArabic.romanCharAsArabic(chars[i + 1]);
  }
}

module.exports = RomanToArabic;