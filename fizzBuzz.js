/**
 * Requirement: FizzBuzz

 * The program must return 'Fizz' to multiples of 3,
 * 'Buzz' to multiples of 5, and 'FizzBuzz' to multiples of 3 and 5.
 * The program must throw an exception for numbers below 0 (inclusive).
 */

class FizzBuzz {
  static fizzBuzz (number) {
    if (number % 3 === 0) { return 'Fizz' } else { return 'Buzz' }
  }
}

module.exports = FizzBuzz
