//@flow
import {createStore, applyMiddleware} from 'redux';

//$FlowFixMe
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

//$FlowFixMe
import {composeWithDevTools} from 'redux-devtools-extension';
import type {State} from '../types/State';
import type {Store} from '../types/Store';

const configureStore = (initialState: State): Store => (

    //$FlowFixMe
    createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
);

export default configureStore;
