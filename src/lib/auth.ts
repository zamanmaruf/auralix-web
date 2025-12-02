import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { db } from './database';
import { redisManager } from './redis';
import { UserRole } from './types/prisma';
import type { JWTPayload, AuthResult } from './types/auth';
import type { PrismaUserRole } from './types/prisma';

// Types are now imported from ./types/auth

class AuthManager {
  private static instance: AuthManager;
  private readonly JWT_SECRET: string;
  private readonly JWT_EXPIRES_IN: string;
  private readonly SESSION_EXPIRES_IN: number;

  private constructor() {
    this.JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
    this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';
    this.SESSION_EXPIRES_IN = parseInt(process.env.SESSION_EXPIRES_IN || '86400'); // 24 hours
  }

  public static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }

  // User registration
  public async registerUser(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role?: UserRole;
    tenantId?: string;
  }): Promise<AuthResult> {
    try {
      // Check if user already exists
      const existingUser = await db.user.findUnique({
        where: { email: userData.email }
      });

      if (existingUser) {
        return {
          success: false,
          error: 'User already exists with this email'
        };
      }

      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

      // Create user
      const user = await db.user.create({
        data: {
          email: userData.email,
          password: hashedPassword,
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: (userData.role || UserRole.CUSTOMER) as PrismaUserRole,
          tenantId: userData.tenantId
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          tenantId: true,
          isActive: true,
          createdAt: true
        }
      });

      // Generate session and token
      const { token } = await this.createSession(user.id);

      return {
        success: true,
        user,
        token
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: 'Registration failed'
      };
    }
  }

  // User login
  public async loginUser(email: string, password: string): Promise<AuthResult> {
    try {
      // Find user
      const user = await db.user.findUnique({
        where: { email },
        include: {
          tenant: {
            select: {
              id: true,
              name: true,
              domain: true
            }
          }
        }
      });

      if (!user) {
        return {
          success: false,
          error: 'Invalid credentials'
        };
      }

      if (!user.isActive) {
        return {
          success: false,
          error: 'Account is deactivated'
        };
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return {
          success: false,
          error: 'Invalid credentials'
        };
      }

      // Update last login
      await db.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() }
      });

      // Generate session and token
      const { token } = await this.createSession(user.id);

      // Remove password from response
      const { password: _, ...userWithoutPassword } = user;

      return {
        success: true,
        user: userWithoutPassword,
        token
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'Login failed'
      };
    }
  }

  // Create session
  private async createSession(userId: string): Promise<{ token: string; sessionId: string }> {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Create session in database
    await db.session.create({
      data: {
        userId,
        token: sessionId,
        expiresAt: new Date(Date.now() + this.SESSION_EXPIRES_IN * 1000),
        isActive: true
      }
    });

    // Store session in Redis for faster access
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        tenantId: true
      }
    });

    if (user) {
      await redisManager.setSession(sessionId, {
        userId: user.id,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId
      }, this.SESSION_EXPIRES_IN);
    }

    // Generate JWT token
    // Note: user.role is Prisma's UserRole enum, which is compatible with our UserRole enum
    const payload: JWTPayload = {
      userId: user!.id,
      email: user!.email,
      role: user!.role as UserRole,
      tenantId: user!.tenantId || undefined,
      sessionId
    };

    const token = jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRES_IN
    } as jwt.SignOptions);

    return { token, sessionId };
  }

  // Verify token
  public async verifyToken(token: string): Promise<AuthResult> {
    try {
      // Verify JWT
      const decoded = jwt.verify(token, this.JWT_SECRET) as JWTPayload;
      
      // Check if session exists in Redis
      const session = await redisManager.getSession(decoded.sessionId);
      if (!session) {
        return {
          success: false,
          error: 'Session expired'
        };
      }

      // Verify session in database
      const dbSession = await db.session.findUnique({
        where: { token: decoded.sessionId }
      });

      if (!dbSession || !dbSession.isActive || dbSession.expiresAt < new Date()) {
        return {
          success: false,
          error: 'Session invalid or expired'
        };
      }

      // Get user data
      const user = await db.user.findUnique({
        where: { id: decoded.userId },
        include: {
          tenant: {
            select: {
              id: true,
              name: true,
              domain: true
            }
          }
        }
      });

      if (!user || !user.isActive) {
        return {
          success: false,
          error: 'User not found or inactive'
        };
      }

      return {
        success: true,
        user
      };
    } catch (error) {
      console.error('Token verification error:', error);
      return {
        success: false,
        error: 'Invalid token'
      };
    }
  }

  // Logout
  public async logout(token: string): Promise<boolean> {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as JWTPayload;
      
      // Deactivate session in database
      await db.session.updateMany({
        where: { token: decoded.sessionId },
        data: { isActive: false }
      });

      // Remove session from Redis
      await redisManager.deleteSession(decoded.sessionId);

      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  }

  // Refresh token
  public async refreshToken(token: string): Promise<AuthResult> {
    try {
      const authResult = await this.verifyToken(token);
      if (!authResult.success || !authResult.user) {
        return {
          success: false,
          error: 'Invalid token'
        };
      }

      // Create new session
      const { token: newToken } = await this.createSession(authResult.user.id);

      return {
        success: true,
        user: authResult.user,
        token: newToken
      };
    } catch (error) {
      console.error('Token refresh error:', error);
      return {
        success: false,
        error: 'Token refresh failed'
      };
    }
  }

  // Role-based access control
  public hasPermission(userRole: UserRole, requiredRole: UserRole): boolean {
    const roleHierarchy: Record<string, number> = {
      [UserRole.SUPER_ADMIN]: 4,
      [UserRole.TENANT_ADMIN]: 3,
      [UserRole.STAFF]: 2,
      [UserRole.CUSTOMER]: 1
    };

    return (roleHierarchy[userRole] || 0) >= (roleHierarchy[requiredRole] || 0);
  }

  // Check if user can access tenant
  public canAccessTenant(user: any, tenantId: string): boolean {
    if (user.role === UserRole.SUPER_ADMIN) return true;
    if (user.role === UserRole.TENANT_ADMIN && user.tenantId === tenantId) return true;
    if (user.role === UserRole.STAFF && user.tenantId === tenantId) return true;
    return false;
  }

  // Change password
  public async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<AuthResult> {
    try {
      const user = await db.user.findUnique({
        where: { id: userId }
      });

      if (!user) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      // Verify current password
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
      if (!isCurrentPasswordValid) {
        return {
          success: false,
          error: 'Current password is incorrect'
        };
      }

      // Hash new password
      const saltRounds = 12;
      const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

      // Update password
      await db.user.update({
        where: { id: userId },
        data: { password: hashedNewPassword }
      });

      return {
        success: true
      };
    } catch (error) {
      console.error('Password change error:', error);
      return {
        success: false,
        error: 'Password change failed'
      };
    }
  }

  // Get user sessions
  public async getUserSessions(userId: string): Promise<any[]> {
    try {
      const sessions = await db.session.findMany({
        where: { userId, isActive: true },
        orderBy: { createdAt: 'desc' }
      });

      return sessions;
    } catch (error) {
      console.error('Get user sessions error:', error);
      return [];
    }
  }

  // Revoke all user sessions
  public async revokeAllUserSessions(userId: string): Promise<boolean> {
    try {
      // Get all active sessions
      const sessions = await db.session.findMany({
        where: { userId, isActive: true }
      });

      // Deactivate sessions in database
      await db.session.updateMany({
        where: { userId, isActive: true },
        data: { isActive: false }
      });

      // Remove sessions from Redis
      for (const session of sessions) {
        await redisManager.deleteSession(session.token);
      }

      return true;
    } catch (error) {
      console.error('Revoke sessions error:', error);
      return false;
    }
  }
}

export const authManager = AuthManager.getInstance();
