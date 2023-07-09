'use client';

import { createBootstrapRoot } from 'recoil-bootstrap';

import type { ProfileBootstrapData } from '../types/profileBootstrapData';

export const ProfileBootstrapRoot = createBootstrapRoot<ProfileBootstrapData>();
