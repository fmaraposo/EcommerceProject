import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],// Array of Input Selectors
    (user) => user.currentUser // the function that gets the return from our input Selector as parameter, and return something with it.
)