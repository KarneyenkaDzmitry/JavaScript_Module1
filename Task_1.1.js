'use strict';

let fs = require('fs');
let fname = process.argv[2];
let result = 'START';

console.log('Beginning state of result is ', result);

fs.readFile(fname, 'utf8', function (err, contents) {
    if (err) { throw err; }
    else {
        const mass = contents.toString().split('\n');
        console.log('Inside readFile function body. Result is ', result);
        for (let i = 1; mass.length > i; i = i + 2) {
            result = result + mass[i] + " ";
        }
        console.log(result + 'END');
    }
})
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('Inside body function \'setTimeout\' 10 Times 1 msec : ', i);
    }, 1);
}
console.log('Result after readFile function and timeout: ', result);

console.log('END OF SCRIPT');