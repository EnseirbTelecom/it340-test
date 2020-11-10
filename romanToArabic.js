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