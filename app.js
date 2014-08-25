var EVT = require('evrythng');

/*
EVT.setup({
	apiUrl: 'api.evrythng.com'
});
*/

var options = {
	url: 'api.evrythng.com',
	method: 'POST',
	authorization: 'x8Zd4XM0t1wjh8kxIpFowVBGZszwJTjACrn0NBUf1n42UoxGQcczqqwZBh4bX8STb3Vhrob8cg4Mh6Im',
	data: [{ value: 1 }],
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