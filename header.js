var glob = require('glob');
var fs = require('fs');

var optionsString = process.argv[2];
var options = JSON.parse(optionsString);

glob(options.filemask, function (err, files) {
	files.forEach(function (file) {
		fs.readFile(file, function (err, data) {
			
			fs.writeFile(file, options.header + '\r\n' + data);
			console.log('header added: ', options.header, ' to: ', file);
		});	
	});
});