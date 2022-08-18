import { combineReducers } from 'redux';
import {userAuthReducer,userAuthRefreshReducer} from './userAuthReducer';
import {userBetReducer, userCashOutReducer} from "./userBetREducer";

const rootReducer = combineReducers({
    userAuth: userAuthReducer,
    userAuthRefresh:userAuthRefreshReducer,
    userBet:userBetReducer,
    userCashOut:userCashOutReducer
});
export default rootReducer