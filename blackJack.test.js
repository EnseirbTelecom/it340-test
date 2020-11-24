/* eslint-env jest */

const BlackJack = require('./blackJack.js')

test('Player with 1 point beats player with 0 point.', () => {
  expect(BlackJack.play(0, 1)).toBe(1)
})
