var http = require('http');
var fs = require('fs');
//Port
var PORT = process.env.port || 3000;

function handleRequest(request, response){   

    
    //GET: /someJson
    if(request.url.indexOf("quotes") > -1){
        var jsonPath = "./data/quotes.json"
        var readingthefile = fs.readFile(jsonPath, (err, data)=>{
            if (err) throw err;
            obj = JSON.parse(data);
            json = JSON.stringify(obj);
            response.setHeader("Content-Type", "application/json");
            response.end(json);
            return;
        })
      
    }
    
    else{
        //html if the json request didn't happen
        var html = `
<html>
<head></head>
<body>
    <p>Hello World!</p>
</body>
</html>`;
        
        response.setHeader("Content-Type", "text/html");
        response.end(html);
        return;
    }
    
    
    
}

var server = http.createServer(handleRequest);

//start server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});