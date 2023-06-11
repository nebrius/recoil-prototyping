import { NextResponse } from 'next/server';
import type { CommonInitialState } from 'packages/common/types/commonInitialState';
import { delay } from 'packages/utils/delay';

export async function GET() {
  await delay(1000);
  const initialState: CommonInitialState = {
    currentUser: {
      id: '12345',
      name: 'Fry',
      email: 'fry@planetexpress.com',
    },
  };
  return NextResponse.json(initialState);
}
