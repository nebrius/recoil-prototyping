import { useCallback, useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';

type Status = 'idle' | 'updating' | 'success' | 'error';

export function createUseAsyncUpdateStateHook<T>(
  stateAtom: RecoilState<T>,
  updater: (
    newValue: T,
    setStatus: (newStatus: Status) => void,
    setValue: (newValue: T) => void,
  ) => Promise<void>,
) {
  return (): [{ status: Status }, (newValue: T) => void] => {
    const setStateAtom = useSetRecoilState(stateAtom);
    const [status, setStatus] = useState<Status>('idle');

    const setValueInternal = useCallback(
      async (newValue: T) => updater(newValue, setStatus, setStateAtom),
      [setStateAtom, setStatus],
    );

    // Do this to hide the promise, which we don't want components using
    const setValue = useCallback(
      (newValue: T) => {
        void setValueInternal(newValue);
      },
      [setValueInternal],
    );

    return [{ status }, setValue];
  };
}
