import { combineReducers } from "redux";
import userDataListReducers from "./userList";
import selectedListReducers from './selectedList';

const userReducers = combineReducers({
    userDataList: userDataListReducers,
    selectedList: selectedListReducers
});

export { userReducers };