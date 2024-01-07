// 1. Common JS 
const { createFile } = require('./util.js');

const fs = require('fs');

// Use as promise 
/* const _fs = require('fs');
const fs = _fs.promises; */

console.log(fs.readdirSync('.'));
console.log(fs.readFileSync('index.js', 'utf8'));

// createFile("test.txt", "Hello World!");