/**
 * Analytics event stubs
 * Ready for PostHog, Plausible, or other analytics providers
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

/**
 * Track a custom event
 * Replace this implementation with your analytics provider
 */
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return;

  // PostHog example:
  // if (window.posthog) {
  //   window.posthog.capture(event.name, event.properties);
  // }

  // Plausible example:
  // if (window.plausible) {
  //   window.plausible(event.name, { props: event.properties });
  // }

  // Google Analytics 4 example:
  // if (window.gtag) {
  //   window.gtag('event', event.name, event.properties);
  // }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event.name, event.properties);
  }
}

/**
 * Track page view
 */
export function trackPageView(path: string) {
  trackEvent({
    name: 'page_view',
    properties: { path },
  });
}

/**
 * Track voice agent interaction
 */
export function trackVoiceAgentEvent(action: 'start' | 'end' | 'error', properties?: Record<string, any>) {
  trackEvent({
    name: 'voice_agent_' + action,
    properties,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent({
    name: 'form_submission',
    properties: {
      form_name: formName,
      success,
    },
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    name: 'cta_click',
    properties: {
      cta_name: ctaName,
      location,
    },
  });
}
