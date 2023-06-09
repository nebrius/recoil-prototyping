import { RecoilValue, useRecoilValueLoadable } from 'recoil';

export function createUseInitialStateValueHook<T>(
  initalStateValueAtom: RecoilValue<T>,
) {
  return () => {
    const valueLoadable = useRecoilValueLoadable(initalStateValueAtom);
    switch (valueLoadable.state) {
      case 'hasValue': {
        return valueLoadable.contents;
      }
      case 'loading': {
        throw new Error(
          "Initial state atom not loaded. This hook can only be called in components that are children of this atom's layout?",
        );
      }
      case 'hasError': {
        throw valueLoadable.contents;
      }
    }
  };
}
