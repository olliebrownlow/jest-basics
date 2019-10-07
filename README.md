## Why this repo?

For basic js testing using jest

## The setup sequence:

1. `npm init -y`
 - creates package.json
2. `npm i -D jest`
 - installs jest
3. In package.json change the value of "test" to "jest".
4. Create files called functions.js and functions.test.js.
 - Jest picks up on this kind of naming convention.
5. In functions.js add an object containing functions
6. Export this with `module.exports = functions;`
7. Create a test in functions.test.js
8. Run `npm test` to see the test fail
 - follow the errors to implement the function
9. Refactor and repeat from 7
