'use strict'

var mongoose = require('mongoose');

var Contract = require('../lib/contract/contract')

var config = {
	mongo: {
		uri: 'mongodb://localhost/webeth-dev',
		options: {
			db: {
				safe: true
			}
		}
	}
};

function main() {
	console.log('Starting up...');
	// Connect to database
	mongoose.connect(config.mongo.uri, config.mongo.options);

	Contract.listContracts().then(function (contracts) {
		for (var key in contracts) {
			console.log(contracts[key]);
		}
	});
}

main();