import {call,put,takeLatest,all} from "redux-saga/effects";
import axios from "axios";
import {userAuthRefreshAsyncFail, userAuthRefreshAsyncSuccess} from "../actions/userAuthAction";
import {AUTH_REFRESH_REQUEST} from "../types/auth_actionType";


export function* userAuthRefresh({payload}) {
    try {
        // debugger;
        const response =  yield call(axios.post, 'http://18.156.177.65:8080/auth/refresh', payload);
        yield put(userAuthRefreshAsyncSuccess(response));
    } catch (error) {
        yield put(userAuthRefreshAsyncFail(error.message));
    }
}

export default function* storesSagas() {
    yield all([
        takeLatest(AUTH_REFRESH_REQUEST, userAuthRefresh),
    ]);
}