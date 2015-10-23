'use strict'

var http = require('http');
var Q = require('q');

var zipCodeValidateAPI = 'api.postcodeapi.nu';

var headers = {
	'Api-Key': '3079609a2eb0b00e722e819facdcf772200b0a86',
	'Content-Type': 'application/json'
};

function buildResponseHandler(deffered) {
	var handler = function(response) {
		response.setEncoding('utf-8');
		
		var responseString = '';
		
		response.on('data', function(data) {
			responseString += data;
		});
		
		response.on('end', function() {
			var responseObject = JSON.parse(responseString);
			
			deffered.resolve(responseObject);
		});
	}
	
	return handler;
};

var ZipCode = {
	validate: function (zipCode) {
		var options = {
			host: zipCodeValidateAPI,
			headers : headers,
			path: '/' + zipCode
		};
		
		var deffered = Q.defer();
		
		http.get(options, buildResponseHandler(deffered));
		
		return deffered.promise;
	}
};

module.exports = ZipCode;