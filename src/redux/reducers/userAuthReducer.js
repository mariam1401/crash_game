import {
    AUTH_FAIL, AUTH_REFRESH_FAIL,
    AUTH_REFRESH_REQUEST,
    AUTH_REFRESH_SUCCESS,
    AUTH_REQUEST,
    AUTH_SUCCESS
} from "../types/auth_actionType";
import {REQUEST_STATUSES} from "../../utilis/constant";

const initialState={
    status:'initial',
    data:[],
    error:'',
}
const userAuthReducer =(state= initialState,action) =>{

    switch (action.type){
        case AUTH_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: '',data:[]}
        case AUTH_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: ''}
        case AUTH_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload}
    }
    return state
}
const userAuthRefreshReducer =(state= initialState,action) =>{

    switch (action.type){
        case AUTH_REFRESH_REQUEST:
            return{...state, status:REQUEST_STATUSES.LOADING, error: '',data:[]}
        case AUTH_REFRESH_SUCCESS:
            return{...state, data:action.payload,status:REQUEST_STATUSES.SUCCESS,error: ''}
        case AUTH_REFRESH_FAIL:
            return {...state,status: REQUEST_STATUSES.ERROR,error: action.payload}
    }
    return state
}
export {userAuthReducer,userAuthRefreshReducer}