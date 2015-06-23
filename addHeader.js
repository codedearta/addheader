var readline = require('readline');

module.exports = function () {
    var header = process.argv[2];
    var isFirstLine = true;

    var rl = readline.createInterface({
      input: process.stdin,
      terminal: true
    });

    rl.on('line', function (instream) {
        if(isFirstLine) {
            isFirstLine = false;
            var outstream = header + instream;
            console.log(outstream);
        }
        else {
            console.log(instream);
        }
    });
}