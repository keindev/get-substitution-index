![](https://cdn.jsdelivr.net/gh/keindev/string-lookup-manager/media/logo.svg)

[![Build Status](https://travis-ci.com/keindev/string-lookup-manager.svg?branch=master)](https://travis-ci.com/keindev/string-lookup-manager)
[![Codecov](https://codecov.io/gh/keindev/string-lookup-manager/branch/master/graph/badge.svg)](https://codecov.io/gh/keindev/string-lookup-manager)
[![CodeFactor](https://www.codefactor.io/repository/github/keindev/string-lookup-manager/badge)](https://www.codefactor.io/repository/github/keindev/string-lookup-manager)
[![npm](https://img.shields.io/npm/v/string-lookup-manager.svg)](https://www.npmjs.com/package/string-lookup-manager)
[![license](https://img.shields.io/npm/l/string-lookup-manager.svg)](https://www.npmjs.com/package/string-lookup-manager)

> An easy way to collect regular expressions search results.

It often happens that you need to get an array of search results from several regular expressions. But search results may overlap and duplicate. This package will help you get clean ideas from the results of this search.

## Install

### Yarn

```console
yarn add string-lookup-manager
```

### NPM

```console
npm install string-lookup-manager
```

## Usage

```javascript
const { LookupManager } = require('string-lookup-manager');

const text = 'foo bar foobar bar foo';
const expressions = [/foo/gi, /bar/gi, /foobar/gi];
const manager = new LookupManager();
let match;

expressions.forEach(expression => {
    // Matches:
    // { value: 'foo', start: 0 }
    // { value: 'foo', start: 8 }
    // { value: 'foo', start: 19 }
    // { value: 'bar', start: 4 }
    // { value: 'bar', start: 11 }
    // { value: 'bar', start: 15 }
    // { value: 'foobar', start: 8 }
    while ((match = expression.exec(text))) {
        console.log({ value: match[0], start: match.index });
        manager.add(match[0], match.index);
    }
});

// Lookup manager items:
//  LookupItem { value: 'foo', start: 0, end: 2 },
//  LookupItem { value: 'bar', start: 4, end: 6 },
//  LookupItem { value: 'foobar', start: 8, end: 13 },
//  LookupItem { value: 'bar', start: 15, end: 17 },
//  LookupItem { value: 'foo', start: 19, end: 21 }
console.log(manager.getItems());
```

## API

Read the [API documentation](docs/api/README.md) for more information.

## License

[MIT](LICENSE)
