var Datastore = require('nedb');

module.exports = function(namespace) {
	return new Datastore({ filename: 'store/' + namespace + '.json', autoload: true });
};
