const Pokemon = require("../models/pokemonModel"); 

const getPokemonsByIds = async (pokemonIds) => {
  try {
    const pokemons = await Pokemon.find({ _id: {$in: pokemonIds} });
    return pokemons;
  } catch (error) {
    throw new Error("Error retrieving pokemon: " + error.message);
  }
};

module.exports = { getPokemonsByIds };
