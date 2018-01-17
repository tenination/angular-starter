var express = require('express');
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.listen(port, function() {
  console.log('listening on port 3000!');
});


// DROP DATABASE IF EXISTS test;

// CREATE DATABASE test;

// USE test;

// CREATE TABLE items (
//   id int NOT NULL AUTO_INCREMENT,
//   quantity integer NOT NULL,
//   description varchar(50) NOT NULL,
//   PRIMARY KEY (ID)
// );
