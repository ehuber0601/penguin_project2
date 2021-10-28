// import deps
const express = require("express")
require("dotenv").config()
const methodOverride = require("method-override")
const path = require("path")
const PlayersRouter = require("./controllers/player")


// liquid
const liquid = require("liquid-express-views")

const viewsFolder = path.resolve(__dirname, "views/")
// app object
const app = liquid(express(), {root: viewsFolder})

////////////////////////////
// Register Our Middleware
////////////////////////////
// ability to override request methods
app.use(methodOverride("_method"))
// ability to parse urlencoded from form submission
app.use(express.urlencoded({extended:true}))
// setup our public folder to serve files staically
app.use(express.static("public"))

// route
app.get("/", (req, res) => {
    res.render("index.liquid")
})

// Register Players Router
app.use("/players", PlayersRouter)

//

// listen
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))