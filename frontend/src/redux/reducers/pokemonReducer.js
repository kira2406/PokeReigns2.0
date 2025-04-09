import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: {},
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
      fetchPokemonDataRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchPokemonDataSuccess: (state, action) => {
        const pokemons = action.payload;
        pokemons.forEach(pokemon => {
            state.pokemons[pokemon._id] = pokemon;
        });
        state.loading = false;
        state.error = null
      },
      fetchPokemonDataFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
      }
    }
})

export const {
    fetchPokemonDataRequest,
    fetchPokemonDataSuccess,
    fetchPokemonDataFailure,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;