import { NextResponse } from 'next/server';
import type { InitialState } from 'packages/analyticsLayout';
import { delay } from 'packages/utils/delay';

export async function GET() {
  await delay(4000);
  const initialState: InitialState = {
    views: 10,
  };
  return NextResponse.json(initialState);
}
