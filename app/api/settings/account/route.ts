import { NextResponse } from 'next/server';
import { AccountInitialState } from 'packages/settingsAccountLayout/types/accountInitialState';
import { delay } from 'packages/utils/delay';

export async function GET() {
  await delay(2000);
  const initialState: AccountInitialState = {
    type: 'pro',
  };
  return NextResponse.json(initialState);
}
