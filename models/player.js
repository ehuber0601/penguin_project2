//////////////////////////
// Import Dependencies
//////////////////////////
const mongoose = require("./connection")
// destructuring Schema and model
const {Schema, model} = mongoose

//////////////////////////////
// Make Schema for Players
//////////////////////////////
const playerSchema = new Schema({
    name: String,
    img: String,
    position: String,
    jerseyNumber: Number,
    height: String,
    weight: Number,
    dominantHand: String,
})

//make the model
const Players = model("Players", playerSchema)


// export model
module.exports = Players