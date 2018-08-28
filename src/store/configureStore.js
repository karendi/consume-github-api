/**
 * apply the middleware and configure the store
*/

import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

const configureStore = () => {
    return createStore (
        rootReducer,
        applyMiddleware(thunk),
    );
}

export default configureStore;
