import { put, select, takeEvery, call } from 'redux-saga/effects';
import {
   USER,
   setUserList
} from '../actions';
import { apiUserList } from "../../api";


function* handleUserListGet() {
    try {
         const response = yield call(apiUserList);
        
         const {results} = response;
         const {data} = results;
        if (response.count > 0) {
            console.log(response);
yield put(setUserList(data));
        }

//             console.log(response);
// yield put(setMasterLoginData(response.payload))
//             yield put(setLoggedInStatus());
//         }
//         else {
//             yield put(setLoginMessage('Something Went Wrong'));
//         }
    } catch (error) {
        //yield put(setLoginMessage(error.message));
    }
};

export function* watchUsergetList() {
    yield takeEvery(USER.GET_USER_LIST, handleUserListGet);
};


