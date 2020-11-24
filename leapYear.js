/**
  Requirement: Leap year
  ---

  Given a specific year as an input, the program should return true if the provided year is a leap year and false if it is not.

  A year is a leap year if:
  - the year is divisible by 4;
  - and the year is not divisible by 100;
  - except when the year is divisible by 400 (because then it is a leap year)
*/

class LeapYear {
  static isLeapYear (year) {
    if (year % 400 === 0) { return true }
    if (year % 100 === 0) { return false }

    return year % 4 === 0
  }
}

module.exports = LeapYear
