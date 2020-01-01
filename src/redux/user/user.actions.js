import { UserActionTypes } from './user.types';

export const setCurrentUser = user => (
    {
        type: UserActionTypes.SET_CURRENT_USER, // same as in user reducer switch case
        payload: user
    }
)