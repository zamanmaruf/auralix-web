/**
 * Type-only exports from @prisma/client
 * This file uses type-only imports to avoid pulling in the entire Prisma client
 * during TypeScript analysis, which significantly improves performance.
 * 
 * We define a local enum that matches Prisma's enum to avoid importing
 * the massive generated Prisma client types during analysis.
 * 
 * IMPORTANT: When passing enum values to Prisma queries, use type assertion:
 * `role: UserRole.CUSTOMER as any` or cast to the Prisma enum type.
 */

// Import Prisma UserRole type (type-only) for type compatibility
import type { UserRole as PrismaUserRole } from '@prisma/client';

// Local enum matching Prisma schema - avoids importing generated types
// The values match exactly, so runtime compatibility is guaranteed
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  TENANT_ADMIN = 'TENANT_ADMIN',
  STAFF = 'STAFF',
  CUSTOMER = 'CUSTOMER',
}

// Export Prisma type for use in type annotations when needed
export type { PrismaUserRole };

// Type-only re-exports for other Prisma types if needed in the future
// Use these instead of importing directly from @prisma/client
export type { PrismaClient } from '@prisma/client';

