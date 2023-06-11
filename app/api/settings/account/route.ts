import { NextResponse } from 'next/server';
import type { AccountInitialState } from 'packages/settingsAccountLayout';
import { delay } from 'packages/utils';

export async function GET() {
  await delay(2000);
  const initialState: AccountInitialState = {
    type: 'pro',
  };
  return NextResponse.json(initialState);
}
