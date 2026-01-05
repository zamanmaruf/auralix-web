'use client';

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VoiceAgentWidget } from "@/components/VoiceAgentWidget";
import ErrorBoundary from "@/components/ErrorBoundary";
import CookieConsent from "@/components/CookieConsent";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("ClientLayout mounted");
    
    // Initialize GA4 only if user has consented to cookies
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('auralix_cookie_consent');
      if (consent) {
        try {
          const consentData = JSON.parse(consent);
          if (consentData.accepted) {
            import('@/lib/ga4').then(({ initGA4 }) => {
              initGA4();
            });
          }
        } catch {
          // Invalid consent data, don't initialize
        }
      }
    }
  }, []);

  return (
    <div>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen" role="main">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
      
      {/* AI Voice Assistant - Floating widget */}
      <VoiceAgentWidget mode="floating" defaultIndustry="home-services" />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
} 