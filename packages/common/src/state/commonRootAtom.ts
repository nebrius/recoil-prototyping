'use client';

import { rootAtom } from 'recoil-bootstrap';

import type { CommonBootstrapData } from '../types/commonBootstrapData';

export const commonRootAtom = rootAtom<CommonBootstrapData>('commonRootAtom');
