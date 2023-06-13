import type { AnalyticsBootstrapData } from '@rp/analyticsLayout';
import { delay } from '@rp/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  await delay(4000);
  const bootstrapData: AnalyticsBootstrapData = {
    views: 10,
  };
  return NextResponse.json(bootstrapData);
}
