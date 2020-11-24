/* eslint-env jest */

const RomanToArabic = require('./romanToArabic.js')

test('V equal to 5', () => {
  expect(RomanToArabic.romanStringAsArabicNumber('V')).toBe(5)
})
