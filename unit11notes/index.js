var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('C:/Temp/chinook/chinook.db');

/*/
var sql = `
SELECT * 
FROM artists
WHERE ArtistId = 9`;

db.all(sql, function(err, rows) {
    
    console.log(rows);
    
});
/*/
/*/
var sql = `
SELECT * 
FROM artists
WHERE ArtistId = ?`;

db.get(sql, 9, function(err, row) {
    
    console.log(row);
    
});
/*/

/*/
var sql = `
INSERT INTO artists (ArtistId, Name)
VALUES
("Some Test Artists)
`;

db.run(sql, function(err) {
    if(err){
        console.error(err);
    }
    
    
});
/*/
//people will do an insert then a query after to make sure it worked


var updateSql = `
UPDATE  artists
SET     Name = 'Bon Jovi'
WHERE   ArtistId = ?
`;

var selectSql = `
SELECT * 
FROM artists
WHERE ArtistId = ?`;

db.run(updateSql, 276, function(err) {
    if(err){
        console.error(err);
        return;
    }

    db.get(selectSql, 276, function(selectErr, row) {
        if(selectErr){
            console.error(selectErr);
            return;
        }
        
        console.log(row);
    
});
    
});



console.log("If i get here I'm good!");