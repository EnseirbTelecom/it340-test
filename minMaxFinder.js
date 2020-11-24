/**
 * Requirement: Min-max
 *
 * Implement a program that, given a list of numbers (integers), returns the smallest and the largest numbers in this list.
 */

const LARGEST = Number.MIN_SAFE_INTEGER
const SMALLEST = Number.MAX_SAFE_INTEGER

class MinMaxFinder {
  constructor (numbers) {
    this.numbers = numbers
    this.smallest = SMALLEST
    this.largest = LARGEST
  }

  find () {
    this.numbers.forEach(number => {
      if (number < this.smallest) this.smallest = number
      else if (number > this.largest) this.largest = number
    })
  }

  min () {
    return this.smallest
  }

  max () {
    return this.largest
  }
}

module.exports = MinMaxFinder
