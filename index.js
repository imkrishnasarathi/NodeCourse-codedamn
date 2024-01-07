// 1. Common JS 
const { createFile } = require('./util.js');

const fs = require('fs');

console.log(fs.readdirSync('.'));

// createFile("test.txt", "Hello World!");