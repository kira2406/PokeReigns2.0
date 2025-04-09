const pokemonService = require("../services/pokemonService")

const fetchPokemonData = async (req, res) => {
    try {
        const {pokemon_ids} = req.body
        const pokemonData = await pokemonService.getPokemonsByIds(pokemon_ids)
        return res.status(200).json({ status: "success", pokemons: pokemonData});
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {fetchPokemonData}