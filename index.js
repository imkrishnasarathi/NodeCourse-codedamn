// 1. Common JS 
const { createFile } = require('./util.js');

const fs = require('fs');

// Use as promise 
const _fs = require('fs');
const fs = _fs.promises;

console.log(fs.readdirSync('.'));

// createFile("test.txt", "Hello World!");