const { LookupManager } = require('../lib/manager');

const text = 'foo bar foobar bar foo';
const expressions = [/foo/gi, /bar/gi, /foobar/gi];
const manager = new LookupManager();
let match;

expressions.forEach(expression => {
    while ((match = expression.exec(text))) {
        manager.add(match[0], match.index);
    }
});

console.log(manager.getItems());
