const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('reverseString reverses a string', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('reverseString reverses a string with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});
