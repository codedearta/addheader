// call it like this: node addHeaderCli 'test.js,2test.js' 'my new header'

var addHeader = require('./addHeader');

var args = parseArguments();
addHeader(args.fileNameMasks, args.headerText);

function parseArguments() {
    try {
        return JSON.parse(process.argv[2]);
    } catch (err) {
        return {fileNameMasks: process.argv[2].split(','), headerText: process.argv[3]};
    }
}
