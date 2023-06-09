import { PropsWithChildren, useEffect } from 'react';
import { RecoilState, useRecoilStateLoadable } from 'recoil';

interface LocalizedStateProps<InitialState> {
  initialState: InitialState;
  initialStateAtom: RecoilState<InitialState>;
}

export function LocalizedState<InitialState>({
  children,
  initialState,
  initialStateAtom,
}: PropsWithChildren<LocalizedStateProps<InitialState>>) {
  const [initialStateLoadable, setInitialState] =
    useRecoilStateLoadable(initialStateAtom);
  useEffect(
    () => setInitialState(initialState),
    [initialState, setInitialState],
  );
  switch (initialStateLoadable.state) {
    case 'loading': {
      return null;
    }
    case 'hasError': {
      throw initialStateLoadable.contents;
    }
    case 'hasValue': {
      return <>{children}</>;
    }
  }
}
