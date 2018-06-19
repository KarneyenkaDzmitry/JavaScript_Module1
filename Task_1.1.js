'use strict';
let fs = require('fs');
let fname = process.argv[2];

fs.readFile(fname, 'utf8', function (err, contents) {
    if (err) throw err;
    else {
        let result = 'START';
        contents.split('\n').forEach((element, index) => {
            if (index%2!==0) result += element + ' '; 
        });
        console.log(result + 'END');
    }
})