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
/*
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
*/

  // test inscription et connexion
//fonction inscription pour ajouter un utilisateur dans la base de donnée
function inscription (user, mdp, mail){
  var j = Utilisateur.find(null);
  j.where('joueur',user);
  j.exec(function (err,joue){
      if (err){throw err;}
      if (joue.length == 0) {
          const compte = new Utilisateur({
              joueur : user,
              password : mdp,
              email: mail

          });
          compte.save(function(err){
              if (err) {throw err;}
              console.log ('Utilisateur sauvegardé');
              mongoose.connection.close();
          });
      }else {
          console.log("Nom d'utilisateur existe déjà");
      }
  });
}

//fonction connexion pour vérifier si un utilisateur existe et le mot de pass associé est le bon
function connexion(user, mdp){
  var j = Utilisateur.find(null);
  j.where('joueur',user);
  j.exec(function (err,joue){
      if (err){throw err;}
      //Vérifie si le nom existe
      if (joue.length == 0) {
          console.log("N'existe pas");
      //Vérifie si c'est le bon mot de pass
      } else if (joue[0].password == mdp ) {
          console.log("connexion valide");
      } else {
          console.log("connexion invalide");
      }

  });
}




