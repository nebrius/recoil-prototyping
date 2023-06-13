import type { CommonBootstrapData } from '@rp/common';
import { delay } from '@rp/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  await delay(1000);
  const bootstrapData: CommonBootstrapData = {
    currentUser: {
      id: '12345',
      name: 'Fry',
      email: 'fry@planetexpress.com',
    },
  };
  return NextResponse.json(bootstrapData);
}
