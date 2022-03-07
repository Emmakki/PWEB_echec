//connexion à la base de données avant le lancement du serveur
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'
const dbName = 'PWEB_echec';

MongoClient.connect(url, function(err, client) {
  console.log("Connecté à MongoDB");
  const db = client.db(dbName);
  client.close();
});

//connexion a mongoose (structurer la BD) avant lancement du serveur
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});