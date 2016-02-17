//var yo = require("./MakeDir.js");
//yo.MakeDir("C:\Logs");
var colors = require("colors");

var fs = require("fs");
var path = require("path");

//fs.mkdirSync("C:/logs");
//fs.mkdirSync("C:/logs/raw");

fs.mkdirSync("C:/logs/processed");
fs.mkdirSync("C:/logs/processed/2014");
fs.mkdirSync("C:/logs/processed/2015");
fs.mkdirSync("C:/logs/processed/2016");

var content = fs.readdirSync("C:/logs/raw");
console.log("Starting ...")
console.log("creating [processed] directories if not exists...");
console.log(colors.green("sorting files"));
content.sort();


var i = 0;

do {
    path.parse(content[i]);
    if (content[i].charAt(3) == 4)
    {
        var yo = "C:/logs/raw/" + content[i];
        var sup = "C:/logs/processed/2014/" + content[i];
        fs.rename(yo, sup);
    }
    
    if (content[i].charAt(3) == 5)
    {
        var yo = "C:/logs/raw/" + content[i];
        var sup = "C:/logs/processed/2015/" + content[i];
        fs.rename(yo, sup);
    }
    
    if (content[i].charAt(3) == 6)
    {
        var yo = "C:/logs/raw/" + content[i];
        var sup = "C:/logs/processed/2016/" + content[i];
        fs.rename(yo, sup);
    }
    i++;
}
while (i < content.length);

console.log("...Finished!");

var content2014 = fs.readdirSync("C:/logs/processed/2014");
var content2015 = fs.readdirSync("C:/logs/processed/2015");
var content2016 = fs.readdirSync("C:/logs/processed/2016");

console.log(colors.blue("moved [" + content2014 + "] logs into processed\2014"));
console.log(colors.blue("moved [" + content2015 + "] logs into processed\2015"));
console.log(colors.blue("moved [" + content2016 + "] logs into processed\2016"));
console.log(colors.blue("...Finished!"));