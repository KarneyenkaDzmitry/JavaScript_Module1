'use strict'
const request = require('request-promise-native');
const yargs = require('yargs').argv;
const options = {
    url: 'http://services.groupkt.com/country/get/all',
    method: 'GET',
    json: true
}
main(options, yargs.country);

function main(options, country) {
    request(options)
        .then(data => { return data.RestResponse.result; })
        .then(data => {
            data.forEach(element => {
                if (element.name === country) {
                    console.log(`name: ${element.name}`);
                    console.log(`alpha2_code: ${element.alpha2_code}`);
                    console.log(`alpha3_code: ${element.alpha3_code}`);
                    process.exit(0);
                }
            });
            console.log(`the program couldn\'t find the country ${country}`);
        })
        .catch(err => { throw err; })
}

