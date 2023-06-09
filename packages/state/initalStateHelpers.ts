import {
  AtomOptions,
  Loadable,
  RecoilValue,
  WrappedValue,
  atom,
  selector,
  useRecoilValueLoadable,
} from 'recoil';

type InitialStateAtomOptions<AtomValue, InitialState> = Omit<
  AtomOptions<AtomValue>,
  'default'
> & {
  initialValue: (
    initialState: InitialState,
  ) =>
    | RecoilValue<AtomValue>
    | Promise<AtomValue>
    | Loadable<AtomValue>
    | WrappedValue<AtomValue>
    | AtomValue;
};

export function createInitialStateAtom<AtomValue, InitialState>(
  initialStateAtom: RecoilValue<InitialState>,
  {
    initialValue,
    key,
    ...options
  }: InitialStateAtomOptions<AtomValue, InitialState>,
) {
  return atom({
    ...options,
    key,
    // We set the default to a selector so that we can grab the initial value
    // from the initial value atom, which is set during first render in the
    // Recoil root in AppRoot
    default: selector({
      key: `${key}:atomInitializer`,
      get: ({ get }) => initialValue(get(initialStateAtom)),
    }),
  });
}

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
