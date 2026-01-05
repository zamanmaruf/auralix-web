/**
 * Vapi helper utilities and type definitions
 */

export interface AssistantOverrides {
  recordingEnabled?: boolean;
  variableValues?: {
    source?: string;
    page?: string;
    verticalIntent?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

/**
 * Get default assistant overrides for website usage
 */
export function getDefaultAssistantOverrides(
  page?: string,
  industry?: string
): AssistantOverrides {
  return {
    recordingEnabled: false, // Default: no recording for website demos
    variableValues: {
      source: 'website',
      page: page || (typeof window !== 'undefined' ? window.location.pathname : '/'),
      verticalIntent: industry || 'home-services',
    },
  };
}

/**
 * Check if microphone permission is available
 */
export async function checkMicPermission(): Promise<'granted' | 'denied' | 'prompt'> {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
    return 'denied';
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(track => track.stop());
    return 'granted';
  } catch (error: any) {
    if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
      return 'denied';
    }
    return 'prompt';
  }
}

/**
 * Get environment variables for Vapi
 */
export function getVapiConfig() {
  return {
    publicKey: process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || '',
    assistantId: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || '',
  };
}

/**
 * Validate Vapi configuration
 */
export function validateVapiConfig(): boolean {
  const config = getVapiConfig();
  return !!(config.publicKey && config.assistantId);
}
