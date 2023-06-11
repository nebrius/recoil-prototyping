'use client';

import {
  createUseInitialStateValueHook,
  initialStateBasedAtom,
} from '@rp/state';

import { profileInitialStateAtom } from './profileInitialState';

const profileDescriptionAtom = initialStateBasedAtom(profileInitialStateAtom, {
  key: 'settings:profileDescriptionAtom',
  initialValue: (initialState) => initialState.description,
});

export const useProfileDescription = createUseInitialStateValueHook(
  profileDescriptionAtom,
);
