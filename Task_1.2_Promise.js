'use strict';
const fs = require('fs');
const util = require('util');
const fname = process.argv[2];
const readFilePromise = util.promisify(fs.readFile);
readFilePromise(fname, 'utf-8')
    .then(data => {
        let result = 'START';
        data.split('\n').forEach((element, index) => {
            if (index % 2 !== 0) {
                result += element + '';
            }
        });
        console.log(result + 'END');
    })
    .catch(err => { throw err; });
