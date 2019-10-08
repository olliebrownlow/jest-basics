const functions = require('./functions');

test('adding 2 + 2 equals 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('adding 2 + 3 does not equal 4', () => {
  expect(functions.add(2, 3)).not.toBe(4);
});

// MATCHERS TO CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
