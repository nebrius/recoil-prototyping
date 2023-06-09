import { createUseInitialStateValueHook } from 'packages/state/createUseInitialStateValueHook';
import { initialStateBasedAtom } from 'packages/state/initialStateBasedAtom';

import { profileInitialStateAtom } from './profileInitialState';

const profileDescriptionAtom = initialStateBasedAtom(profileInitialStateAtom, {
  key: 'settings:profileDescriptionAtom',
  initialValue: (initialState) => initialState.description,
});

export const useProfileDescription = createUseInitialStateValueHook(
  profileDescriptionAtom,
);
