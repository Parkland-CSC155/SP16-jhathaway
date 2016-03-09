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




function ReadTheFilesPromise(){
    var promise = new Promise(function(resolve, reject){
        
        //call out original async function
        //but then make sure to either call
        //our resolve or reject callbacks
        ReadTheFiles(function(err, result){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }            
            
        })
        
    })
    
    return promise;
}





//promises with then statements
var prom = ReadTheFilesPromise();
console.log('STEP 1 STARTED');

prom.then(function(result){
    console.log("STEP 1 DONE");
})

.then(function(){
    var prom2 = ReadTheFilesPromise();
    console.log("STEP 2 STARTED");
    return prom2;
});

prom.then(function(result){
    console.log("STEP 2 DONE");
})

.then(function(){
    var prom3 = ReadTheFilesPromise();
    console.log("STEP 3 STARTED");
    return prom3;
})
.catch(function(err){
    console.log(err);
});





//how to do async loops
var allPromises = [];
for(var i = 0; i < 25; i++){
    var prom = ReadTheFilesPromise();
    allPromises.push(prom);
}

Promise.all(allPromises).then(function(){
    console.log("all the promises are done!");
})
.catch(function(err){
    console.log(err);
})


//function to start off the reading of the files
function readdirPromise(dir){
    var promise = new Promise(function(resolve, reject){
        
        
        
        fs.readdir(dir, function(err, files){
            if(err)
                reject(err);
            else
                resolve(files);
        });
    });    
    return promise;
}


//function to rename the files
function renamePromise(oldPath, newPath){
    var promise = new Promise(function(resolve, reject){
        
        fs.rename(oldPath, newPath, function(err, files){
            if(err)
                reject(err);
            else
                resolve();
        });
    });    
    return promise;
}


console.log("DONE!");