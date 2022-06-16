import {
    AUTH_FAIL,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_REFRESH_SUCCESS,
    AUTH_REFRESH_REQUEST,
    AUTH_REFRESH_FAIL
} from "../types/auth_actionType";

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