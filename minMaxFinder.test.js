/* eslint-env jest */

const MinMaxFinder = require('./minMaxFinder.js')

test('[4, 25, 7, 9] min equal to 4, max equal to 25', () => {
  const finder = new MinMaxFinder([4, 25, 7, 9])
  finder.find()
  expect(finder.min()).toBe(4)
  expect(finder.max()).toBe(25)
})
