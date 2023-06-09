import { NextResponse } from 'next/server';
import { ProfileInitialState } from 'packages/settingsProfileLayout/types/profileInitialState';
import { delay } from 'packages/utils/delay';

export async function GET() {
  await delay(4000);
  const initialState: ProfileInitialState = {
    description: 'My account',
  };
  return NextResponse.json(initialState);
}
