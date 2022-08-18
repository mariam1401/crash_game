import {USER_BET_FAIL, USER_BET_REQUEST, USER_BET_SUCCESS} from "../types/bet_actionType";


export const userBetAsync = (data)=> {
    return {
        type: USER_BET_REQUEST,
        payload: data
    }
}
export const userBetAsyncSuccess = (data)=> {
    return {
        type: USER_BET_SUCCESS,
        payload: data
    }
}
export const userBetAsyncFail = (err)=> {
    return {
        type: USER_BET_FAIL,
        payload: err
    }
}