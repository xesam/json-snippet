const fs = require('fs');
const json5 = require('json5');

const content = json5.parse(fs.readFileSync('./json5.json5'), function (key, value) {
    console.log(key, value);
    return value;
});
console.log(content);