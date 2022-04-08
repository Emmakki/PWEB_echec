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
    party: String,
    temps_départ:   String,
    statut: String,
    Joueur1: String,
    Joueur2: String,
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

//fonction création d'une partie
function creaParti (n, joueur, invite) {
  const p = new Partie ({nom : n, party: "",temps_départ: "test",statut: "En Attente",Joueur1: joueur,Joueur2: invite});
  p.save(function (err) {
    if (err) {throw err;}
    console.log('Parti enregistrée'); 
  })
}
//creaParti("test","Akki","ami");

// afficher les parties en attente d'un joueur
function partiEnAttente (pseudo){
  Partie.find({Joueur2: pseudo}, function (err, part) {
    if (err) { throw err; }
    for(i=0;i<part.length;i++){
      if (part[i].statut=="En Attente") {
        console.log (part[i]);
     }
    }
  });
}
//partiEnAttente("ami");

//afficher les partie en cours pour un utilisateur donné
function partiEnCour (nomJ){
  var enCours = 0;
  Partie.find({Joueur1: nomJ}, function (err, part) {
    if (err) { throw err; }
    for(i=0;i<part.length;i++){
      if (part[i].statut=="En Cours") {
        console.log (part[i]);
        enCours += 1;
     }
    }
  });
  
  Partie.find({Joueur2: nomJ}, function (err, part) {
    if (err) { throw err; }
    for(i=0;i<part.length;i++){
      if (part[i].statut=="En cours") {
        console.log (part[i]);
        enCours += 1;
     }
    }
    if (enCours == 0){
      console.log("Aucune partie en cours")
    }
  });
}
//partiEnCour("QQUN");

//Affichage partie
function afficheParti (idP) {
  Partie.find({_id: idP}, function (err, part) {
    if (err) { throw err; }
    console.log("Nom: ", part[0].nom);
    console.log("Coups joués: ", part[0].party);
    console.log("Statut de la partie: ", part[0].statut);
    console.log("Joueur 1:  ", part[0].Joueur1);
    console.log("Joueur 2:  ", part[0].Joueur2);
  });
}
//afficheParti("624d95975308896197da48c9");

/*
//Réccupérer l'id parti
function idP (nomP, J1, J2){
    return Partie.find({nom: nomP, Joueur1: J1, Joueur2: J2}, function (err, part) {
      if (err) { throw err; }
      return part[0]._id;
  });
}

console.log(idP("2","QQUN",""));
*/





