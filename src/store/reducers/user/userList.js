import { USER } from '../../actions';

const userDataListReducers = (state = [], action) => {
    switch (action.type) {
        case USER.SET_USER_LIST:
            return [...state, ...action.list];
        case USER.CLEAR_USER_LIST:
            return [];
        default:
            return state;
    }
};

export default userDataListReducers;
