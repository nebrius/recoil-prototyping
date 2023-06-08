'use client';

import { AccountInitialState } from '../types/accountInitialState';

interface AccountRootProps {
  initialState: AccountInitialState;
}

export function AccountRoot({ initialState }: AccountRootProps) {
  // TODO: set up Recoil
  console.log(initialState);
  return <div>Account settings content</div>;
}
