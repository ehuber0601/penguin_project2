/////////////////////////////
// Import Dependencies
/////////////////////////////
const mongoose = require("mongoose")
const Players = require("./player")

//////////////////////////////
// Seed Code
//////////////////////////////

// save the connection into variable
const db = mongoose.connection

// make sure code doesn't run until connection is open
db.on("open", () => {
    // array of starter fruits
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
    Players.deleteMany({}).then((data) => {
        // seed the starter players
        Players.create(startPlayers).then((data) => {
            console.log(data)
            db.close()
        })
    })
})