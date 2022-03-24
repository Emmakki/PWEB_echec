const { app } = require('cli');
const moves = require("./moves");
const mongoose = require('mongoose');
const urli = 'mongodb+srv://salahid:salah@cluster0.3s38u.mongodb.net/Player?retryWrites=true&w=majority' ;
mongoose.connect(urli)
    .then((result)=> console.log("conected"))
    .catch((err)=>console.log(err));
// au debut du jeu on crée moves avec l'emplacement initial sur le plateau de chaque joeur 
//const move =new moves({player : "salah" , carte: " une caete sous forme string" , lastmove : " dernier move en string " });
//move.save().then(()=> console.log(move));