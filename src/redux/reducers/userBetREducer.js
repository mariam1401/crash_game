import {REQUEST_STATUSES} from "../../utilis/constant";
import {
    USER_BET_FAIL,
    USER_BET_REQUEST,
    USER_BET_SUCCESS,
    USER_CASH_OUT_REQUEST,
    USER_CASH_OUT_SUCCESS
} from "../types/bet_actionType";

const initialState={
    status:'initial',
    data:[],
    error:'',
}
const userBetReducer =(state= initialState,action) =>{

    switch (action.type){
        case USER_BET_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: '',data:[]}
        case USER_BET_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: ''}
        case USER_BET_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload}
    }
    return state
}

const userCashOutReducer =(state= initialState,action) =>{

    switch (action.type){
        case USER_CASH_OUT_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: '',data:[]}
        case USER_CASH_OUT_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: ''}
        case USER_BET_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload}
    }
    return state
}

export {userBetReducer,userCashOutReducer}