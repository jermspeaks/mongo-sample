// Retrieve
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/movie';

// Connect to the db
MongoClient.connect(url, function(err, db) {
  // Error case
  if (err) {
    return console.dir(err);
  }

  var collection = db.collection('watched');

  collection.update({genres: /,/}, update, {w:1, multi: true}, function(err, results) {
    console.log(results);
  });

  db.close();
});