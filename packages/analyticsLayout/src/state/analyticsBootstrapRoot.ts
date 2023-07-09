'use client';

import { createBootstrapRoot } from 'recoil-bootstrap';

import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

export const analyticsBootstrapRoot =
  createBootstrapRoot<AnalyticsBootstrapData>();
