import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInstance";
import { fetchPokemonDataRequest, fetchPokemonDataSuccess, fetchPokemonDataFailure } from "../reducers/pokemonReducer";

function* fetchPokemonDataSaga(action) {
      try {
        const { pokemon_ids } = action.payload;
        console.log("pokemonIds", pokemon_ids)
        const payload = {
            "pokemon_ids": pokemon_ids
        }
        const response = yield call(axiosInstance.post, '/poke/fetchPokemonData', payload);
        if (response?.data?.pokemons){
            yield put(fetchPokemonDataSuccess(response?.data?.pokemons))    
        }
        else{
            yield put(fetchPokemonDataFailure("Invalid token"));
        }
      } catch (error) {
        yield put(fetchPokemonDataFailure(error.message));
      }
  }

  export function* watchPokemon() {
    yield takeLatest(fetchPokemonDataRequest.type, fetchPokemonDataSaga);
  }