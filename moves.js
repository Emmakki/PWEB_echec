const mongoose = require("mongoose");

const movesSchema = new mongoose.Schema({ // prends des objets des keys , ici on définit le type 
    player : String,
    carte : String,
    lastmove : String

})

module.exports = mongoose.model("moves",movesSchema)