'use strict'

const yargs = require('yargs').argv;
const fs = require('fs');
const jsonConvert = require('json2xls');
const paths = require('path');

const inputDir = yargs.inputDir;
const outputDir = yargs.outputDir;

if (typeof (inputDir) !== 'string') {
    console.log('Parameter inputFile has wrong value:', typeof (inputDir));
    console.log('Please, use command: node Task_3.js --inputDir \'path to input dir\' --outputDir \'path to output dir\'');
    process.exit(-1);
} else {
    fs.exists(inputDir, function (result) {
        if (!result) {
            console.log('inputDir doesn\'t exist.');
            process.exit(-1);
        }
    });
    fs.exists(outputDir, function (result) {
        if (!result) {
            fs.realpath(outputDir, function (err) {
                if (err) {
                    console.log('outputDir doesn\'t exist. ');
                    fs.realpath('.', function (err, path) {
                        fs.mkdir(path + '\\' + outputDir, function (err) {
                            if (err) process.exit(-1);
                            else console.log('outputDir has been created.');
                        });
                    })
                } else {
                }
            })
        }
    });
}

fs.readdir(inputDir, function (err, result) {
    if (err) {
        console.log('Somethig wrong happened while the program was reading the directory: [' + inputDir + ']', err);
    } else {
        result.forEach(element => {
            fs.realpath(inputDir, function (err, path) {
                let Path = path + '\\' + element;
                if (err) {
                    console.log('Hell exists. It is here. ', err);
                } else {
                    fs.stat(Path, function (err, stats) {
                        if (err) {
                            throw Error('This is just callback hell. Now I understand what does it means.', err);
                        } else {
                            if (stats.isFile && element.endsWith('.json')) {
                                console.log(Path);
                                let data = fs.readFileSync(Path);
                                let xls = jsonConvert(data);
                                fs.writeFileSync(outputDir +'\\' + paths.basename(Path,'.json') + '.xlsx', xls, 'binary');
                                //There is a code for convert json into xlsx format
                            }
                        }
                    });
                }
            });
        });
    }
});

