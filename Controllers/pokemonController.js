const express = require("express")
const db = require("../db/dbConfig.js")
const pokemon = express.Router()
const {
    getAllPokemon,
    getOnePokemon,
    createPokemon,
    deletePokemon,
    updatePokemon
} = require("../Queries/pokemon.js")


// Index
pokemon.get('/', async (req, res) => {
    console.log(req.query.name)
    try {
        const allPokemon = await getAllPokemon()
        res.json(allPokemon)
    }
    catch (c) {
        console.log(`Error in controller: `, c)
        res.status(400).send('Could not process request')
    }
})

// Show
pokemon.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const onePokemon = await getOnePokemon(id)
        res.json(onePokemon)
    } catch (c) {
        res.status(400).send('Could not process request')
    }
})

// Create
pokemon.post('/', async (req, res) => {
    try {
        const newPokemon = await createPokemon(req.body)
        res.json(newPokemon)
    } catch (c) {
        console.log('Error creating:', c)
        res.status(400).send('Your pokemon could not be added')
    }

})

// Delete
pokemon.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deletedPokemon = await deletePokemon(id)
        res.json(deletedPokemon)
    } catch (c) {
        console.log(`Error in controller delete: `, c)
        res.status(400).send('Could not process delete')
    }
})

// Update
pokemon.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const updatedPokemon = await updatePokemon(req.body, id)
        res.json(updatedPokemon)
    } catch (c) {
        console.log('Error in controller update: ', c)
        res.status(400).send('Could not process update')
    }
})

// Search
pokemon.get('/', (req, res) => {
    console.log(req.query.name)
})


module.exports = pokemon