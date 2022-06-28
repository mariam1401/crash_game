import {
    AUTH_FAIL,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_REFRESH_SUCCESS,
    AUTH_REFRESH_REQUEST,
    AUTH_REFRESH_FAIL
} from "../types/auth_actionType";
import {USER_CASH_OUT_FAIL, USER_CASH_OUT_REQUEST, USER_CASH_OUT_SUCCESS} from "../types/bet_actionType";

export const userAuthAsync = (data)=> {
    return {
        type: AUTH_REQUEST,
        payload: data
    }
}
export const userAuthAsyncSuccess = (token)=> {
    return {
        type: AUTH_SUCCESS,
        payload: token
    }
}
export const userAuthAsyncFail = (err)=> {
    return {
        type: AUTH_FAIL,
        payload: err
    }
}

export const userAuthRefreshAsync = (data)=> {
    return {
        type: AUTH_REFRESH_REQUEST,
        payload: data
    }
}
export const userAuthRefreshAsyncSuccess = (token)=> {
    return {
        type: AUTH_REFRESH_SUCCESS,
        payload: token
    }
}
export const userAuthRefreshAsyncFail = (err)=> {
    return {
        type: AUTH_REFRESH_FAIL,
        payload: err
    }
}

export const userCashOutAsync = (data)=> {
    return {
        type: USER_CASH_OUT_REQUEST,
        payload: data
    }
}
export const userCashOutAsyncSuccess = (data)=> {
    return {
        type: USER_CASH_OUT_SUCCESS,
        payload: data
    }
}
export const userCashOutAsyncFail = (err)=> {
    return {
        type: USER_CASH_OUT_FAIL,
        payload: err
    }
}