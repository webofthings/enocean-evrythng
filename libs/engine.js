module.exports = function(EVTOptions) {
	var EVT = require('evrythng');

	function updateThngProperty(thng, propertyName, propertyValue) {
		var propUri = "/thngs/" + thng + "/properties/" + propertyName;

		var options = {
			url: propUri,
			method: 'POST',
			authorization: EVTOptions.apiKey,
			data: [{ value: propertyValue }],
			success: function(data) {
				console.log(data);
			},
			error: function(err) {
				console.log(err);
			}
		}

		try {
			EVT.api(options);
		} catch(err) {
			console.log('API Error: %j', err)
		}
	}

	console.log('Evrythng JS now ready!');

	return {
		updateThngProperty: updateThngProperty
	}
}