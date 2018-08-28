import * as types from './constants';

const INITIALSTATE = {
    getUserError: null,
    user: []
};

const getUserName = (state=INITIALSTATE, action) => {
    switch(action.type) {
        case types.GET_USER_NAME_SUCCESS:
            console.log("success");
            return {
                getUserError: null,
                user: action.payload
            };
        case types.GET_USER_NAME_FAILURE:
            return {
                getUserError: action.error,
                user: []
            };
        default:
            return state;
    }
};

export default getUserName;
