/**
 * combine all the reducers from the container components
*/
import { combineReducers } from 'redux';
import getUserName from '../../src/containers/App/reducers';
import getMetaData from '../../src/containers/MetaData/reducers';

const rootReducer = combineReducers({
    getUserName,
    getMetaData
});

export default rootReducer;
