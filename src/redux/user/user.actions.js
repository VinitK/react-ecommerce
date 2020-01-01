export const setCurrentUser = user => (
    {
        type: 'SET_CURRENT_USER', // same as in user reducer switch case
        payload: user
    }
)