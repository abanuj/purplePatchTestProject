import { USER } from './action-types';

const getUserList = () => ({
    type: USER.GET_USER_LIST,
});

const setUserList = (list) => ({
    type: USER.SET_USER_LIST,
    list
});

const clearUserList = () => ({
    type: USER.CLEAR_USER_LIST,
});

const makeSelection = (userId) => ({
    type: USER.MAKE_SELECTION,
    userId
});


export {
    getUserList,
    setUserList,
    clearUserList,
    makeSelection
}