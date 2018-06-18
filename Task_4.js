'use strict'

const request = require('request');
const yargs = require('yargs').argv;
let country;
if (typeof(yargs.country)!=='string' ) {
    country = 'Belarus'
} else {
    country = yargs.country;
}
let result;
let options = {
    url: 'http://services.groupkt.com/country/get/all',
    method: 'GET',
    json: true
}

request(options, function (err, head, body) {
    if (err) {
        throw Error('Error during recieve response. ',err);
    } else {
        result= body.RestResponse.result;
        result.forEach(element => {
            if (element.name===country){
                console.log('name: ',element.name);
                console.log('alpha2_code: ',element.alpha2_code);
                console.log('alpha3_code: ',element.alpha3_code);
            }
        });
    }
})