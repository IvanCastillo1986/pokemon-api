const db = require("../db/dbConfig.js")


const getAllPokemon = async () => {
    try {
        const allPokemon = await db.any("SELECT * FROM pokemons;")
        return allPokemon
    } catch (c) {
        return c
    }
}

const getOnePokemon = async (id) => {
    try {
        const onePokemon = await db.one("SELECT * FROM pokemons WHERE id=$1;", id)
        return onePokemon
    } catch (c) {
        return c
    }
}

const createPokemon = async (pokemon) => {
    try {
        const newPokemon = await db.one('\
        INSERT INTO pokemons (name, hp, type, move, atk, def, spd) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
        [pokemon.name, pokemon.hp, pokemon.type, pokemon.move, pokemon.atk, pokemon.def, pokemon.spd]
        )
        return newPokemon
    } catch (c) {
        return c
    }
}

const deletePokemon = async (id) => {
    try {
        const deletedPokemon = await db.one('DELETE FROM pokemons WHERE id=$1 RETURNING *;', id)
        return deletedPokemon
    } catch (c) {
        return c
    }
}

const updatePokemon = async (pokemon, id) => {
    try {
        const updatedPokemon = await db.one('\
        UPDATE pokemons SET name=$1, hp=$2, type=$3, move=$4, atk=$5, def=$6, spd=$7 WHERE id=$8 RETURNING *;',
        [pokemon.name, pokemon.hp, pokemon.type, pokemon.move, pokemon.atk, pokemon.def, pokemon.spd, id]
        )
        return updatedPokemon
    } catch (c) {
        return c
    }
}


module.exports = {
    getAllPokemon,
    getOnePokemon,
    createPokemon,
    deletePokemon,
    updatePokemon
}