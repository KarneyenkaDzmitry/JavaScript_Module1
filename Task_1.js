'use strict';
const fs = require('fs');
const fname = process.argv[2];
function evenNum(file) {
    let result = 'START';
    fs.readFileSync(file, "utf8").split('\n').forEach((element, index) => {
        if (index%2!==0) result = result + element + ' '; 
    });
    return result + 'END';
}
try {
    console.log(evenNum(fname));
} catch (error) {
    console.log("Something wrong with file", error);
}
