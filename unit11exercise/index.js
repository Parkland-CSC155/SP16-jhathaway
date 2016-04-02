
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('C:/Temp/chinook/chinook.db');
var path = require("path");
var fs = require('fs');

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
var file1 = path.join(_outputfile, 'customers_usa.json');
var file2 = path.join(_outputfile, 'invoices_2013.json');

var sql = `
SELECT * 
FROM customers
WHERE Country = ?
`;
 
db.all(sql, 'USA', function(err, rows)
{
    console.error(err);
    var json = JSON.stringify({"USA": rows});
    fs.writeFile(file1, json, function (err1) 
    {
        console.error(err1);
    })
});


var sql2 = `
SELECT * 
FROM invoices
WHERE InvoiceDate BETWEEN '2013-01-01' AND '2013-12-31'
`;

db.all(sql2, function(err2, rows2)
{
    console.error(err2);
    console.log(rows2);
    var json2 = JSON.stringify(rows2);
    fs.writeFile(file2, json2, function (err3) 
    {
        console.error(err3);
    })
});