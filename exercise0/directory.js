var fs = require("fs");
var colors = require("colors");

function readDir()
{
    var files = fs.readdirSync(__dirname);
	console.log(colors.blue(files));
}
exports.readDir = readDir;
