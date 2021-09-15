import { all, fork } from "redux-saga/effects";
import { watchUsergetList } from './user-saga';

export default function* rootSaga() {
    yield all([
        fork(watchUsergetList),
    ]);
}