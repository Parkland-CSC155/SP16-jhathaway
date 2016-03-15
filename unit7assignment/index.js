var colors = require("colors");
var fs = require("fs");
var path = require("path");

if(process.argv.indexOf("-input") > -1)
{
    //looking for the path after the switch
    var a = process.argv.indexOf("-input") + 1;
    var folderArg = process.argv[a];
    //use folderPath as the input folder
    var folderPath = path.resolve(folderArg);
}
console.log("starting ...");
//above is the input file location and the requires
//-------------------------------------------------
//moving on to functions
function makethedir(x){
    fs.mkdir(x, function(err, path){
    });
}
console.log("creating [processed] directories if not exists...");
//test to see if the input file path is there or
//if it needs to be made wit ha mkdir
function mkdirIfNotExist(path){
        try{
            return makethedir(path);
        }
        
        catch(e){
            
        }
}
var raw = path.resolve(folderPath, 'raw');
var processedfolder = path.resolve(folderPath, 'processed');
mkdirIfNotExist(processedfolder);
//making the sorting path for the files to go into 
//2014       
var dir2014 = path.resolve(processedfolder, "2014");
mkdirIfNotExist(dir2014);
//2015
var dir2015 = path.resolve(processedfolder, '2015');
mkdirIfNotExist(dir2015);
//2016
var dir2016 = path.resolve(processedfolder, '2016');
mkdirIfNotExist(dir2016);
var count = 0;

//reading the directory of the raw folder
function readdirfun(err, data){
if (err) throw err;
    var i = 0;

do {
    path.parse(data[i]);
    if (data[i].charAt(3) == 4)
    {
        var yo = path.resolve(raw, data[i]);
        var sup = path.resolve(dir2014, data[i]);
        fs.rename(yo, sup, function (err) {
            if (err) throw err;
        });
        count++;
        if (count == data.length){
            console.log(colors.green("...Finished!"))}
    }
    
    if (data[i].charAt(3) == 5)
    {
        var yo1 = path.resolve(raw, data[i]);
        var sup1 = path.resolve(dir2015, data[i]);
        fs.rename(yo1, sup1, function (err) {
            if (err) throw err;
        });
        count++;
        if (count == data.length){
            console.log(colors.green("...Finished!"))}
    }
    
    if (data[i].charAt(3) == 6)
    {
        var yo2 = path.resolve(raw, data[i]);
        var sup2 = path.resolve(dir2016, data[i]);
        fs.rename(yo2, sup2, function (err) {
            if (err) throw err;
        });
        count++;
        if (count == data.length){
            console.log(colors.green("...Finished!"))}
    }
    i++;
}
while (i < data.length);

fs.readdir(dir2014, function(err, items){
    console.log(colors.blue("moved [" + items.length + "] logs into processed\\2014"));
})
fs.readdir(dir2015, function(err, items){
    console.log(colors.blue("moved [" + items.length + "] logs into processed\\2015"));
})
fs.readdir(dir2016, function(err, items){
    console.log(colors.blue("moved [" + items.length + "] logs into processed\\2016"));
})


}



var content = fs.readdir(raw, readdirfun);
//console.log(content);                                         

//sorting
console.log(colors.green("sorting files"));
//content.sort();