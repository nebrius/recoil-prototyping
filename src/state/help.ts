import { atom } from 'recoil';

export const helpTextAtom = atom<string>({
  key: 'helpTextAtom',
  // Default is left off so we can use a Loadable for it
});
