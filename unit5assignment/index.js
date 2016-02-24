var fs = require("fs");
var path = require("path");
var verbosenum = 0;

//verbose
if(process.argv.indexOf("-v") > -1)
{
    var verbosenum = 1;
    //looking for the verbose switch
}

//looking for input folder
if(process.argv.indexOf("-input") > -1)
{
    //looking for the path after the switch
    var a = process.argv.indexOf("-input") + 1;
    var folderArg = process.argv[a];
    //use folderPath as the input folder
    var folderPath = path.resolve(folderArg);
    //console.log(folderPath);
    //console.log("input");
}

//Check to see if the -output parameter is being passed
if(process.argv.indexOf("-output") > -1)
{
    //looking for the path after the switch
    var b = process.argv.indexOf("-output");
    b = b + 1;
     //use outputPath as the output folder
    var _outputfile = path.resolve(folderPath, process.argv[b]);
    
}

//function to write to the text file
function writetothefile(data){
    
    fs.appendFile(_outputfile, data, 'utf8');      
}

//getting the list of files in the input directory
var dataPath = fs.readdirSync(folderPath);

//var parse = JSON.parse(dataPath);

//console.log(parse);




for (var i in dataPath)
{
    /*/testing the path if it is a file or a folder
    if(fs.stats(path.resolve(folderPath, dataPath[i]).isFile))
    {
       /*/ 
    var filepath = path.resolve(folderPath, dataPath[i]);
    var readingthefile = fs.readFile(filepath, function(err, data){
        if (err)
        {
            return console.log(err);
        }
        console.log(data);
    });
    console.log(readingthefile);
}

writetothefile("*** Overall Statistics ***" + '\r\n');
if(verbosenum === 1)
{
    writetothefile("CONTRACT | HIGH | LOW | AVERAGE | TOTAL | TRADING DAYS | NAME | ID | DATABASE_CODE" + '\r\n');      
}

else
{
    writetothefile("CONTRACT | HIGH | LOW | AVERAGE | TOTAL | TRADING DAYS" + '\r\n');
}


for (var i in dataPath)
{
    /*/
    var filepath = path.resolve(folderPath, dataPath[i]);

    var name = path.basename(dataPath[i], '.json');
    writetothefile(name + " | ");
    /*/
    
    
    
//work right here to get the parsing to work and to find the object you need to send to the correct function
    var contents = fs.readFileSync(path.resolve(folderPath, dataPath[i]));
    var thedata = JSON.parse(contents);
    writetothefile(thedata.dataset.dataset_code + " | ");
    for (var a in thedata.dataset.data)
    {
        writetothefile(a + '\r\n' + '\r\n');
    }
 
    
    /*/
    high(filepath);
    low(filepath);
    average(filepath);
    total(filepath);
    /*/    
    
    //add the more data here. The verbose switch is turned on
    if(verbosenum === 1)
    {
        writetothefile(thedata.dataset.name + " | ");
        writetothefile(thedata.dataset.id + " | ");
        writetothefile(thedata.dataset.database_code + " | ");
    }
    
    writetothefile('\r\n')
}






function high(path){
    var num = 0;
    for (var i in path)
    {
        
    }
    
    writetothefile()
}

function low(path){
    
    writetothefile()
}

function average(path){
    
    writetothefile()
}

function total(path){
    
    writetothefile()
}