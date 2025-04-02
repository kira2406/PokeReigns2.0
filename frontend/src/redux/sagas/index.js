import { all } from "redux-saga/effects";
import { watchAuth } from "./authSaga";
// import { watchFetchData } from "./appSaga"; // If you have other sagas

export default function* rootSaga() {
  yield all([
    watchAuth(),
    // watchFetchData(), // Other sagas
  ]);
}
