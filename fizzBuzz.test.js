/* eslint-env jest */

const FizzBuzz = require('./fizzBuzz.js')

test('FizzBuzz of 6 return Fizz', () => {
  expect(FizzBuzz.fizzBuzz(6)).toBe('Fizz')
})
