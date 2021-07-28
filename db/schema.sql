DROP DATABASE IF EXISTS pokemon_dev;
CREATE DATABASE pokemon_dev;

\c pokemon_dev;

CREATE TABLE pokemons (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    hp INT, 
    type TEXT, 
    move TEXT, 
    atk INT, 
    def INT, 
    spd INT
);