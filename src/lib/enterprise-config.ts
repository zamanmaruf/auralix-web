export interface EnterpriseConfig {
  // Database
  database: {
    url: string;
  };
  
  // Redis
  redis: {
    host: string;
    port: number;
    password?: string;
    db: number;
  };
  
  // Authentication
  auth: {
    jwtSecret: string;
    jwtExpiresIn: string;
    sessionExpiresIn: number;
  };
  
  // Rate Limiting
  rateLimit: {
    window: number;
    maxRequests: number;
  };
  
  // Security
  security: {
    corsOrigin: string;
    encryptionKey: string;
  };
  
  // Monitoring
  monitoring: {
    enableAnalytics: boolean;
    analyticsRetentionDays: number;
  };
  
  // Multi-channel
  channels: {
    twilio: {
      accountSid: string;
      authToken: string;
      phoneNumber: string;
    };
    email: {
      host: string;
      port: number;
      user: string;
      pass: string;
    };
  };
  
  // AWS
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
    s3Bucket: string;
  };
  
  // Stripe
  stripe: {
    secretKey: string;
    publishableKey: string;
  };
  
  // Application
  app: {
    nodeEnv: string;
    port: number;
    apiBaseUrl: string;
  };
  
  // Logging
  logging: {
    level: string;
    filePath: string;
  };
  
  // Performance
  performance: {
    enableCache: boolean;
    cacheTtl: number;
    enableCompression: boolean;
  };
  
  // Feature Flags
  features: {
    enableMultiTenant: boolean;
    enableRealTimeAnalytics: boolean;
    enableVoiceAssistant: boolean;
    enableSmsNotifications: boolean;
    enableEmailNotifications: boolean;
    enablePaymentProcessing: boolean;
  };
}

class ConfigManager {
  private static instance: ConfigManager;
  private config: EnterpriseConfig;

  private constructor() {
    this.config = this.loadConfig();
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  private loadConfig(): EnterpriseConfig {
    return {
      database: {
        url: process.env.DATABASE_URL || "postgresql://username:password@localhost:5432/auralix_enterprise?schema=public"
      },
      
      redis: {
        host: process.env.REDIS_HOST || "localhost",
        port: parseInt(process.env.REDIS_PORT || "6379"),
        password: process.env.REDIS_PASSWORD,
        db: parseInt(process.env.REDIS_DB || "0")
      },
      
      auth: {
        jwtSecret: process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production",
        jwtExpiresIn: process.env.JWT_EXPIRES_IN || "24h",
        sessionExpiresIn: parseInt(process.env.SESSION_EXPIRES_IN || "86400")
      },
      
      rateLimit: {
        window: parseInt(process.env.RATE_LIMIT_WINDOW || "60000"),
        maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100")
      },
      
      security: {
        corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3002",
        encryptionKey: process.env.ENCRYPTION_KEY || "your-32-character-encryption-key-here"
      },
      
      monitoring: {
        enableAnalytics: process.env.ENABLE_ANALYTICS === "true",
        analyticsRetentionDays: parseInt(process.env.ANALYTICS_RETENTION_DAYS || "90")
      },
      
      channels: {
        twilio: {
          accountSid: process.env.TWILIO_ACCOUNT_SID || "",
          authToken: process.env.TWILIO_AUTH_TOKEN || "",
          phoneNumber: process.env.TWILIO_PHONE_NUMBER || ""
        },
        email: {
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          user: process.env.SMTP_USER || "",
          pass: process.env.SMTP_PASS || ""
        }
      },
      
      aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
        region: process.env.AWS_REGION || "us-east-1",
        s3Bucket: process.env.AWS_S3_BUCKET || ""
      },
      
      stripe: {
        secretKey: process.env.STRIPE_SECRET_KEY || "",
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || ""
      },
      
      app: {
        nodeEnv: process.env.NODE_ENV || "development",
        port: parseInt(process.env.PORT || "3002"),
        apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3002/api"
      },
      
      logging: {
        level: process.env.LOG_LEVEL || "info",
        filePath: process.env.LOG_FILE_PATH || "./logs/app.log"
      },
      
      performance: {
        enableCache: process.env.ENABLE_CACHE === "true",
        cacheTtl: parseInt(process.env.CACHE_TTL || "3600"),
        enableCompression: process.env.ENABLE_COMPRESSION === "true"
      },
      
      features: {
        enableMultiTenant: process.env.ENABLE_MULTI_TENANT === "true",
        enableRealTimeAnalytics: process.env.ENABLE_REAL_TIME_ANALYTICS === "true",
        enableVoiceAssistant: process.env.ENABLE_VOICE_ASSISTANT === "true",
        enableSmsNotifications: process.env.ENABLE_SMS_NOTIFICATIONS === "true",
        enableEmailNotifications: process.env.ENABLE_EMAIL_NOTIFICATIONS === "true",
        enablePaymentProcessing: process.env.ENABLE_PAYMENT_PROCESSING === "true"
      }
    };
  }

  public getConfig(): EnterpriseConfig {
    return this.config;
  }

  public getDatabaseConfig() {
    return this.config.database;
  }

  public getRedisConfig() {
    return this.config.redis;
  }

  public getAuthConfig() {
    return this.config.auth;
  }

  public getRateLimitConfig() {
    return this.config.rateLimit;
  }

  public getSecurityConfig() {
    return this.config.security;
  }

  public getMonitoringConfig() {
    return this.config.monitoring;
  }

  public getChannelsConfig() {
    return this.config.channels;
  }

  public getAwsConfig() {
    return this.config.aws;
  }

  public getStripeConfig() {
    return this.config.stripe;
  }

  public getAppConfig() {
    return this.config.app;
  }

  public getLoggingConfig() {
    return this.config.logging;
  }

  public getPerformanceConfig() {
    return this.config.performance;
  }

  public getFeaturesConfig() {
    return this.config.features;
  }

  public isFeatureEnabled(feature: keyof EnterpriseConfig['features']): boolean {
    return this.config.features[feature];
  }

  public isDevelopment(): boolean {
    return this.config.app.nodeEnv === 'development';
  }

  public isProduction(): boolean {
    return this.config.app.nodeEnv === 'production';
  }

  public isTest(): boolean {
    return this.config.app.nodeEnv === 'test';
  }
}

export const configManager = ConfigManager.getInstance();
export const config = configManager.getConfig();
