import { selector } from 'recoil';

import { initialListPageStateSelector } from './initialState';

// This atom contains metadata about the current list displayed on the list
// page. Since this list will never change while on this page, we can safely use
// a selector that just passes through initial state data. We still want to wrap
// this in a selector though to prevent initial state data from leaking into the
// broader app.
export const currentListSelector = selector({
  key: 'currentListSelector',
  get: ({ get }) => get(initialListPageStateSelector).list,
});
