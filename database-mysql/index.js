var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'test'
});

connection.connect();

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var create = function(params, callback) {
  connection.query(`
    INSERT INTO items (quantity, description) 
    VALUES (${params.quantity}, "${params.description}")`, 
    function (err, results, fields) {
      if(err) {
        callback(err, null);
      } else {
        console.log('RESULTS is', results);
        callback(null, results);
      }
    }
  )
}



module.exports.create = create;


module.exports.selectAll = selectAll;
