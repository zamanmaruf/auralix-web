/**
 * Auth-related types
 * Centralized location for authentication types to avoid circular dependencies
 */

import type { UserRole } from './prisma';

export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
  tenantId?: string;
  sessionId: string;
  iat?: number;
  exp?: number;
}

export interface AuthResult {
  success: boolean;
  user?: any;
  token?: string;
  error?: string;
}

