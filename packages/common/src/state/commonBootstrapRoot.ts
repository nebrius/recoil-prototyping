'use client';

import { createBootstrapRoot } from 'recoil-bootstrap';

import type { CommonBootstrapData } from '../types/commonBootstrapData';

export const commonBootstrapRoot = createBootstrapRoot<CommonBootstrapData>();
