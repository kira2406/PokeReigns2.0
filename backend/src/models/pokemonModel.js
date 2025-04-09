const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true,
    },
    experience_growth: {
      type: Number,
      required: true,
    },
    is_legendary: {
      type: Boolean,
      required: true,
    },
    type2: {
      type: String,
      required: true,
    },
    weight_kg: {
      type: Number,
      required: true,
    },
    hp: {
      type: Number,
      required: true,
    },
    type1: {
      type: String,
      required: true,
    },
    sp_defense: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    defense: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sp_attack: {
      type: Number,
      required: true,
    },
  });

const Pokemon = mongoose.model("Pokemon", pokemonSchema, 'pokemondb');

module.exports = Pokemon;
