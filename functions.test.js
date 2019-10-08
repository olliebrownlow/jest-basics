const functions = require('./functions');

// Run something before and after each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// Run something once before and after all tests
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialised...');
// const closeDatabase = () => console.log('Database closed...');

// Target a few tests to run something before/after etc by using a describe block
const namecheck = () => console.log('Checking name...');

describe('checking names', () => {
  beforeEach(() => namecheck());

  test('User is Carol', () => {
    const user = 'Carol';
    expect(user).toBe('Carol');
  });

  test('User is Gabriela', () => {
    const user = 'Gabriela';
    expect(user).toBe('Gabriela');
  });
});

// toBe works for primitive types only
test('adding 2 + 2 equals 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toEqual works in other cases (objects, arrays etc.)
test('user should be Ollie Brownlow', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Ollie',
    lastName: 'Brownlow'
  });
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

// Less than and greater than (or equal)
test('should be under 1000', () => {
  const load1 = 500;
  const load2 = 499;
  expect(load1 + load2).toBeLessThan(1000);
});

test('should be under 1000', () => {
  const load1 = 500;
  const load2 = 500;
  expect(load1 + load2).toBeLessThanOrEqual(1000);
});

// Regex
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/i); //the "i" makes it case insensitive
});

// Arrays
test('"admin" should be in usernames array', () => {
  usernames = ['Lily', 'Clarice', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data - must expect a  umber of asserions AND return or
// pass will test no matter what

// Promise syntax
test('user fetched name should be "Leanne Graham"', () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async Await syntax
test('user fetched name should be "Leanne Graham"', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
