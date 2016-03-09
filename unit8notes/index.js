
var fs = require("fs");

console.log("starting...");


// just a helper function to simulate
// doing async work



//correct way fix this by looking at his code
doWorkAsync(function(err1, result1){
	console.log("STEP 1");
    	
    doWorkAsync(function(err2, result2){
		console.log("STEP 2");
		
		doWorkAsync(function(err3, result3){
            console.log("STEP 3");
        });
        console.log("STEP 3 STARTED");
        	
    });	
	console.log("STEP 2 STARTED");
    	
});	
console.log("STEP 1 STARTED");





function doWorkAsync(callback){
    
    var data = new Date().toISOString();
    fs.appendFile(".\work.txt", data, function(err){
        callback(err, data);
    });
    
}

/*basic promise syntax

var promise = new Promise(function(resolve, reject){
    
})


promise.then(function(result){
    
})

promise.then(function(result){
    
})

promise.then(function(result){
    
})

promise.catch(function(err){
    
})*/


function doWorkAsyncPromise(){
    var promise = new Promise(function(resolve, reject){
        
        //call out original async function
        //but then make sure to either call
        //our resolve or reject callbacks
        doWorkAsync(function(err, result){
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
var prom = doWorkAsyncPromise();
console.log('STEP 1 STARTED');

prom.then(function(result){
    console.log("STEP 1 DONE");
})

.then(function(){
    var prom2 = doWorkAsyncPromise();
    console.log("STEP 2 STARTED");
    return prom2;
});

prom.then(function(result){
    console.log("STEP 2 DONE");
})

.then(function(){
    var prom3 = doWorkAsyncPromise();
    console.log("STEP 3 STARTED");
    return prom3;
});

prom.catch(function(err){
    console.log(err);
});

//how to do async loops
var allPromises = [];
for(var i = 0; i < 25; i++){
    var prom = doWorkAsyncPromise();
    allPromises.push(prom);
}

Promise.all(allPromises).then(function(){
    console.log("all the promises are done!");
})
.catch(function(err){
    console.log(err);
})