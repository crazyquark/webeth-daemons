#!/usr/bin/env node

var program = require('commander');

var ZipCode = require('./lib/address/zipcode');

program
	.version('0.0.1')
	.option('-z, --zip <zip code>', 'validate a zip code')
	.parse(process.argv);

if (program.zip) {
	ZipCode.validate(program.zip).then(function(result) {
		console.log(result);
	},
	function(err){
		console.log(err);
	});
}