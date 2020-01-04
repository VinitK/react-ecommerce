import { createStore, applyMiddleware } from 'redux'; // importing functions
import { persistStore } from 'redux-persist'; // persist step 1/4
import logger from 'redux-logger'; // importing logger function

import rootReducer from './root.reducer'; // importing root reducer

const middlewares = [logger]; // making a list of middlewares here

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // passing root reducer and a function that applies middlewares to a function that creates store

export const persistor = persistStore(store); // persist step 2/4

export default { store, persistor }; // persist step 3/4 - go to root.reducer.js