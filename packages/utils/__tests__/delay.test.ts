import { describe, expect, test } from '@jest/globals';

import { delay } from '../delay';

const DELAY = 1000;

describe('delay', () => {
  test('works', async () => {
    const start = Date.now();
    await delay(DELAY);
    expect(Date.now() - start >= DELAY).toBeTruthy();
  });
});
