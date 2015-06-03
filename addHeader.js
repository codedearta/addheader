var fs = require('fs');
var glob = require("glob");

module.exports = function (fileNameMasks, headerText) {
    var headerTextl = headerText;

    fileNameMasks.forEach(addHeadersFor);

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
            fs.writeFileSync(fileName, headerTextl + '\r\n' + fileContent);
        } else {
            throw 'Error file not found';
        }
    }
};



