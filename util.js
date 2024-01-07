// function addNumbers(a, b) {
//     return a + b;
// }

// // exports = {
// //     a: 100,
// //     b: 200
// // };

// module.exports.addNumbers = addNumbers;

const fs = require('fs');

function createFile(name, contents){
    fs.writeFileSync(name, contents);
    console.log(`File ${name} created`);
}