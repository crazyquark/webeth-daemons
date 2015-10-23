'use strict'

var ZipCode = require('../lib/zipcode');

function main() {
	console.log('Starting up...');
	// while(1) {
		
	// }
	
	ZipCode.validate('5041EB').then(function(response) {
		console.log(response);
	});
}

main();