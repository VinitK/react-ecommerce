import { createSelector } from 'reselect';

const selectDirectory = state => state.directory; // input selector

export const selectDirectoryCategories = createSelector([selectDirectory], directory => directory.categories);