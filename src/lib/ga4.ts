/**
 * Google Analytics 4 (GA4) client-side tracking
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '';

/**
 * Initialize GA4
 */
export function initGA4() {
  if (typeof window === 'undefined' || !GA4_MEASUREMENT_ID) {
    return;
  }

  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.gtag = function gtag(...args: any[]) {
    if (window.dataLayer) {
      window.dataLayer.push(args);
    }
  };

  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
}

/**
 * Track page view
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_path: path,
    page_title: title,
  });
}

/**
 * Track custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    [key: string]: any;
  }
) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, eventParams);
}

/**
 * Track conversion events
 */
export const trackConversion = {
  contactFormSubmit: () => {
    trackEvent('contact_form_submit', {
      event_category: 'engagement',
      event_label: 'Contact Form',
    });
  },
  pricingView: (planName: string) => {
    trackEvent('pricing_view', {
      event_category: 'engagement',
      event_label: planName,
    });
  },
  ctaClick: (ctaText: string, location: string) => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: ctaText,
      location,
    });
  },
  videoPlay: (videoName: string) => {
    trackEvent('video_play', {
      event_category: 'engagement',
      event_label: videoName,
    });
  },
  calculatorUse: () => {
    trackEvent('calculator_use', {
      event_category: 'engagement',
      event_label: 'Revenue Calculator',
    });
  },
  voiceAssistantStart: () => {
    trackEvent('voice_assistant_start', {
      event_category: 'engagement',
      event_label: 'Voice AI',
    });
  },
};

/**
 * Track user engagement
 */
export const trackEngagement = {
  scrollDepth: (depth: number) => {
    trackEvent('scroll_depth', {
      event_category: 'engagement',
      value: depth,
    });
  },
  timeOnPage: (seconds: number) => {
    trackEvent('time_on_page', {
      event_category: 'engagement',
      value: seconds,
    });
  },
};

/**
 * Track errors
 */
export function trackError(error: Error, errorInfo?: any) {
  trackEvent('exception', {
    description: error.message,
    fatal: false,
    ...errorInfo,
  });
}

