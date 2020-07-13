const fs = require('fs');
const json5 = require('json5');

const content = json5.parse(fs.readFileSync('./test.json5'));
console.log(content);