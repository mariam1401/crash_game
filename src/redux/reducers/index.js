import { combineReducers } from 'redux';
import {userAuthReducer,userAuthRefreshReducer} from './userAuthReducer';
import {userBetReducer} from "./userBetREducer";

const rootReducer = combineReducers({
    userAuth: userAuthReducer,
    userAuthRefresh:userAuthRefreshReducer,
    userBet:userBetReducer,
});

export default rootReducer