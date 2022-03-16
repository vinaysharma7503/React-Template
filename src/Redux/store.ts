// @ts-nocheck

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = createStore( rootReducer, compose( applyMiddleware(sagaMiddleware),
window?.__REDUX_DEVTOOLS_EXTENSION__() )); 

// then run the saga
sagaMiddleware.run(rootSaga);


