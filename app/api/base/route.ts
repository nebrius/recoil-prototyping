import { NextResponse } from 'next/server';
import type { CommonInitialState } from '@rp/common';
import { delay } from '@rp/utils';

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
