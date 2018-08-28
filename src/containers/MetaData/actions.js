import axios from 'axios';
import * as types from './constants';

const getMetaDataSuccess = (payload) => {
    return {
        type: types.GET_METADATA_SUCCESS, payload
    };
}

const getMetaDataFailure = (error) => {
    return {
        type: types.GET_METADATA_FAILURE, error
    };
}

const getMetaData = () => {
    return (dispatch) => {
        return (
            axios.get()
            .then((response)=>{
                dispatch(getMetaDataSuccess(response))
            })
            .catch((error)=>{
                dispatch(getMetaDataFailure(error))
            })
        );
    }
}

export default getMetaData;
