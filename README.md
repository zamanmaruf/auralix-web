# Auralix AI

**Empowering Local Businesses with Smart AI Solutions**

Auralix AI is a Nova Scotia-based startup helping small and medium-sized businesses automate their operations, improve online presence, and grow using affordable AI-powered digital solutions. We specialize in building smart websites, integrating SEO and chatbots, automating workflows, and delivering custom analytics dashboards — all tailored to local service-based industries like restaurants, clinics, salons, and retail stores.

---

## Table of Contents

- [What We Offer](#what-we-offer)
- [Enterprise AI Voice Assistant](#enterprise-ai-voice-assistant)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Development Roadmap](#development-roadmap)

---

## What We Offer

### 1. AI-Powered Website Design
- Custom websites (5–10 pages)
- Mobile-optimized, fast-loading
- E-commerce & booking integration
- Price: $1,500–$3,000 (one-time)
- Optional monthly maintenance: $50–$200

### 2. Search Engine Optimization (SEO)
- Local & general SEO packages
- On-page optimization, keyword targeting, citations
- Price: $500–$2,500/month
- Optional SEO audit: $500–$2,000

### 3. Business Process Automation
- Automated workflows using tools like Zapier/Make
- CRM integration, lead capture, email sequences
- Price: $500–$5,000 (project-based)
- Maintenance: $100–$500/month

### 4. Chatbots & Virtual Assistants
- Lead-capturing bots & AI support agents
- Rule-based or smart AI conversation flows
- Setup: $500–$1,500 + $50–$200/month hosting

### 5. Analytics Dashboards
- Google Data Studio, Metabase, Power BI
- Sales, traffic, campaign performance
- Price: $500–$2,000 + optional $100–$300/month support

---

## Enterprise AI Voice Assistant

### Overview

Auralix includes a production-ready, enterprise-grade AI voice assistant designed for small businesses. This system transforms basic voice assistants into comprehensive, scalable, and secure solutions suitable for enterprise deployment.

### Core Features

**Infrastructure**
- PostgreSQL Database - Persistent data storage with Prisma ORM
- Redis Caching - High-performance caching and session management
- JWT Authentication - Secure user authentication and authorization
- Multi-tenant Architecture - Support for multiple businesses on one platform
- Role-based Access Control - Super Admin, Tenant Admin, Staff, Customer roles

**Advanced AI & NLP**
- Enterprise NLP Engine - Advanced intent recognition and entity extraction
- Context Management - Persistent conversation memory across sessions
- Intent Classification - Multiple intent types with confidence scoring
- Entity Extraction - Service, personnel, date, time, name, phone, email parsing
- OpenAI Integration - GPT-3.5/4 support with fallback to custom NLP

**Security & Compliance**
- Input Sanitization - XSS and injection attack prevention
- Rate Limiting - Configurable rate limiting per IP/user
- Session Management - Secure JWT-based sessions with Redis storage
- Audit Logging - Complete audit trail for all actions
- Data Encryption - Sensitive data encryption at rest and in transit

**Multi-Channel Support**
- Voice Assistant - Real-time speech recognition and synthesis
- Web Chat - Text-based chat interface
- Email Notifications - Automated email confirmations
- Real-time Updates - WebSocket support for live updates

---

## Technology Stack

### Backend
- **Next.js 14** - Full-stack React framework with App Router
- **TypeScript** - Type-safe development
- **Prisma ORM** - Database management and migrations
- **PostgreSQL** - Primary database
- **Redis** - Caching and session storage
- **JWT** - Authentication and authorization
- **OpenAI API** - Advanced AI capabilities
- **Resend** - Email service

### Frontend
- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **Chart.js** - Data visualization
- **React Hook Form** - Form management
- **Zod** - Schema validation

### DevOps & Monitoring
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Sharp** - Image optimization

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 13+ (for enterprise features)
- Redis 6+ (for enterprise features)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd auralix-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file:
```env
# OpenAI Configuration
OPENAI_API_KEY=sk-proj-your-openai-api-key-here

# Database Configuration (PostgreSQL)
DATABASE_URL="postgresql://username:password@localhost:5432/auralix_enterprise?schema=public"

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h
SESSION_EXPIRES_IN=86400

# Rate Limiting
RATE_LIMIT_WINDOW=60000
RATE_LIMIT_MAX_REQUESTS=100

# Security
CORS_ORIGIN=http://localhost:3000
ENCRYPTION_KEY=your-32-character-encryption-key

# Resend Email Service
RESEND_API_KEY=your-resend-api-key

# Feature Flags
ENABLE_MULTI_TENANT=true
ENABLE_REAL_TIME_ANALYTICS=true
ENABLE_VOICE_ASSISTANT=true
```

4. **Set up database** (for enterprise features)
```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Open Prisma Studio (optional)
npm run db:studio
```

5. **Start the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Additional Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio GUI
```

---

## API Documentation

### Endpoints

#### Chat API
```typescript
POST /api/chat

Request Body:
{
  message: string;
  conversationHistory?: any[];
}

Response:
{
  success: boolean;
  response: string;
}
```

#### Voice Assistant API
```typescript
POST /api/voice-assistant

Request Body:
{
  message: string;
  conversationId?: string;
  userId?: string;
  tenantId?: string;
  sessionToken?: string;
  context?: object;
  metadata?: object;
}

Response:
{
  success: boolean;
  message: string;
  conversationId: string;
  context: any;
  metadata: {
    processingTime: number;
    intent: string;
    confidence: number;
    entities: any;
  };
}
```

#### Contact API
```typescript
POST /api/contact

Request Body:
{
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

#### Subscribe API
```typescript
POST /api/subscribe

Request Body:
{
  email: string;
}
```

#### Trial API
```typescript
POST /api/trial

Request Body:
{
  name: string;
  email: string;
  company: string;
  phone: string;
}
```

#### Apply API
```typescript
POST /api/apply

Request Body:
{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  // ... additional fields
}
```

#### Test API
```typescript
GET /api/test
POST /api/test
```

---

## Project Structure

```
auralix-web/
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma       # Prisma schema
│   └── migrations/         # Database migrations
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   ├── chat/      # Chat endpoint
│   │   │   ├── voice-assistant/  # Voice AI endpoint
│   │   │   ├── contact/   # Contact form
│   │   │   ├── subscribe/ # Newsletter
│   │   │   └── ...        # Other endpoints
│   │   ├── blog/          # Blog pages
│   │   ├── solutions/     # Solution pages
│   │   ├── pricing/       # Pricing page
│   │   ├── about-us/      # About page
│   │   └── ...            # Other pages
│   ├── components/        # React components
│   │   ├── Hero.tsx
│   │   ├── Chatbot.tsx
│   │   ├── ContactForm.tsx
│   │   └── ...
│   └── lib/              # Utility libraries
│       ├── database.ts   # Prisma client
│       ├── redis.ts      # Redis manager
│       ├── auth.ts       # Authentication
│       ├── analytics.ts  # Analytics
│       └── enterprise-config.ts  # Config management
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## Development Roadmap

### Phase 1: Core Infrastructure ✅
- [x] Database persistence
- [x] Authentication system
- [x] Multi-tenant support
- [x] Basic analytics
- [x] Voice assistant integration

### Phase 2: Advanced Features 🚧
- [ ] Machine learning models
- [ ] Advanced sentiment analysis
- [ ] Predictive analytics
- [ ] Custom AI training

### Phase 3: Enterprise Integration 📋
- [ ] CRM integration
- [ ] Payment processing
- [ ] Calendar integration
- [ ] White-label solution

### Phase 4: Advanced Analytics 📋
- [ ] Business intelligence dashboard
- [ ] Advanced reporting
- [ ] Predictive insights
- [ ] Custom analytics

---

## Our Mission

We make AI simple, affordable, and effective for small businesses. With Nova Scotia's growing digital economy, Auralix AI helps local companies stay ahead by reducing manual work, improving customer engagement, and turning data into decisions — all without the high costs of big agencies.

---

## Who We Serve

- Local Restaurants & Cafés
- Medical & Dental Clinics
- Salons, Gyms & Wellness Studios
- Retail Stores & E-commerce
- Freelancers, Creators, and Agencies

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, contact us at **info@auralixai.ca** or visit our website.

---

**Built with ❤️ by the Auralix Team**
