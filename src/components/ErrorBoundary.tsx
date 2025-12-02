'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });

    // Log to error tracking service (e.g., Sentry, LogRocket)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack,
          },
        },
      });
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-error-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-error-500" aria-hidden="true" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4 font-heading">
                Something went wrong
              </h1>
              <p className="text-neutral-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working on a fix.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-neutral-900 rounded-lg border border-neutral-700">
                <h2 className="text-sm font-semibold text-error-500 mb-2">Error Details (Development Only)</h2>
                <pre className="text-xs text-neutral-400 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-400/50"
                aria-label="Try again"
              >
                <RefreshCw className="w-5 h-5" aria-hidden="true" />
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-400/50"
                aria-label="Go to homepage"
              >
                <Home className="w-5 h-5" aria-hidden="true" />
                Go Home
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-400 mb-2">
                If this problem persists, please contact us:
              </p>
              <a
                href="mailto:auralixai@gmail.com"
                className="text-primary-400 hover:text-primary-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary-400 rounded"
              >
                auralixai@gmail.com
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
export default ErrorBoundary;

