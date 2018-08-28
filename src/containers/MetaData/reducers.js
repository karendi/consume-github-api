import * as types from './constants';

const INITIALSTATE = {
    metaData: [],
    errorMetaData: null
}

const getMetaData = (state=INITIALSTATE, action) => {
    switch(action.type) {
        case types.GET_METADATA_FAILURE:
            return {
                errorMetaData: action.error,
                metaData: []
            };
        case types.GET_METADATA_SUCCESS:
            return {
                errorMetaData: null,
                metaData: action.payload
            };
        default:
            return state;
    }
}

export default getMetaData;
