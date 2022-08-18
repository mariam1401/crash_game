import { all} from "redux-saga/effects";
import watcherSagaUserAuth from "./saga/userAuth";
import watcherSagaUserAuthRefresh from './saga/userAuthRefresh'
import watcherSagaUserBet from './saga/userBet'
import watcherSagaUserCashOut from './saga/userCashOut'


export default function* rootSaga() {
    yield all([
        watcherSagaUserAuth(),
        watcherSagaUserAuthRefresh(),
        watcherSagaUserBet(),
        watcherSagaUserCashOut()
    ]);
}

