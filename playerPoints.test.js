/* eslint-env jest */

const PlayerPoints = require('./playerPoints.js')

test('A player with 0 points and 0 remaining lives has a total of 50.', () => {
  expect(PlayerPoints.totalPoints(0, 0)).toBe(50)
})
