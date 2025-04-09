const express = require("express")
const pokemonController = require("../controllers/pokemonController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// fetch user data route
router.post("/fetchPokemonData",verifyToken, pokemonController.fetchPokemonData)

module.exports = router;