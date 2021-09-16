# it340-test

Quelques composants à tester issus du cours de [TU Delft](https://sttp.site/).

## Installation

`npm install`

## Utilisation

Le composants à tester sont des les fichiers `*.js` et les tests correspondants sont dans les fichiers `*.test.js`. Le fichier de test initial ne contient qu'un cas de test basique. A vous de l'améliorer et de corriger de code correspondant jusqu'à ce qu'il soit correct.

- Lancer les tests avec couverture : `npm test`
- Lancer l'analyse par mutation : `npm run mutation`

Les bibliothèques suivantes sont utilisées pour les tests:
- [JEST](https://jestjs.io/fr/) (framework de test)
- [Stryker](https://stryker-mutator.io/) (analyse des tests par mutation)

## Les composants

- blackJack.js
- chocolateBars.js
- fizzBuzz.js
- invoiceFilter.js
- leapYear.js
- minMaxFinder.js
- playerPoints.js
- romanToArabic.js
