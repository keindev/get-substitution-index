const { LookupManager } = require('../lib/LookupManager');

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
