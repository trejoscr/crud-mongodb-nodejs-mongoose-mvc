const mongoose = require("mongoose");
const url = 'mongodb://localhost/db_alumnos';

mongoose.connect(url, {});

const db = mongoose.connection;

db.on('errr', console.error.bind(console, 'Error to connect'));
db.once('open', function callback(){
  console.log('Connection to DB OK!!!');
});

module.exports = db;