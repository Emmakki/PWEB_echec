//Shema des objets dans la BD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partiSchema = new Schema({
    joueur:  String,
    party: JSON,
    temps_départ:   String,
  });

const Partie = mongoose.model('Partie', partiSchema)

module.exports = Partie