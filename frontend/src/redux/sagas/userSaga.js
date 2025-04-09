import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInstance";
import { fetchUserDataFailure, fetchUserDataRequest, fetchUserDataSuccess } from "../reducers/authReducer";

function* fetchUserDataSaga() {
      try {
        const response = yield call(axiosInstance.post, '/user/fetchUserData');
        if (response?.data?.user){
            yield put(fetchUserDataSuccess(response?.data))    
        }
        else{
            yield put(fetchUserDataFailure("Invalid token"));
        }
      } catch (error) {
        yield put(fetchUserDataFailure(error.message));
      }
  }

  export function* watchUser() {
    yield takeLatest(fetchUserDataRequest.type, fetchUserDataSaga);
  }
  