import Redis from 'ioredis';

class RedisManager {
  private static instance: RedisManager;
  private redis: Redis;
  private isConnected: boolean = false;

  private constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      password: process.env.REDIS_PASSWORD,
      db: parseInt(process.env.REDIS_DB || '0'),
      retryDelayOnFailover: 100,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      keepAlive: 30000,
      connectTimeout: 10000,
      commandTimeout: 5000,
    });

    this.setupEventHandlers();
  }

  public static getInstance(): RedisManager {
    if (!RedisManager.instance) {
      RedisManager.instance = new RedisManager();
    }
    return RedisManager.instance;
  }

  private setupEventHandlers(): void {
    this.redis.on('connect', () => {
      console.log('✅ Redis connected successfully');
      this.isConnected = true;
    });

    this.redis.on('ready', () => {
      console.log('✅ Redis ready for commands');
    });

    this.redis.on('error', (error) => {
      console.error('❌ Redis error:', error);
      this.isConnected = false;
    });

    this.redis.on('close', () => {
      console.log('⚠️ Redis connection closed');
      this.isConnected = false;
    });

    this.redis.on('reconnecting', () => {
      console.log('🔄 Redis reconnecting...');
    });
  }

  public getClient(): Redis {
    return this.redis;
  }

  public async connect(): Promise<void> {
    try {
      await this.redis.connect();
    } catch (error) {
      console.error('❌ Redis connection failed:', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await this.redis.disconnect();
      console.log('✅ Redis disconnected successfully');
    } catch (error) {
      console.error('❌ Redis disconnection failed:', error);
      throw error;
    }
  }

  public async healthCheck(): Promise<boolean> {
    try {
      await this.redis.ping();
      return true;
    } catch (error) {
      console.error('❌ Redis health check failed:', error);
      return false;
    }
  }

  public isReady(): boolean {
    return this.isConnected;
  }

  // Cache methods
  public async set(key: string, value: any, ttl?: number): Promise<void> {
    try {
      const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
      if (ttl) {
        await this.redis.setex(key, ttl, serializedValue);
      } else {
        await this.redis.set(key, serializedValue);
      }
    } catch (error) {
      console.error('❌ Redis set error:', error);
      throw error;
    }
  }

  public async get(key: string): Promise<any> {
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
      throw error;
    }
  }

  public async del(key: string): Promise<void> {
    try {
      await this.redis.del(key);
    } catch (error) {
      console.error('❌ Redis del error:', error);
      throw error;
    }
  }

  public async exists(key: string): Promise<boolean> {
    try {
      const result = await this.redis.exists(key);
      return result === 1;
    } catch (error) {
      console.error('❌ Redis exists error:', error);
      throw error;
    }
  }

  // Rate limiting methods
  public async incrementRateLimit(key: string, window: number): Promise<number> {
    try {
      const multi = this.redis.multi();
      multi.incr(key);
      multi.expire(key, window);
      const results = await multi.exec();
      return results?.[0]?.[1] as number || 0;
    } catch (error) {
      console.error('❌ Redis rate limit increment error:', error);
      throw error;
    }
  }

  public async getRateLimit(key: string): Promise<number> {
    try {
      const result = await this.redis.get(key);
      return result ? parseInt(result) : 0;
    } catch (error) {
      console.error('❌ Redis rate limit get error:', error);
      throw error;
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
    try {
      const serializedMessage = typeof message === 'string' ? message : JSON.stringify(message);
      return await this.redis.publish(channel, serializedMessage);
    } catch (error) {
      console.error('❌ Redis publish error:', error);
      throw error;
    }
  }

  public subscribe(channel: string, callback: (message: any) => void): void {
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
  }
}

export const redisManager = RedisManager.getInstance();
export const redis = redisManager.getClient();
