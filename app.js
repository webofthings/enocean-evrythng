var engineOptions = {
	apiKey: 'x8Zd4XM0t1wjh8kxIpFowVBGZszwJTjACrn0NBUf1n42UoxGQcczqqwZBh4bX8STb3Vhrob8cg4Mh6Im',
};

var thngOptions = {
	thng: 'UdQKcnkN8VpwdyN2QDNK7mnm',
	property: 'test'
}

var engine = require('./libs/engine')(engineOptions);

engine.updateThngProperty(thngOptions.thng, thngOptions.property, "3.141");