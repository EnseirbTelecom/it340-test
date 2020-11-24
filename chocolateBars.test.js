/* eslint-env jest */
const ChocolateBars = require('./chocolateBars.js')

test('0 small bar to fill a 5 kilos bag.', () => {
  expect(ChocolateBars.calculate(10, 10, 5)).toBe(0)
})
