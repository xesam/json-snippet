const fs = require('fs');
const json5 = require('json5');

const content = json5.parse(fs.readFileSync('./json5.json5'));
function replacer(key, value) {
    if (key === '') {
        return value;
    }
    if (key === 'hexadecimal' || key === 'unquoted') {
        return value;
    }
    return undefined;
}

const convert1 = json5.stringify(content, replacer, 4);
console.log(`convert1=${convert1}`);

const convert2 = json5.stringify(content, ['hexadecimal', 'unquoted'], 4);
console.log(`convert2=${convert2}`);


