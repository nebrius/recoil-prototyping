import { PropsWithChildren, useRef } from 'react';
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
  const isInitializedRef = useRef(false);
  if (!isInitializedRef.current) {
    isInitializedRef.current = true;
    setInitialState(initialState);
  }
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
