import { createStore, applyMiddleware } from 'redux'; // importing functions
import logger from 'redux-logger'; // importing logger function

import rootReducer from './root.reducer'; // importing root reducer

const middlewares = [logger]; // making a list of middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // passing root reducer and a function that applies middlewares to a function that creates store

export default store; // exporting store