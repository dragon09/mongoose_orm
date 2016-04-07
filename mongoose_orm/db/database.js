var mongoose = require('mongoose');
//connects us to db
var connectionString = process.env.DB;
console.log('Attempting to connect to MongoDB');
mongoose.connect(connectionString); //connects to db supplied in connectionString

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + process.env.DB);
});

mongoose.connection.on('error', function(error) {
  console.log('Mongoose has connection error: ' + error);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected!');
});

//listen for the 'error' and 'disconnected' event, log out something when either occur, kill server, which event fired. restart server, go find terminal tab
//running sudo mongod, kill it, which fired? when done..restart sudo mongod and
//get ready for block #2
