const functions = require('./functions');

test('adding 2 + 2 equals 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});
