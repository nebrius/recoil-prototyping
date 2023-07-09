'use client';

import { createBootstrapRoot } from 'recoil-bootstrap';

import type { AccountBootstrapData } from '../types/accountBootstrapData';

export const accountBootstrapRoot = createBootstrapRoot<AccountBootstrapData>();
