import type { ProfileBootstrapData } from '@rp/settingsProfileLayout';
import { delay } from '@rp/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  await delay(4000);
  const bootstrapData: ProfileBootstrapData = {
    description: 'My account',
  };
  return NextResponse.json(bootstrapData);
}
