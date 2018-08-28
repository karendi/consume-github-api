import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    ( <Provider store={store}>
        <MuiThemeProvider>
             <App/>
        </MuiThemeProvider>
        </Provider>
    ), 
    document.getElementById('app')
);
