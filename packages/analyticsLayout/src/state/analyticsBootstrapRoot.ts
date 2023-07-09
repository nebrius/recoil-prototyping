'use client';

import { createBootstrapRoot } from 'recoil-bootstrap';

import type { AnalyticsBootstrapData } from '../types/analyticsBootstrapData';

export const AnalyticsBootstrapRoot =
  createBootstrapRoot<AnalyticsBootstrapData>();
