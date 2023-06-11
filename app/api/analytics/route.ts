import { NextResponse } from 'next/server';
import type { InitialState } from '@rp/analyticsLayout';
import { delay } from '@rp/utils';

export async function GET() {
  await delay(4000);
  const initialState: InitialState = {
    views: 10,
  };
  return NextResponse.json(initialState);
}
