import { PrismaClient } from '@prisma/client';

declare global {
  var __prisma: PrismaClient | undefined;
}

class DatabaseManager {
  private static instance: DatabaseManager;
  private prisma: PrismaClient;

  private constructor() {
    this.prisma = global.__prisma || new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL || 'postgresql://localhost:5432/postgres?connect_timeout=2',
        },
      },
    });

    if (process.env.NODE_ENV !== 'production') {
      global.__prisma = this.prisma;
    }
  }

  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  public getClient(): PrismaClient {
    return this.prisma;
  }

  public async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      console.log('✅ Database connected successfully');
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await this.prisma.$disconnect();
      console.log('✅ Database disconnected successfully');
    } catch (error) {
      console.error('❌ Database disconnection failed:', error);
      throw error;
    }
  }

  public async healthCheck(): Promise<boolean> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('❌ Database health check failed:', error);
      return false;
    }
  }
}

// Lazy initialization to prevent blocking on import
let dbInstance: ReturnType<typeof DatabaseManager.getInstance> | null = null;
let managerInstance: ReturnType<typeof DatabaseManager.getInstance> | null = null;

export const db = {
  getInstance() {
    if (!dbInstance) {
      dbInstance = DatabaseManager.getInstance().getClient();
    }
    return dbInstance;
  }
}.getInstance();

export const databaseManager = (() => {
  if (!managerInstance) {
    managerInstance = DatabaseManager.getInstance();
  }
  return managerInstance;
})();
