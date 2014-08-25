var engineOptions = {
	apiKey: 'x8Zd4XM0t1wjh8kxIpFowVBGZszwJTjACrn0NBUf1n42UoxGQcczqqwZBh4bX8STb3Vhrob8cg4Mh6Im',
};

var thngOptions = {
	thng: 'UUQphE3H8e5wDs8chypknpwb',
	property: 'doorstate'
}

var engine = require('./libs/engine')(engineOptions),
	watcher = require('./libs/fhemWatcher');

watcher.watchDevices(["EnO_contact_01812812-2014"], 
	function(data){
		 console.log("Got " + data);
		 engine.updateThngProperty(thngOptions.thng, thngOptions.property, data);
	});