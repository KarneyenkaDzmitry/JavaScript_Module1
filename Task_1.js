'use strict';

let fs = require('fs');
let fname = process.argv[2];

function evenNum(file) {
    let result = 'START';
    const mass1 = fs.readFileSync(file, "utf8").split('\n');
    for (let i = 1; mass1.length > i; i = i + 2) {
        result = result + mass1[i] + " ";
    }
    return result + 'END';
}
try {
    console.log(evenNum(fname));
} catch (error) {
    console.log("Something wrong with file", error);
}
