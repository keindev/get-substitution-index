<p align="center"><img src="https://cdn.jsdelivr.net/gh/keindev/string-lookup-manager/media/logo.svg" alt="string-lookup-manager logo"></p>

<p align="center">
    <a href="https://github.com/keindev/string-lookup-manager/actions"><img src="https://github.com/keindev/string-lookup-manager/actions/workflows/build.yml/badge.svg" alt="Build Status"></a>
    <a href="https://codecov.io/gh/keindev/string-lookup-manager"><img src="https://codecov.io/gh/keindev/string-lookup-manager/branch/master/graph/badge.svg" /></a>
    <a href="https://www.npmjs.com/package/string-lookup-manager"><img alt="npm" src="https://img.shields.io/npm/v/string-lookup-manager.svg"></a>
    <a href="https://www.npmjs.com/package/string-lookup-manager"><img alt="NPM" src="https://img.shields.io/npm/l/string-lookup-manager.svg"></a>
    <a href="https://github.com/tagproject/ts-package-shared-config"><img src="https://img.shields.io/badge/standard--shared--config-nodejs%2Bts-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAfCAYAAACh+E5kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB1VftUcMwDFU4/tMNyAZ0A7IBbBA2CExAmIBjApcJChO0TFA2SJkgMIGRyDNV3TSt26RN353OX/LHUyTZIdoB1tqMZcaS0imBDzxkeWaJWR51SX0HrJ6pdsJyifpdb4loq3v9A+1CaBuWMR0Q502DzuJRFD34Y9z3DXIRNy/QPWKZY27COlM6BtZZHWMJ3CkVa28KZMTJkDpCVLOhs/oL2gMuEhYpxeenPPah9EdczLkvpwZgnQHWnlNLiNQGYiWx5gu6Ehz4m+WNN/2i9Yd75CJmeRDXogbIFxECrqQ2wIvlLBOXaViuYbGQNSQLFSGZyOnulb2wadaGnyoSSeC8GBJkNDf5kloESAhy2gFIIPG2+ufUMtivn/gAEi+Gy4u6FLxh/qer8/xbLq7QlNh6X4mbtr+A3pylDI0Lb43YrmLmXP5v3a4I4ABDRSI4xjB/ghveoj4BCVm37JQADhGDgOA+YJ48TSaoOwKpt27aOQG1WRES3La65WPU3dysTjE8de0Aj8SsKS5sdS9lqCeYI08bU6d8EALYS5OoDW4c3qi2gf7f+4yODfj2DIcqdVzYKnMtEUO7RP2gT/W1AImxXSC3i7R7rfRuMT5G2xzSYzaCDzOyyzDeuNHZx1a3fOdJJwh28fRwwT1QY6Xzf7TvWG6ob/BIGPQ59ymUngRyRn2El6Fy5T7G0zl+JmoC3KRQXyT1xpfiJKIeAemzqBl6U3V5ocZNf4hHg61u223wn4nOqF8IzvF9IxCMkyfQ+i/lnnhlmW6h9+Mqv1SmQhehji4JAAAAAElFTkSuQmCC" alt="Standard Shared Config"></a>
</p>

> An easy way to collect regular expressions search results.

It often happens that you need to get an array of search results from several regular expressions. But search results may overlap and duplicate. This package will help you get clean ideas from the results of this search.

## Install

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
  // Regex finds this:
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
console.log(manager.items);
```

## API

Read the [API documentation](docs/api/index.md) for more information.
