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
          'Initial state atom not loaded. Did you call this hook outside of its layout root?',
        );
      }
      case 'hasError': {
        throw valueLoadable.contents;
      }
    }
  };
}
