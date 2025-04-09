import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pokemonReducer from "./pokemonReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  pokemon: pokemonReducer
});

export default rootReducer;
