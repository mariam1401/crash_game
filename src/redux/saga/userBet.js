import {call,put,takeLatest,all} from "redux-saga/effects";
import axios from "axios";
import {USER_BET_REQUEST} from "../types/bet_actionType";
import {userBetAsyncFail, userBetAsyncSuccess} from "../actions/userBetAction";


export function* userBet({payload}) {
    try {
        // debugger;
        const response =  yield call(axios.post, 'http://18.156.177.65:8080/crash/bet',payload,
            {
                headers: {Authorization:'eyJhbGciOiJIUzUxMiJ9.eyJ0eXBlIjoiQUNDRVNTIiwiaWQiOjEsInN1YiI6InVzZXIxIiwi' +
                        'aWF0IjoxNjU0NjcyNjQ2LCJleHAiOjE2NTQ2Nzg2NDZ9.Dzis5eEVkM5SdJFkHdOjscpS_dlbYD1QQs4W-WmhupQLNCOhyJzfOSzlEgQYs0p1I9IAIg81p7Q9ZxXzDJSPsg'} }
            );
        yield put(userBetAsyncSuccess(response));
    } catch (error) {
        yield put(userBetAsyncFail(error.message));
    }
}

export default function* storesSagas() {
    yield all([
        takeLatest(USER_BET_REQUEST, userBet),
    ]);
}