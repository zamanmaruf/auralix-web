import Redis from 'ioredis';

class RedisManager {
  private static instance: RedisManager;
  private redis: Redis | null = null;
  private isConnected: boolean = false;
  private connectionAttempted: boolean = false;

  private constructor() {
    // Empty constructor - no initialization here
  }

  private getRedisClient(): Redis {
    if (!this.redis) {
      this.redis = new Redis({
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD,
        db: parseInt(process.env.REDIS_DB || '0'),
        reconnectOnError: (err: Error) => {
          const targetError = 'READONLY';
          if (err.message.includes(targetError)) {
            return true;
          }
          return false;
        },
        maxRetriesPerRequest: 1,
        retryStrategy: (times: number) => {
          if (times > 1) {
            console.warn('⚠️ Redis unavailable, running without cache');
            return null; // Stop retrying
          }
          return Math.min(times * 50, 2000);
        },
        lazyConnect: true,
        keepAlive: 30000,
        connectTimeout: 2000,
        commandTimeout: 2000,
        enableOfflineQueue: false,
      });

      this.setupEventHandlers();
    }
    return this.redis;
  }

  public static getInstance(): RedisManager {
    if (!RedisManager.instance) {
      RedisManager.instance = new RedisManager();
    }
    return RedisManager.instance;
  }

  private setupEventHandlers(): void {
    if (!this.redis) return;
    
    this.redis.on('connect', () => {
      console.log('✅ Redis connected successfully');
      this.isConnected = true;
    });

    this.redis.on('ready', () => {
      console.log('✅ Redis ready for commands');
      this.isConnected = true;
    });

    this.redis.on('error', (error) => {
      // Only log errors if we've attempted connection
      if (this.connectionAttempted) {
        console.error('❌ Redis error:', error);
      }
      this.isConnected = false;
    });

    this.redis.on('close', () => {
      if (this.connectionAttempted) {
        console.log('⚠️ Redis connection closed');
      }
      this.isConnected = false;
    });

    this.redis.on('reconnecting', () => {
      console.log('🔄 Redis reconnecting...');
    });
  }

  public getClient(): Redis {
    return this.getRedisClient();
  }

  public async connect(): Promise<void> {
    if (this.connectionAttempted) {
      return;
    }
    
    this.connectionAttempted = true;
    const client = this.getRedisClient();
    
    try {
      // Add timeout to prevent hanging
      await Promise.race([
        client.connect(),
        new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Redis connection timeout')), 3000);
        })
      ]);
    } catch (error) {
      console.error('❌ Redis connection failed:', error);
      this.connectionAttempted = false;
      // Don't throw - allow app to continue without Redis
      this.isConnected = false;
    }
  }

  public async disconnect(): Promise<void> {
    if (!this.redis) return;
    
    try {
      await Promise.race([
        this.redis.disconnect(),
        new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Redis disconnection timeout')), 3000);
        })
      ]);
      console.log('✅ Redis disconnected successfully');
    } catch (error) {
      console.error('❌ Redis disconnection failed:', error);
    } finally {
      this.connectionAttempted = false;
      this.isConnected = false;
    }
  }

  public async healthCheck(): Promise<boolean> {
    if (!this.redis) return false;
    
    try {
      await Promise.race([
        this.redis.ping(),
        new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Redis health check timeout')), 2000);
        })
      ]);
      return true;
    } catch (error) {
      console.error('❌ Redis health check failed:', error);
      return false;
    }
  }

  public isReady(): boolean {
    return this.isConnected;
  }

  // Cache methods - all with safe error handling
  public async set(key: string, value: any, ttl?: number): Promise<void> {
    if (!this.redis || !this.isConnected) {
      return; // Silently fail if Redis unavailable
    }
    
    try {
      const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
      if (ttl) {
        await this.redis.setex(key, ttl, serializedValue);
      } else {
        await this.redis.set(key, serializedValue);
      }
    } catch (error) {
      console.error('❌ Redis set error:', error);
      // Don't throw - gracefully degrade
    }
  }

  public async get(key: string): Promise<any> {
    if (!this.redis || !this.isConnected) {
      return null; // Return null if Redis unavailable
    }
    
    try {
      const value = await this.redis.get(key);
      if (!value) return null;
      
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    } catch (error) {
      console.error('❌ Redis get error:', error);
      return null; // Return null on error
    }
  }

  public async del(key: string): Promise<void> {
    if (!this.redis || !this.isConnected) {
      return;
    }
    
    try {
      await this.redis.del(key);
    } catch (error) {
      console.error('❌ Redis del error:', error);
      // Don't throw
    }
  }

  public async exists(key: string): Promise<boolean> {
    if (!this.redis || !this.isConnected) {
      return false;
    }
    
    try {
      const result = await this.redis.exists(key);
      return result === 1;
    } catch (error) {
      console.error('❌ Redis exists error:', error);
      return false;
    }
  }

  // Rate limiting methods
  public async incrementRateLimit(key: string, window: number): Promise<number> {
    if (!this.redis || !this.isConnected) {
      return 0;
    }
    
    try {
      const multi = this.redis.multi();
      multi.incr(key);
      multi.expire(key, window);
      const results = await multi.exec();
      return results?.[0]?.[1] as number || 0;
    } catch (error) {
      console.error('❌ Redis rate limit increment error:', error);
      return 0;
    }
  }

  public async getRateLimit(key: string): Promise<number> {
    if (!this.redis || !this.isConnected) {
      return 0;
    }
    
    try {
      const result = await this.redis.get(key);
      return result ? parseInt(result) : 0;
    } catch (error) {
      console.error('❌ Redis rate limit get error:', error);
      return 0;
    }
  }

  // Session management
  public async setSession(sessionId: string, data: any, ttl: number = 3600): Promise<void> {
    await this.set(`session:${sessionId}`, data, ttl);
  }

  public async getSession(sessionId: string): Promise<any> {
    return await this.get(`session:${sessionId}`);
  }

  public async deleteSession(sessionId: string): Promise<void> {
    await this.del(`session:${sessionId}`);
  }

  // Conversation caching
  public async setConversationCache(conversationId: string, data: any, ttl: number = 1800): Promise<void> {
    await this.set(`conversation:${conversationId}`, data, ttl);
  }

  public async getConversationCache(conversationId: string): Promise<any> {
    return await this.get(`conversation:${conversationId}`);
  }

  public async deleteConversationCache(conversationId: string): Promise<void> {
    await this.del(`conversation:${conversationId}`);
  }

  // Analytics caching
  public async setAnalyticsCache(key: string, data: any, ttl: number = 300): Promise<void> {
    await this.set(`analytics:${key}`, data, ttl);
  }

  public async getAnalyticsCache(key: string): Promise<any> {
    return await this.get(`analytics:${key}`);
  }

  // Pub/Sub for real-time features
  public async publish(channel: string, message: any): Promise<number> {
    if (!this.redis || !this.isConnected) {
      return 0;
    }
    
    try {
      const serializedMessage = typeof message === 'string' ? message : JSON.stringify(message);
      return await this.redis.publish(channel, serializedMessage);
    } catch (error) {
      console.error('❌ Redis publish error:', error);
      return 0;
    }
  }

  public subscribe(channel: string, callback: (message: any) => void): void {
    if (!this.redis || !this.isConnected) {
      console.warn('⚠️ Redis not available for subscription');
      return;
    }
    
    try {
      const subscriber = this.redis.duplicate();
      subscriber.subscribe(channel);
      subscriber.on('message', (_, message) => {
        try {
          const parsedMessage = JSON.parse(message);
          callback(parsedMessage);
        } catch {
          callback(message);
        }
      });
    } catch (error) {
      console.error('❌ Redis subscribe error:', error);
    }
  }
}

// Truly lazy initialization - only create instances when functions are called
let redisManagerInstance: RedisManager | null = null;

// Export function-based API that initializes on first call
export function getRedisManager(): RedisManager {
  if (!redisManagerInstance) {
    redisManagerInstance = RedisManager.getInstance();
  }
  return redisManagerInstance;
}

export function getRedis(): Redis {
  return getRedisManager().getClient();
}

// Keep backward compatibility with lazy getter using Proxy
// This ensures methods are properly bound to the original object
export const redisManager = new Proxy({} as RedisManager, {
  get(_target, prop) {
    const instance = getRedisManager();
    const value = instance[prop as keyof RedisManager];
    // Bind methods to preserve 'this' context
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  }
});

export const redis = new Proxy({} as Redis, {
  get(_target, prop) {
    const instance = getRedis();
    const value = instance[prop as keyof Redis];
    // Bind methods to preserve 'this' context
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  }
});
