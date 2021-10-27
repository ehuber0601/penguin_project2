/////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////
require("dotenv").config() // Loading .env variables
const mongoose = require("mongoose")

/////////////////////////////////
// Establish Database Connection
/////////////////////////////////
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("disconnected from mongo"))
.on("error", (error) => console.log(error))

//////////////////////////////
// Export the Connection
//////////////////////////////
module.exports = mongoose