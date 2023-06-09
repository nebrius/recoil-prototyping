import {
  AtomOptions,
  Loadable,
  RecoilValue,
  WrappedValue,
  atom,
  selector,
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

export function initialStateBasedAtom<AtomValue, InitialState>(
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
    // from the initial value atom, which is set in a LayoutStateRoot component
    default: selector({
      key: `${key}:atomInitializer`,
      get: ({ get }) => initialValue(get(initialStateAtom)),
    }),
  });
}
