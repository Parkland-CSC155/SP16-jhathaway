var fs = require("fs");
var path = require("path");
var log4js = require('log4js');
var verbose = false;

//verbose
if(process.argv.indexOf("-v") > -1)
{
    var verbose = true;
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

//create logger

log4js.configure({
    appenders: [
        { type: 'file', filename: './log.txt', category: 'file-logger' }
    ]
});

var logger = log4js.getLogger('file-logger');

if(verbose){
    logger.setLevel("TRACE");
}else{
    logger.setLevel("INFO");
}

logger.trace("some trace message");
logger.debug("some debug message");
logger.info("some info message");
logger.warn("some warn message");
logger.error("some error message");

//function to write to the text file
function writetothefile(data){
    
    fs.appendFileSync(_outputfile, data, 'utf8');      
}




//getting the list of files in the input directory
var dataPath = fs.readdirSync(folderPath);

//var parse = JSON.parse(dataPath);

//console.log(parse);



writetothefile("*** Overall Statistics ***" + '\r\n');
writetothefile("CONTRACT | HIGH | LOW | AVERAGE SETTLE | TOTAL TRADING DAYS");
writetothefile('\r\n');

for (var i in dataPath)
{
    /*/testing the path if it is a file or a folder
    if(fs.stats(path.resolve(folderPath, dataPath[i]).isFile))
    {
       /*/ 
    var filepath = path.resolve(folderPath, dataPath[i]);
    var readingthefile = fs.readFileSync(filepath);
    
    //reading each file in the dir

    /*/
    var filepath = path.resolve(folderPath, dataPath[i]);

    var name = path.basename(dataPath[i], '.json');
    writetothefile(name + " | ");
    /*/
    
    
    
//work right here to get the parsing to work and to find the object you need to send to the correct function
    var contents = fs.readFileSync(path.resolve(folderPath, dataPath[i]));
    var thedata = JSON.parse(contents);
    writetothefile('\r\n');
    
    writetothefile(thedata.dataset.dataset_code);
    writetothefile(' | ');
    
    //high
    var count = 0;
    var num = 0;
    
    for (var hi in thedata.dataset.data)
    {
        if (num < thedata.dataset.data[count][2]) {
            num = thedata.dataset.data[count][2];
        }
        count++;     
     
    }
    writetothefile(num);
    writetothefile(' | ');
    
    //low
    
    var highnum = 1000
    var lowcount = 0;
    for (var sup in thedata.dataset.data)
    {
            if (highnum > thedata.dataset.data[lowcount][3] && 0 < thedata.dataset.data[lowcount][3]) {
                highnum = thedata.dataset.data[lowcount][3];
            }
        
        lowcount++;     
     
    }
    writetothefile(highnum);
    writetothefile(' | ');
    
    var avnum = 0;
    var avcount = 0;
    for (var sup in thedata.dataset.data)
    {
        avnum = thedata.dataset.data[avcount][6] + avnum;
        avcount++;
    }
    var averagenumvar = avnum / avcount;
    writetothefile(averagenumvar);
    writetothefile(' | ');
    
    var daycount = 0;
    for (var days in thedata.dataset.data)
    {
        daycount++;
    }
    writetothefile(daycount);
    
    writetothefile('\r\n')
}
//right file