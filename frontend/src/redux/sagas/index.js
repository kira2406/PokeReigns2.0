import { all } from "redux-saga/effects";
import { watchAuth } from "./authSaga";
import { watchUser } from "./userSaga";
import { watchPokemon } from "./pokemonSaga";

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchUser(),
    watchPokemon()
  ]);
}
