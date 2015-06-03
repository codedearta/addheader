var fs = require('fs');
var glob = require("glob");

var args = parseArguments();
args.fileNameMasks.forEach(addHeadersFor);

function parseArguments() {
    try {
        return JSON.parse(process.argv[2]);
    } catch (err) {
        return {fileNameMasks: process.argv[2].split(','), headerText: process.argv[3]};
    }
}

function addHeadersFor(fileNameMask) {
    glob(fileNameMask, fileNamesOfMask);
}

function fileNamesOfMask(err, fileNames){
    if(err) {
        console.log('file mask error: ', err);
    }

    fileNames.forEach(addHeaderFor);
}

function addHeaderFor(fileName) {
    var fileContent = fs.readFileSync(fileName, 'utf-8');

    if (fileContent) {
        fs.writeFileSync(fileName, args.headerText + '\r\n' + fileContent);
    } else {
        throw 'Error file not found';
    }
}
