var fs = require("fs");

function MakeDir(x)
{
    var files = fs.mkdirSync(x);
}
exports.MakeDir = MakeDir;