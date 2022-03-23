//connexion à la base de donnée
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Emmakki:PwebEchecBDtc3@pwebechec.vupjo.mongodb.net/PWEBechec?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose");
});

//fonction de recherche si mot de passe correspond au nom
function connexion(user, mdp){
    var j = Utilisateur.find(null);
    j.where('joueur',user);
    j.exec(function (err,joue){
        if (err){throw err;}
        //Vérifie si le nom existe
        if (joue.length == 0) {
            console.log("N'existe pas");
        } else if (joue.password == mdp ) {
            console.log("connexion valide");
        } else {
            console.log("connexion invalide");
        }

    });
}

//fonction inscription à la base de donnée
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