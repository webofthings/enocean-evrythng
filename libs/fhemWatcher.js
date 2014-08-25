(function() {
	
	// === imports ========================================================= //
	var Tail = require('tail').Tail;

	// === Constants ======================================================= //
	var PATH = '/opt/fhem/log/';

	// === Exports ========================================================= //


	exports.watchDevices = function(devicesToWatch, callback) {
		var arrayLength = devicesToWatch.length;
		for (var i = 0; i < arrayLength; i++) {
			var file = PATH + devicesToWatch[i] + '.log';
			console.log("Now watching for changes on " + file);
			tail = new Tail(file);

			tail.on("line", function(data) {
				// last string is the result
				var arr = data.split(" ");
				callback(arr[arr.length - 1]);
			});

			tail.on("error", function(error) {
				console.log('ERROR: ', error);
			});
		}
	}

})();