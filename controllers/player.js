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
            height: {
                feet: 6,
                inches: 8
            },
            weight: 250,
            dominantHand: "Right"
    },
        {
            name: "Micheal Jordan",
            img: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
            position: "Shooting Guard",
            jerseyNumber: 23,
            height: {
                feet: 6,
                inches: 6
            },
            weight: 216,
            dominantHand: "Right"
    },
        {
            name: "Larry Bird",
            img: "https://www.nbcsports.com/sites/rsnunited/files/styles/responsive_background_mobile/public/gallery/hero/Bird_Larry_USATSI_4711174.jpg",
            position: "Small Forward",
            jerseyNumber: 33,
            height: {
                feet: 6, 
                inches: 9
            },
            weight: 220,
            dominantHand: "Right"
        },
        {
            name: "Stephen Curry",
            img: "https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/003/837/262/hi-res-898820109b89ef00942b098ff10379b6_crop_north.jpg",
            position: "Point Guard",
            jerseyNumber: 30,
            height: {
                feet: 6, 
                inches: 3
            },
            weight: 190,
            dominantHand: "Right"
        },
        {
            name: "Hakeen Olajuwon",
            img: "https://cdn.nba.com/manage/2017/08/hakeem-olajuwon-iso-stands.jpg",
            position: "Center",
            jerseyNumber: 34,
            height: {
                feet: 7, 
                inches: 0
            },
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

// new route - get request - /players/new
router.get("/new", (req, res) => {
    res.render("new.liquid")
})

// create - post request - /players
router.post("/", (req, res) => {
    Players.create(req.body)
    .then((player) => {
        // redirect the user back to the index route
        res.redirect("/players")
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// edit route - get request - /fruits/:id/edt
router.get("/:id/edit", (req, res) => {
    // get the id form params
    const id = req.params.id

    Players.findById(id)
    .then((player) => {
        res.render("edit.liquid", {player})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// update route
router.put("/:id", (req, res) => {
    // get the id from param
    const id = req.params.id

    // update the item with the matching id
    Players.findByIdAndUpdate(id, req.body, {new: true})
    .then((player) => {
        // redirect user back to index
        res.redirect("/players")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
})


// destroy route - delete request - /fruits/:id
router.delete("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id
    // delete the player
    Players.findByIdAndRemove(id)
    .then((player) => {
        // redirect user back to index
        res.redirect("/players")
    })
     // error handling
     .catch((error) => {
        res.json({error})
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