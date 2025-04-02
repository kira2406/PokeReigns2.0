import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { 
  loginRequest, loginSuccess, loginFailure, 
  registerRequest, registerSuccess, registerFailure, 
  logout, 
  verifyTokenRequest,
  verifyTokenSuccess,
  verifyTokenFailure
} from "../reducers/authReducer";
import axiosInstance from "../../utils/axiosInstance";

const API_URL = import.meta.env.VITE_POKEREIGNS_BACKEND_URL;

function* verifyTokenSaga() {
    const token = localStorage.getItem('token') || true;
  
    if (token) {
      try {
        console.log("token", token)
        const response = yield call(axiosInstance.post, '/auth/verifyToken');
        if (response?.data?.valid){
            yield put(verifyTokenSuccess(response?.data))    
        }
        else{
            yield put(verifyTokenFailure("Invalid token"));
        }
      } catch (error) {
        yield put(verifyTokenFailure(error.message));
      }
    } else {
      yield put(verifyTokenFailure('No token found')); // If no token, dispatch failure
    }
  }

function* loginSaga(action) {
  try {
    // yield put(setLoading(true));
    const response = yield call(axios.post, `${API_URL}/auth/login`, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || "Login failed!"));
  } finally {
    // yield put(setLoading(false));
  }
}

function* registerSaga(action) {
  try {
    // yield put(setLoading(true));
    const response = yield call(axios.post, `${API_URL}/auth/register`, action.payload);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error.response?.data?.message || "Registration failed!"))
  } finally {
    // yield put(setLoading(false));
  }
}

function* logoutSaga() {
//   yield put(showNotification({ type: "success", message: "Logged out successfully!" }));
}

export function* watchAuth() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(registerRequest.type, registerSaga);
  yield takeLatest(logout.type, logoutSaga);
  yield takeLatest(verifyTokenRequest.type, verifyTokenSaga);
}
