var express = require('express');
var app = express();
var routes = require('./routes');

var PORT = process.env.port || 3000;

app.set('view engine', 'ejs');

app.locals.pagetitle = "Awesome Website";

app.get('/', routes.index);
app.get('/about', routes.about);


/*/
app.get('/who/:name?', function(req, res){
    var name = req.params.name;
    res.send(name + ' was here');
});

app.get('/who/:name?/:title?', function(req, res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
});
/*/

app.get('*', function(req, res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('Bad Route');
});

var server = app.listen(PORT, function(){
    console.log('Listening on port 3000');
});
