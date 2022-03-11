/*
//connexion à la base de données avant le lancement du serveur
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'
const dbName = 'PWEB_echec';

MongoClient.connect(url, function(err, client) {
  console.log("Connecté à MongoDB");
  const db = client.db(dbName);
  client.close();
});
*/

//connexion a mongoose (structurer la BD) avant lancement du serveur
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Emmakki:PwebEchecBDtc3@pwebechec.vupjo.mongodb.net/PWEBechec?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose");
});

//Création Schéma enregistrement d'une partie
const Schema = mongoose.Schema;
const partiSchema = new Schema({
    joueur:  String,
    party: JSON,
    temps_départ:   String,
  });
//Création du model
const Partie = mongoose.model('parties', partiSchema)

//Création d'un enregistrement
const testParti = new Partie ({joueur : "Emma"});

//Sauvegarder dans la DB
testParti.save(function (err) {
  if (err) {throw err;}
  console.log('Parti enregistrée');
  //Déconnexion
  mongoose.connection.close();
})