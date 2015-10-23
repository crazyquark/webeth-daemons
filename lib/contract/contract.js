'use strict'

var ContractModel = require('./contract.model');

var Contract = {
	listContracts: function() {
		return ContractModel.findQ({});
	}
};

module.exports = Contract;