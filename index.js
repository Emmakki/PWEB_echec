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
    nom: String,
    party: JSON,
    temps_départ:   String,
  });

const utiliSchema = new Schema({
    joueur:  String,
    password: String,
    email: String,
});
//Création du model
const Partie = mongoose.model('parties', partiSchema);
const Utilisateur = mongoose.model('joueurs',utiliSchema);

//Création d'un enregistrement
const testParti = new Partie ({nom : "A"});

//Sauvegarder dans la DB
testParti.save(function (err) {
  if (err) {throw err;}
  console.log('Parti enregistrée'); 
  //Déconnexion
  mongoose.connection.close();
  console.log("Deconnecté");
})

//Récupérer un fichier
Partie.find(null, function (err, part) {
  if (err) { throw err; }
  console.log(part);
});


//Update d'un fichier
Partie.update({joueur:"Emma"}, { joueur : "Akki" }, { multi : true }, function (err) {
  if (err) { throw err; }
  console.log('Update effectué');
});

//Delete
Partie.remove({ joueur : "Akki" }, function (err) {
  if (err) { throw err; }
  console.log('Fichier supprimé');
});

