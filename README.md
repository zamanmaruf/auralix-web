# Auralix Web

Conversion-optimized website for Auralix AI Voice Agent platform.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Vapi Web SDK** for voice agent integration
- **Framer Motion** for animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:

```env
# Vapi Configuration
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key_here
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id_here

# Optional: Email service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id_here
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3004`

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── product/           # Product pages
│   ├── industries/        # Industry-specific pages
│   ├── trust/             # Trust center pages
│   └── ...
├── components/
│   ├── VoiceAgentWidget/  # Embedded voice agent component
│   ├── layout/            # Navbar, Footer
│   └── ui/                # shadcn/ui components
├── content/               # Content data files
│   ├── industries.ts
│   ├── faqs.ts
│   └── pricing.ts
└── lib/
    ├── vapi.ts            # Vapi helper utilities
    └── analytics.ts       # Analytics event stubs
```

## Key Features

- **Voice Agent Widget**: Embedded Vapi voice agent with transcript display
- **Responsive Design**: Mobile-first, accessible design
- **SEO Optimized**: Dynamic sitemap, metadata, and structured data
- **Accessibility**: WCAG 2.2 compliant with keyboard navigation
- **Analytics Ready**: Event stubs for PostHog, Plausible, or GA4

## Environment Variables

### Required

- `NEXT_PUBLIC_VAPI_PUBLIC_KEY`: Your Vapi public API key
- `NEXT_PUBLIC_VAPI_ASSISTANT_ID`: Your Vapi assistant ID

### Optional

- `RESEND_API_KEY`: For contact form email delivery
- `NEXT_PUBLIC_ANALYTICS_ID`: For analytics integration

## Development

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Deployment

The site is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## Contact Form

Contact form submissions are:
- Logged to console in development
- Stored in `data/submissions.json` (development only)
- Sent via Resend email service (if configured)

## License

Proprietary - Auralix AI Inc.
