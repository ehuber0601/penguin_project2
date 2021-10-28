////////////////////////
// Import Dependencies
////////////////////////
const express = require("express")
const Players = require("../models/player")

////////////////////////
// Create Router
////////////////////////
const router = express.Router()

////////////////////////
// Routes
////////////////////////

//seed route
router.get("/seed", (req, res) => {
    // array of starter players
    const startPlayers = [
        {
            name: "Lebron James",
            img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg",
            position: "Small Forward",
            jerseyNumber: 6,
            height: "6\' 8\"",
            weight: 250,
            dominantHand: "Right"
    },
        {
            name: "Micheal Jordan",
            img: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
            position: "Shooting Guard",
            jerseyNumber: 23,
            height: "6\' 6\"",
            weight: 216,
            dominantHand: "Right"
    },
        {
            name: "Larry Bird",
            img: "https://www.nbcsports.com/sites/rsnunited/files/styles/responsive_background_mobile/public/gallery/hero/Bird_Larry_USATSI_4711174.jpg",
            position: "Small Forward",
            jerseyNumber: 33,
            height: "6\' 9\"",
            weight: 220,
            dominantHand: "Right"
        },
        {
            name: "Stephen Curry",
            img: "https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/003/837/262/hi-res-898820109b89ef00942b098ff10379b6_crop_north.jpg",
            position: "Point Guard",
            jerseyNumber: 30,
            height: "6\' 3\"",
            weight: 190,
            dominantHand: "Right"
        },
        {
            name: "Hakeen Olajuwon",
            img: "https://cdn.nba.com/manage/2017/08/hakeem-olajuwon-iso-stands.jpg",
            position: "Center",
            jerseyNumber: 34,
            height: "7\' 0\"",
            weight: 190,
            dominantHand: "Right"
        },

    ];

    // delete players
    Players.deleteMany({})
    .then((data) => {
        // seed the starter players
        Players.create(startPlayers)
        .then((data) => {
            res.json(data)
        })
    })
})

// index route - get - /players
router.get("/", (req, res) => {
    // find all the players
    Players.find({})
    .then((players) => {
        // render the index template with the fruits
        res.render("index.liquid", {players})
    })
    // error handling
    .catch((error) => {
        res.json((error))
    })
})

// show route - get - /players/:id
router.get("/:id", (req,res) => {
    const id = req.params.id

    // get that particular player from the databse
    Players.findById(id)
    .then((player) => {
        res.render("show.liquid", {player})
    })
    .catch((error) => {
        res.json({error})
    })
})


module.exports= router