'use strict';
let fs = require('fs');
let fname = process.argv[2];
function evenNum(file) {
    let result = 'START';
    const mass = fs.readFileSync(file, "utf8").split('\n');
    mass.forEach((element, index) => {
        if (index%2!==0) result = result + element + ' '; 
    });
    return result + 'END';
}
try {
    console.log(evenNum(fname));
} catch (error) {
    console.log("Something wrong with file", error);
}
