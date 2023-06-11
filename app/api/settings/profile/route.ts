import { NextResponse } from 'next/server';
import type { ProfileInitialState } from '@rp/settingsProfileLayout';
import { delay } from '@rp/utils';

export async function GET() {
  await delay(4000);
  const initialState: ProfileInitialState = {
    description: 'My account',
  };
  return NextResponse.json(initialState);
}
