import { USER } from '../../actions';

const selectedListReducers = (state = [], action) => {
    switch (action.type) {
        case USER.MAKE_SELECTION:
            if (state.includes(action.userId)) {
                const index = state.indexOf(action.userId);
                state.splice(index, 1);
                return [...state]
            } else {
                return [...state, action.userId];
            }
        case USER.CLEAR_USER_LIST:
            return [];
        default:
            return state;
    }
};

export default selectedListReducers;
