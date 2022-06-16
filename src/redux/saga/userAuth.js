import {call,put,takeLatest,all} from "redux-saga/effects";
import axios from "axios";
import {userAuthAsyncFail, userAuthAsyncSuccess} from "../actions/userAuthAction";
import {AUTH_REQUEST} from "../types/auth_actionType";


export function* userAuth({payload}) {
    try {
        // debugger;
      const response =  yield call(axios.post, 'http://18.156.177.65:8080/auth', payload);
        yield put(userAuthAsyncSuccess(response));
    } catch (error) {
        yield put(userAuthAsyncFail(error.message));
    }
}

export default function* storesSagas() {
    yield all([
        takeLatest(AUTH_REQUEST, userAuth),
    ]);
}