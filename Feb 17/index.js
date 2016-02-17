var fs = require("fs");
var path = require("path");

//read files
var filePath = path.join(__dirname, "index.txt")
console.log(filePath);

var contents = fs.readFileSync(filePath, "utf8");
console.log(contents);

var newPath = path.join(__dirname, "index-copy.txt");
fs.writeFileSync(newPath, contents);

console.log("done!");