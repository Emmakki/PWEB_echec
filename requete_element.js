const Partie = require('./partie.js')

// Créer une partie
const createPartie = async partiData => {
 const parti = await Partie.create(partiData)
 return parti
}

// Récupérer une partie
const findPartie = async joueur => {
 const parti = await Partie.findOne({joueur})
 return parti
}

// Récupérer toutes les parties
const findPartie = async joueur => {
 const parti = await Partie.find({})
 return parti
}
