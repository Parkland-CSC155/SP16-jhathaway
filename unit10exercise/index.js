// requires
var request = require("request");

var urls = [
    "https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_GOOG.json",
    "https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_MSFT.json",
    "https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_AAPL.json"
];
var count = 0;
console.log("starting....");
console.log("requesting URL: https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_GOOG.json");
console.log("requesting URL: https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_MSFT.json");
console.log("requesting URL: https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_AAPL.json");
/*/
request("http://www.google.com", function(error, response, body) {
    if(!error && response.statusCode == 200) {
        console.log(body)
    }
});
/*/

request("https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_GOOG.json", function(error, response, body) {
    if(!error && response.statusCode == 200) {
        var parsedJson = JSON.parse(body);
        console.log("");
        console.log(parsedJson.dataset.description);
    }
    count++;
    if(count == 3)
    {
        console.log("DONE!");
    }
});

request("https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_MSFT.json", function(error1, response1, body1) {
    if(!error1 && response1.statusCode == 200) {
        var parsedJson1 = JSON.parse(body1);
        console.log("");
        console.log(parsedJson1.dataset.description);
    }
    count++;
    if(count == 3)
    {
        console.log("DONE!");
    }
});

request("https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_AAPL.json", function(error2, response2, body2) {
    if(!error2 && response2.statusCode == 200) {
        var parsedJson2 = JSON.parse(body2);
        console.log("");
        console.log(parsedJson2.dataset.description);
    }
    count++;
    if(count == 3)
    {
        console.log("DONE!");
    }
});
