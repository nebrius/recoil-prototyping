import { PropsWithChildren, useEffect } from 'react';
import { RecoilState, useRecoilStateLoadable } from 'recoil';

interface LocalizedStateProps<InitialState> {
  initialState: InitialState;
  initialStateAtom: RecoilState<InitialState>;
}

export function LayoutStateRoot<InitialState>({
  children,
  initialState,
  initialStateAtom,
}: PropsWithChildren<LocalizedStateProps<InitialState>>) {
  const [initialStateLoadable, setInitialState] =
    useRecoilStateLoadable(initialStateAtom);
  // We only want to initialize once, even if initial state later changes (this is a bug)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setInitialState(initialState), []);
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
