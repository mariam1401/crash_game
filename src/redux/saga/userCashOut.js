import {call,put,takeLatest,all} from "redux-saga/effects";
import axios from "axios";
import {USER_CASH_OUT_REQUEST} from "../types/bet_actionType";
import {userCashOutAsync, userCashOutAsyncFail, userCashOutAsyncSuccess} from "../actions/userAuthAction";


export function* userBet({payload}) {
    try {
        // debugger;
        const response =  yield call(axios.get, 'http://18.156.177.65:8080/crash/cash_out',
            {
                headers: {Authorization:'Bearer ' + localStorage.getItem("access_token"),
                    "Content-Type": "application/json",
                    accept: "application/json"
                }});
        yield put(userCashOutAsyncSuccess(response));
    } catch (error) {
        yield put(userCashOutAsyncFail(error.message));
    }
}

export default function* storesSagas() {
    yield all([
        takeLatest(USER_CASH_OUT_REQUEST, userBet),
    ]);
}