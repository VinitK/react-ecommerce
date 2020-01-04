import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; // persist step 3/7
import storage from 'redux-persist/lib/storage' // persist step 4/7

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = { // persist step 5/7
    key: 'root', // where to start persisting from
    storage,
    whitelist: ['cart'] // reducers to persist
}

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer
    }
);

export default persistReducer(persistConfig, rootReducer); // persist step 6/7 - go to index.js