import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import type {Store} from '../types/Store';
import type {State} from '../types/State';

const configureStore = (initialState: State): Store => (
    createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
);

export default configureStore;