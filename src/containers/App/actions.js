import axios from 'axios';
import { url } from '../../config/config';
import * as types from './constants';

const getUserSuccess = (payload) => {
    return { type: types.GET_USER_NAME_SUCCESS, payload };
}

const getUserFailure = (error) => {
    return { type: types.GET_USER_NAME_FAILURE, error};
}

const getUsers = (name) => {
    return (dispatch) => {
        return(
            axios.get(`${url}/users/${name}`)
            .then((response) =>{
                dispatch(getUserSuccess(response));
            })
            .catch((error)=>{
                dispatch(getUserFailure(error));
            })
        );
    };
};

export default getUsers;
