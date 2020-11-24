/* eslint-env jest */

const LeapYear = require('./leapYear.js')

test('2020 is a leap year', () => {
  expect(LeapYear.isLeapYear(2020)).toBe(true)
})
