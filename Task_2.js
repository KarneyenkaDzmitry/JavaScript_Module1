'use strict';
const fs = require('fs');
const fname = process.argv[2];
fs.readFile(fname, 'utf8', function (err, contents) {
    if (err) { throw err; }
    else {
        const json = JSON.parse(contents);
        fs.writeFile('./resources/Task_2_result.txt',checker(json), 'utf8', function (err) {
            if (err) {
                throw new Error('Error during writing file.', err);
            }
        });
    }
})
function checker(json) {
    let result = '';
    if (typeof (json.flag) !== 'boolean') { result = result + '\"flag\":\"' + json.flag + '\"\n'; }
    if (!Array.isArray(json.myPromises)) { result = result + '\"myPromises\":\"' + json.myPromises + '\"\n'; }
    if (typeof (json.element) !== 'object' || Array.isArray(json.element)) {
        result = result + '\"element\":\"' + json.element + '\"\n';
    }
    if (typeof (json.screenshot) !== 'null') { result = result + '\"screenshot\":\"' + json.screenshot + '\"\n'; }
    if (typeof (json.elementText) !== 'string') { result = result + '\"elementText\":\"' + json.elementText + '\"\n'; }
    if (typeof (json.allElementsText) !== 'string' || -1 >= json.allElementsText.indexOf('const')) {
        result = result + '\"allElementsText\":\"' + json.allElementsText + '\"\n';
    }
    if (typeof (json.counter) !== 'number' || json.counter <= 10) {
        result = result + '\"counter\":\"' + json.counter + '\"\n';
    }
    if (typeof (json.config) !== 'string' || json.config !== 'Common') { result = result + '\"config\":\"' + json.config + '\"\n'; }
    if (typeof (json.const) !== 'string' || json.const !== 'first'.toLowerCase()) {
        result = result + '\"const\":\"' + json.const + '\"\n';
    }
    if (!Array.isArray(json.parameters) || json.parameters.length !== 8) {
        result = result + '\"parameters\":\"' + json.parameters + '\"\n';
    }
    if (typeof (json.description) !== 'string' || json.description.length > 13 || json.description.length < 5) {
        result = result + '\"description\":\"' + json.description + '\"\n';
    }
    if (result === '') { result = 'OK'; }
    return result;
} 