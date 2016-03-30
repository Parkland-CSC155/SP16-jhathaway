
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('C:/Temp/chinook/chinook.db');
var path = require("path");
var jsonfile = require('jsonfile')

if(process.argv.indexOf("-output") > -1)
{
    //looking for the path after the switch
    var a = process.argv.indexOf("-output") + 1;
    var folderArg = process.argv[a];
    //use folderPath as the input folder
    var _outputfile = path.resolve(folderArg);
    //console.log(folderPath);
    //console.log("input");
}

var file1 = path.join('_outputfile', 'customers_usa.json');
var obj = {name: 'JP'}
 
jsonfile.writeFile(file1, obj, function (err) {
  console.error(err)
})

var file2 = path.join('_outputfile', 'invoices_2013.json');



