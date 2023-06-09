import {
  createInitialStateAtom,
  createUseInitialStateValueHook,
} from 'packages/state/initalStateHelpers';

import { profileInitialStateAtom } from './profileInitialState';

const profileDescriptionAtom = createInitialStateAtom(profileInitialStateAtom, {
  key: 'settings:profileDescriptionAtom',
  initialValue: (initialState) => initialState.description,
});

export const useProfileDescription = createUseInitialStateValueHook(
  profileDescriptionAtom,
);
