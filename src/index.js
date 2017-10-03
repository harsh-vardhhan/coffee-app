//@flow
import React from 'react';
import ReactDOM from 'react-dom';

//$FlowFixMe
import './../node_modules/grommet/grommet-hpe.min.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

//$FlowFixMe
const store = configureStore();

ReactDOM.render(

    //$FlowFixMe
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
