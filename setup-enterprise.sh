#!/bin/bash

# 🚀 Auralix Enterprise Setup Script
# This script will set up the enterprise-grade AI voice assistant

set -e

echo "🚀 Starting Auralix Enterprise Setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    print_status "Checking Node.js installation..."
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Node.js $(node -v) is installed"
}

# Check if npm is installed
check_npm() {
    print_status "Checking npm installation..."
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "npm $(npm -v) is installed"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed successfully"
}

# Check if .env.local exists
check_env() {
    print_status "Checking environment configuration..."
    if [ ! -f ".env.local" ]; then
        print_warning ".env.local file not found. Creating template..."
        cat > .env.local << EOF
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
JWT_SECRET=your-super-secret-jwt-key-change-in-production-this-should-be-very-long-and-random
JWT_EXPIRES_IN=24h
SESSION_EXPIRES_IN=86400

# Rate Limiting
RATE_LIMIT_WINDOW=60000
RATE_LIMIT_MAX_REQUESTS=100

# Security
CORS_ORIGIN=http://localhost:3002
ENCRYPTION_KEY=your-32-character-encryption-key-here

# Monitoring & Analytics
ENABLE_ANALYTICS=true
ANALYTICS_RETENTION_DAYS=90

# Multi-channel Support
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=+1234567890

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# AWS Configuration (for file uploads, etc.)
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-s3-bucket-name

# Stripe Configuration (for payments)
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key

# Application Configuration
NODE_ENV=development
PORT=3002
API_BASE_URL=http://localhost:3002/api

# Logging
LOG_LEVEL=info
LOG_FILE_PATH=./logs/app.log

# Performance
ENABLE_CACHE=true
CACHE_TTL=3600
ENABLE_COMPRESSION=true

# Feature Flags
ENABLE_MULTI_TENANT=true
ENABLE_REAL_TIME_ANALYTICS=true
ENABLE_VOICE_ASSISTANT=true
ENABLE_SMS_NOTIFICATIONS=true
ENABLE_EMAIL_NOTIFICATIONS=true
ENABLE_PAYMENT_PROCESSING=true
EOF
        print_warning "Please update .env.local with your actual configuration values"
        print_warning "Especially update: DATABASE_URL, REDIS_HOST, JWT_SECRET, and OPENAI_API_KEY"
    else
        print_success ".env.local file exists"
    fi
}

# Generate Prisma client
generate_prisma() {
    print_status "Generating Prisma client..."
    npx prisma generate
    print_success "Prisma client generated"
}

# Check database connection
check_database() {
    print_status "Checking database connection..."
    
    # Extract database URL from .env.local
    if [ -f ".env.local" ]; then
        DATABASE_URL=$(grep DATABASE_URL .env.local | cut -d'=' -f2 | tr -d '"')
        
        if [ "$DATABASE_URL" = "postgresql://username:password@localhost:5432/auralix_enterprise?schema=public" ]; then
            print_warning "Database URL is still using default values. Please update .env.local"
            print_warning "You can skip database setup for now and configure it later"
            return 1
        fi
        
        # Try to connect to database
        if command -v psql &> /dev/null; then
            if npx prisma db pull --force 2>/dev/null; then
                print_success "Database connection successful"
                return 0
            else
                print_warning "Could not connect to database. Please check your DATABASE_URL"
                return 1
            fi
        else
            print_warning "PostgreSQL client not found. Please install PostgreSQL or update DATABASE_URL"
            return 1
        fi
    else
        print_warning ".env.local not found. Please create it first"
        return 1
    fi
}

# Run database migrations
run_migrations() {
    print_status "Running database migrations..."
    if npx prisma migrate dev --name init; then
        print_success "Database migrations completed"
    else
        print_warning "Database migrations failed. You can run them manually later with: npm run db:migrate"
    fi
}

# Setup enterprise data
setup_enterprise_data() {
    print_status "Setting up enterprise data..."
    if node scripts/setup-enterprise.js; then
        print_success "Enterprise data setup completed"
    else
        print_warning "Enterprise data setup failed. You can run it manually later with: node scripts/setup-enterprise.js"
    fi
}

# Check Redis connection
check_redis() {
    print_status "Checking Redis connection..."
    
    if [ -f ".env.local" ]; then
        REDIS_HOST=$(grep REDIS_HOST .env.local | cut -d'=' -f2)
        
        if [ "$REDIS_HOST" = "localhost" ]; then
            if command -v redis-cli &> /dev/null; then
                if redis-cli ping 2>/dev/null | grep -q "PONG"; then
                    print_success "Redis connection successful"
                    return 0
                else
                    print_warning "Redis is not running. Please start Redis or update REDIS_HOST"
                    return 1
                fi
            else
                print_warning "Redis client not found. Please install Redis or update REDIS_HOST"
                return 1
            fi
        else
            print_warning "Redis host is not localhost. Please ensure Redis is accessible at $REDIS_HOST"
            return 1
        fi
    else
        print_warning ".env.local not found. Please create it first"
        return 1
    fi
}

# Create logs directory
create_logs_dir() {
    print_status "Creating logs directory..."
    mkdir -p logs
    print_success "Logs directory created"
}

# Final setup summary
show_summary() {
    echo ""
    echo "🎉 Auralix Enterprise Setup Complete!"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Update .env.local with your actual configuration values"
    echo "2. Ensure PostgreSQL and Redis are running"
    echo "3. Run database migrations: npm run db:migrate"
    echo "4. Setup enterprise data: node scripts/setup-enterprise.js"
    echo "5. Start the development server: npm run dev"
    echo ""
    echo "🔗 Useful Commands:"
    echo "- Start development: npm run dev"
    echo "- Database studio: npm run db:studio"
    echo "- Generate Prisma client: npm run db:generate"
    echo "- Run migrations: npm run db:migrate"
    echo ""
    echo "📚 Documentation:"
    echo "- Enterprise README: ENTERPRISE_README.md"
    echo "- API Documentation: Check the README for API details"
    echo ""
    echo "🚀 Happy coding!"
}

# Main setup function
main() {
    echo "🚀 Auralix Enterprise Setup Script"
    echo "=================================="
    echo ""
    
    check_node
    check_npm
    install_dependencies
    check_env
    generate_prisma
    create_logs_dir
    
    # Database setup (optional)
    if check_database; then
        run_migrations
        setup_enterprise_data
    else
        print_warning "Skipping database setup. Please configure DATABASE_URL and run manually:"
        print_warning "  npm run db:migrate"
        print_warning "  node scripts/setup-enterprise.js"
    fi
    
    # Redis check (optional)
    if ! check_redis; then
        print_warning "Redis not available. Please configure REDIS_HOST and ensure Redis is running"
    fi
    
    show_summary
}

# Run main function
main "$@"
