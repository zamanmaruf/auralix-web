import { db } from './database';
import { redisManager } from './redis';
// Enum-like constants for analytics
const AnalyticsType = {
  CONVERSATION_START: 'CONVERSATION_START',
  CONVERSATION_END: 'CONVERSATION_END',
  INTENT_RECOGNITION: 'INTENT_RECOGNITION',
  ENTITY_EXTRACTION: 'ENTITY_EXTRACTION',
  BOOKING_COMPLETED: 'BOOKING_COMPLETED',
  ERROR_OCCURRED: 'ERROR_OCCURRED',
  PERFORMANCE_METRIC: 'PERFORMANCE_METRIC',
  USER_SATISFACTION: 'USER_SATISFACTION',
} as const;

const ConversationStatus = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  PENDING: 'PENDING',
} as const;

type AnalyticsType = string;
type ConversationStatusType = string;
type MessageType = string;
type MessageRole = string;

export interface AnalyticsEvent {
  type: AnalyticsType;
  tenantId: string;
  data: any;
  metadata?: any;
  timestamp?: Date;
}

// Helper type for implicit any parameters
type AnyFunction = (...args: any[]) => any;

export interface ConversationMetrics {
  totalConversations: number;
  activeConversations: number;
  completedConversations: number;
  averageResponseTime: number;
  successRate: number;
  intentRecognitionAccuracy: number;
  entityExtractionAccuracy: number;
}

export interface PerformanceMetrics {
  apiResponseTime: number;
  databaseQueryTime: number;
  redisResponseTime: number;
  memoryUsage: number;
  cpuUsage: number;
  errorRate: number;
}

export interface BusinessMetrics {
  totalBookings: number;
  bookingConversionRate: number;
  averageBookingValue: number;
  customerSatisfaction: number;
  peakHours: string[];
  popularServices: Array<{ service: string; count: number }>;
  popularBarbers: Array<{ barber: string; count: number }>;
}

class AnalyticsManager {
  private static instance: AnalyticsManager;

  public static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  // Track analytics event
  public async trackEvent(event: AnalyticsEvent): Promise<void> {
    try {
      const timestamp = event.timestamp || new Date();

      // Store in database
      await db.analytics.create({
        data: {
          tenantId: event.tenantId,
          type: event.type,
          data: event.data,
          metadata: event.metadata,
          timestamp
        }
      });

      // Cache for real-time analytics
      const cacheKey = `analytics:${event.tenantId}:${event.type}:${timestamp.toISOString().split('T')[0]}`;
      const cachedData = await redisManager.getAnalyticsCache(cacheKey);
      
      if (cachedData) {
        cachedData.count = (cachedData.count || 0) + 1;
        cachedData.events.push(event);
        await redisManager.setAnalyticsCache(cacheKey, cachedData, 3600); // 1 hour cache
      } else {
        await redisManager.setAnalyticsCache(cacheKey, {
          count: 1,
          events: [event],
          date: timestamp.toISOString().split('T')[0]
        }, 3600);
      }

      // Publish real-time update
      await redisManager.publish(`analytics:${event.tenantId}`, {
        type: event.type,
        data: event.data,
        timestamp
      });

    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  // Track conversation start
  public async trackConversationStart(conversationId: string, tenantId: string, metadata?: any): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.CONVERSATION_START,
      tenantId,
      data: { conversationId },
      metadata
    });
  }

  // Track conversation end
  public async trackConversationEnd(conversationId: string, tenantId: string, status: ConversationStatus, metadata?: any): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.CONVERSATION_END,
      tenantId,
      data: { conversationId, status },
      metadata
    });
  }

  // Track intent recognition
  public async trackIntentRecognition(conversationId: string, tenantId: string, intent: string, confidence: number, metadata?: any): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.INTENT_RECOGNITION,
      tenantId,
      data: { conversationId, intent, confidence },
      metadata
    });
  }

  // Track entity extraction
  public async trackEntityExtraction(conversationId: string, tenantId: string, entities: any, accuracy: number, metadata?: any): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.ENTITY_EXTRACTION,
      tenantId,
      data: { conversationId, entities, accuracy },
      metadata
    });
  }

  // Track booking completion
  public async trackBookingCompleted(conversationId: string, tenantId: string, bookingData: any, metadata?: any): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.BOOKING_COMPLETED,
      tenantId,
      data: { conversationId, bookingData },
      metadata
    });
  }

  // Track error
  public async trackError(tenantId: string, error: any, metadata?: any): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.ERROR_OCCURRED,
      tenantId,
      data: { error: error.message || error },
      metadata
    });
  }

  // Track performance metric
  public async trackPerformanceMetric(tenantId: string, metric: string, value: number, metadata?: any): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.PERFORMANCE_METRIC,
      tenantId,
      data: { metric, value },
      metadata
    });
  }

  // Track user satisfaction
  public async trackUserSatisfaction(conversationId: string, tenantId: string, rating: number, feedback?: string): Promise<void> {
    await this.trackEvent({
      type: AnalyticsType.USER_SATISFACTION,
      tenantId,
      data: { conversationId, rating, feedback },
      metadata: { timestamp: new Date() }
    });
  }

  // Get conversation metrics
  public async getConversationMetrics(tenantId: string, startDate?: Date, endDate?: Date): Promise<ConversationMetrics> {
    try {
      const whereClause: any = { tenantId };
      if (startDate && endDate) {
        whereClause.createdAt = {
          gte: startDate,
          lte: endDate
        };
      }

      const conversations = await db.conversation.findMany({
        where: whereClause,
        include: {
          messages: true,
          analytics: true
        }
      });

      const totalConversations = conversations.length;
      const activeConversations = conversations.filter((c: any) => c.status === ConversationStatusValue.ACTIVE).length;
      const completedConversations = conversations.filter((c: any) => c.status === ConversationStatusValue.COMPLETED).length;

      // Calculate average response time
      const responseTimes = conversations
        .map((c: any) => c.processingTime)
        .filter((time: number | null) => time !== null) as number[];
      const averageResponseTime = responseTimes.length > 0 
        ? responseTimes.reduce((sum: number, time: number) => sum + time, 0) / responseTimes.length 
        : 0;

      // Calculate success rate
      const successRate = totalConversations > 0 
        ? (completedConversations / totalConversations) * 100 
        : 0;

      // Calculate intent recognition accuracy
      const intentAnalytics = await db.analytics.findMany({
        where: {
          tenantId,
          type: AnalyticsType.INTENT_RECOGNITION,
          ...(startDate && endDate && {
            timestamp: {
              gte: startDate,
              lte: endDate
            }
          })
        }
      });

      const intentRecognitionAccuracy = intentAnalytics.length > 0
        ? intentAnalytics.reduce((sum: number, a: any) => sum + (a.data as any).confidence, 0) / intentAnalytics.length * 100
        : 0;

      // Calculate entity extraction accuracy
      const entityAnalytics = await db.analytics.findMany({
        where: {
          tenantId,
          type: AnalyticsType.ENTITY_EXTRACTION,
          ...(startDate && endDate && {
            timestamp: {
              gte: startDate,
              lte: endDate
            }
          })
        }
      });

      const entityExtractionAccuracy = entityAnalytics.length > 0
        ? entityAnalytics.reduce((sum: number, a: any) => sum + (a.data as any).accuracy, 0) / entityAnalytics.length * 100
        : 0;

      return {
        totalConversations,
        activeConversations,
        completedConversations,
        averageResponseTime,
        successRate,
        intentRecognitionAccuracy,
        entityExtractionAccuracy
      };
    } catch (error) {
      console.error('Get conversation metrics error:', error);
      return {
        totalConversations: 0,
        activeConversations: 0,
        completedConversations: 0,
        averageResponseTime: 0,
        successRate: 0,
        intentRecognitionAccuracy: 0,
        entityExtractionAccuracy: 0
      };
    }
  }

  // Get performance metrics
  public async getPerformanceMetrics(tenantId: string, startDate?: Date, endDate?: Date): Promise<PerformanceMetrics> {
    try {
      const whereClause: any = {
        tenantId,
        type: AnalyticsType.PERFORMANCE_METRIC
      };
      
      if (startDate && endDate) {
        whereClause.timestamp = {
          gte: startDate,
          lte: endDate
        };
      }

      const performanceAnalytics = await db.analytics.findMany({
        where: whereClause
      });

      const metrics: any = {};
      performanceAnalytics.forEach((a: any) => {
        const data = a.data as any;
        if (!metrics[data.metric]) {
          metrics[data.metric] = [];
        }
        metrics[data.metric].push(data.value);
      });

      const calculateAverage = (values: number[]) => 
        values.length > 0 ? values.reduce((sum: number, val: number) => sum + val, 0) / values.length : 0;

      return {
        apiResponseTime: calculateAverage(metrics.apiResponseTime || []),
        databaseQueryTime: calculateAverage(metrics.databaseQueryTime || []),
        redisResponseTime: calculateAverage(metrics.redisResponseTime || []),
        memoryUsage: calculateAverage(metrics.memoryUsage || []),
        cpuUsage: calculateAverage(metrics.cpuUsage || []),
        errorRate: calculateAverage(metrics.errorRate || [])
      };
    } catch (error) {
      console.error('Get performance metrics error:', error);
      return {
        apiResponseTime: 0,
        databaseQueryTime: 0,
        redisResponseTime: 0,
        memoryUsage: 0,
        cpuUsage: 0,
        errorRate: 0
      };
    }
  }

  // Get business metrics
  public async getBusinessMetrics(tenantId: string, startDate?: Date, endDate?: Date): Promise<BusinessMetrics> {
    try {
      const whereClause: any = { tenantId };
      if (startDate && endDate) {
        whereClause.createdAt = {
          gte: startDate,
          lte: endDate
        };
      }

      // Get bookings
      const bookings = await db.booking.findMany({
        where: whereClause
      });

      const totalBookings = bookings.length;
      const completedBookings = bookings.filter((b: any) => b.status === 'CONFIRMED' || b.status === 'COMPLETED').length;
      const bookingConversionRate = totalBookings > 0 ? (completedBookings / totalBookings) * 100 : 0;

      // Calculate average booking value
      const bookingValues = bookings
        .map((b: any) => b.totalAmount)
        .filter((amount: any) => amount !== null) as number[];
      const averageBookingValue = bookingValues.length > 0
        ? bookingValues.reduce((sum: number, amount: number) => sum + amount, 0) / bookingValues.length
        : 0;

      // Get customer satisfaction
      const satisfactionAnalytics = await db.analytics.findMany({
        where: {
          tenantId,
          type: AnalyticsType.USER_SATISFACTION,
          ...(startDate && endDate && {
            timestamp: {
              gte: startDate,
              lte: endDate
            }
          })
        }
      });

      const customerSatisfaction = satisfactionAnalytics.length > 0
        ? satisfactionAnalytics.reduce((sum: number, a: any) => sum + (a.data as any).rating, 0) / satisfactionAnalytics.length
        : 0;

      // Get popular services
      const serviceCounts: { [key: string]: number } = {};
      bookings.forEach((booking: any) => {
        serviceCounts[booking.service] = (serviceCounts[booking.service] || 0) + 1;
      });
      const popularServices = Object.entries(serviceCounts)
        .map(([service, count]) => ({ service, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Get popular barbers
      const barberCounts: { [key: string]: number } = {};
      bookings.forEach((booking: any) => {
        barberCounts[booking.barber] = (barberCounts[booking.barber] || 0) + 1;
      });
      const popularBarbers = Object.entries(barberCounts)
        .map(([barber, count]) => ({ barber, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Get peak hours (simplified - you might want to analyze actual booking times)
      const peakHours = ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

      return {
        totalBookings,
        bookingConversionRate,
        averageBookingValue,
        customerSatisfaction,
        peakHours,
        popularServices,
        popularBarbers
      };
    } catch (error) {
      console.error('Get business metrics error:', error);
      return {
        totalBookings: 0,
        bookingConversionRate: 0,
        averageBookingValue: 0,
        customerSatisfaction: 0,
        peakHours: [],
        popularServices: [],
        popularBarbers: []
      };
    }
  }

  // Get real-time analytics
  public async getRealTimeAnalytics(tenantId: string): Promise<any> {
    try {
      const cacheKey = `analytics:${tenantId}:realtime`;
      const cached = await redisManager.getAnalyticsCache(cacheKey);
      
      if (cached) {
        return cached;
      }

      // Get active conversations
      const activeConversations = await db.conversation.count({
        where: {
          tenantId,
          status: ConversationStatus.ACTIVE
        }
      });

      // Get today's metrics
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const todayAnalytics = await db.analytics.findMany({
        where: {
          tenantId,
          timestamp: {
            gte: today,
            lt: tomorrow
          }
        }
      });

      const realTimeData = {
        activeConversations,
        todayConversations: todayAnalytics.filter((a: any) => a.type === AnalyticsType.CONVERSATION_START).length,
        todayBookings: todayAnalytics.filter((a: any) => a.type === AnalyticsType.BOOKING_COMPLETED).length,
        todayErrors: todayAnalytics.filter((a: any) => a.type === AnalyticsType.ERROR_OCCURRED).length,
        lastUpdated: new Date()
      };

      // Cache for 5 minutes
      await redisManager.setAnalyticsCache(cacheKey, realTimeData, 300);

      return realTimeData;
    } catch (error) {
      console.error('Get real-time analytics error:', error);
      return {
        activeConversations: 0,
        todayConversations: 0,
        todayBookings: 0,
        todayErrors: 0,
        lastUpdated: new Date()
      };
    }
  }

  // Export analytics data
  public async exportAnalytics(tenantId: string, startDate: Date, endDate: Date, format: 'json' | 'csv' = 'json'): Promise<any> {
    try {
      const analytics = await db.analytics.findMany({
        where: {
          tenantId,
          timestamp: {
            gte: startDate,
            lte: endDate
          }
        },
        orderBy: {
          timestamp: 'asc'
        }
      });

      if (format === 'csv') {
        // Convert to CSV format
        const csvHeaders = ['Type', 'Data', 'Metadata', 'Timestamp'];
        const csvRows = analytics.map((a: any) => [
          a.type,
          JSON.stringify(a.data),
          JSON.stringify(a.metadata),
          a.timestamp.toISOString()
        ]);

        return {
          format: 'csv',
          data: [csvHeaders, ...csvRows]
        };
      }

      return {
        format: 'json',
        data: analytics
      };
    } catch (error) {
      console.error('Export analytics error:', error);
      throw error;
    }
  }
}

export const analyticsManager = AnalyticsManager.getInstance();
