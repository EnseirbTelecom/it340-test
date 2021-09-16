# it340-test

Some components dedicated to unit testing training, adapted from the [TU Delft](https://sttp.site/) course.

## Installation

`npm install`

## Usage

The components to test are in the `*.js` files and the corresponding tests are in the `*.test.js` files. Requirements of the components are written in as a header comment in the `*.js` files. The initial tests files only contain a very basic assertion. It's up to you to improve the tests and the corresponding components until they are correct. **Important** do not fix code without first writing a test that exhibits the problem.

- Launch the tests (including code coverage computation)  : `npm test`
- Launch the mutation analysis of the tests : `npm run mutation`

The following libraries are used for the tests:
- [JEST](https://jestjs.io/fr/) (test framework)
- [Stryker](https://stryker-mutator.io/) (mutation analysis framework)

## Components

- blackJack.js
- chocolateBars.js
- fizzBuzz.js
- invoiceFilter.js
- leapYear.js
- minMaxFinder.js
- playerPoints.js
- romanToArabic.js
