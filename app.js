// DEPENDENCIES
const express = require("express")
const pokemonController = require("./Controllers/pokemonController.js")
const cors = require("cors")
const app = express()

// CONFIGURATION
app.use(cors())
app.use(express.json())

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon API!")
})

app.use("/pokemon", pokemonController)

module.exports = app