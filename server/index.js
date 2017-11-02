var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mysql');


var app = express();
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/items', function(req, res) {

	var asteroid_id = req.body.asteroid_id;
	var comment = req.body.comment;

	items.create({
		quantity:asteroid_id,
		description:comment
	}, function(err, data) {
		if (err) {
			console.log(err);
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});


})

app.listen(3000, function() {
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
