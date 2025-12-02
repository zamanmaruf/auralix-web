import { PrismaClient } from '@prisma/client';

declare global {
  var __prisma: PrismaClient | undefined;
}

class DatabaseManager {
  private static instance: DatabaseManager;
  private prisma: PrismaClient | null = null;
  private connectionPromise: Promise<void> | null = null;

  private constructor() {
    // Empty constructor - no initialization here
  }

  private getPrismaClient(): PrismaClient {
    if (!this.prisma) {
      this.prisma = global.__prisma || new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
        datasources: {
          db: {
            url: process.env.DATABASE_URL || 'postgresql://localhost:5432/postgres?connect_timeout=5',
          },
        },
      });

      if (process.env.NODE_ENV !== 'production') {
        global.__prisma = this.prisma;
      }
    }
    return this.prisma;
  }

  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  public getClient(): PrismaClient {
    return this.getPrismaClient();
  }

  public async connect(): Promise<void> {
    if (this.connectionPromise) {
      return this.connectionPromise;
    }

    const client = this.getPrismaClient();
    
    this.connectionPromise = (async () => {
      try {
        // Add timeout to prevent hanging
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Database connection timeout')), 5000);
        });

        await Promise.race([
          client.$connect(),
          timeoutPromise
        ]);
        
        console.log('✅ Database connected successfully');
      } catch (error) {
        console.error('❌ Database connection failed:', error);
        this.connectionPromise = null;
        // Don't throw - allow app to continue without database
        return;
      }
    })();

    return this.connectionPromise;
  }

  public async disconnect(): Promise<void> {
    if (!this.prisma) return;
    
    try {
      await Promise.race([
        this.prisma.$disconnect(),
        new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Database disconnection timeout')), 5000);
        })
      ]);
      console.log('✅ Database disconnected successfully');
    } catch (error) {
      console.error('❌ Database disconnection failed:', error);
    } finally {
      this.connectionPromise = null;
    }
  }

  public async healthCheck(): Promise<boolean> {
    if (!this.prisma) return false;
    
    try {
      await Promise.race([
        this.prisma.$queryRaw`SELECT 1`,
        new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Database health check timeout')), 3000);
        })
      ]);
      return true;
    } catch (error) {
      console.error('❌ Database health check failed:', error);
      return false;
    }
  }
}

// Truly lazy initialization - only create instances when functions are called
let dbInstance: PrismaClient | null = null;
let managerInstance: DatabaseManager | null = null;

// Export function-based API that initializes on first call
export function getDb(): PrismaClient {
  if (!dbInstance) {
    dbInstance = DatabaseManager.getInstance().getClient();
  }
  return dbInstance;
}

export function getDatabaseManager(): DatabaseManager {
  if (!managerInstance) {
    managerInstance = DatabaseManager.getInstance();
  }
  return managerInstance;
}

// Keep backward compatibility with lazy getter using Proxy
// This ensures methods are properly bound to the original object
export const db = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const instance = getDb();
    const value = instance[prop as keyof PrismaClient];
    // Bind methods to preserve 'this' context
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  }
});

export const databaseManager = new Proxy({} as DatabaseManager, {
  get(_target, prop) {
    const instance = getDatabaseManager();
    const value = instance[prop as keyof DatabaseManager];
    // Bind methods to preserve 'this' context
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  }
});
