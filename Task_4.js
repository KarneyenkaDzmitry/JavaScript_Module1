'use strict'
const request = require('request');
const yargs = require('yargs').argv;
const options = {
    url: 'http://services.groupkt.com/country/get/all',
    method: 'GET',
    json: true
}
doRequestAndShowInfo(options, yargs.country);
function doRequestAndShowInfo(options, country){
    if (typeof (country) !== 'string') country = 'Belarus'
    request(options, function (err, head, body) {
        if (err) throw Error('Error during recieve response. ', err);
        else {
            body.RestResponse.result.forEach(element => {
                if (element.name === country) {
                    console.log('name: ', element.name);
                    console.log('alpha2_code: ', element.alpha2_code);
                    console.log('alpha3_code: ', element.alpha3_code);
                    process.exit(0);
                }
            });
            console.log('Sorry, there isn\'t suitable name of country. Check entered parameter --country.');
        }
    })
}
