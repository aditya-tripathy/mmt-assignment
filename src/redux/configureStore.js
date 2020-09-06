import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storeReducer from './StoreData/store-reducer';

let store = null;

export function getStore() {
    if (store) {
        return store;
    } else {
        const composeEnhancers = process.env.NODE_ENV === 'development'
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

        store = createStore(
            combineReducers({
                storeReducer
            }),
            composeEnhancers(applyMiddleware(thunk))
        );

        return store;
    }
}
