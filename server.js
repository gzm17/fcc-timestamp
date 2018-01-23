// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:date", function (request, response) {
  let date = request.params.date; //date is a string
  let d;
  if(/^[A-Za-z]+/.test(date)) d = new Date(date); //for unix time, it must be a number. This block tests if string contains letters
  else d = new Date(date*1); 

  if(d != "Invalid Date") {
    let y = d.getFullYear();
    let m = d.getMonth();
    let day = d.getDay();
    
    obj.unix = d.getTime();
    obj.natural = months[m] + " " + day +", "+ y;
  }
  else {
    obj.unix = null;
    obj.natural = null;
  }

  response.send(JSON.stringify(obj));
});

let obj = { "unix": 0, "natural": "" };
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
