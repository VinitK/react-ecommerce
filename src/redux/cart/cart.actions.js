import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => (
    {
        type: CartActionTypes.TOGGLE_CART_HIDDEN // same as in cart reducer switch case
    }
);

export const addItem = item => (
    {
        type: CartActionTypes.ADD_ITEM, // same as in cart reducer switch case
        payload: item
    }
);