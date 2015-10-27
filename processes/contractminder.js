'use strict'

var mongoose = require('mongoose');
var mubsub = require('mubsub');

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
	
	var client = mubsub(config.mongo.uri);
	var channel = client.channel('contracts');
	
	var subscription = channel.subscribe(function(user) {
		console.log(user);
	});
}

main();