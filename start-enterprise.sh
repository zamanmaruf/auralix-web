#!/bin/bash

# Auralix Enterprise Startup Script
echo "🚀 Starting Auralix Enterprise System..."

# Set PostgreSQL path
export PATH="/opt/homebrew/opt/postgresql@15/bin:$PATH"

# Set environment variables
export DATABASE_URL="postgresql://mdmarufuzzaman@localhost:5432/auralix_enterprise?schema=public"
export REDIS_HOST="localhost"
export REDIS_PORT="6379"
export JWT_SECRET="50bfba5069630734a4df9228c783e7190a96d40f3153b55f0a5c2bf58ff7db779d3317cda59ef35aa5246351c7c2922b2289d9f50608fa1c372b4f723ddc5393"
export JWT_EXPIRES_IN="24h"
export SESSION_EXPIRES_IN="86400"
export RATE_LIMIT_WINDOW="60000"
export RATE_LIMIT_MAX_REQUESTS="100"
export CORS_ORIGIN="http://localhost:3002"
export ENABLE_MULTI_TENANT="true"
export ENABLE_REAL_TIME_ANALYTICS="true"
export ENABLE_VOICE_ASSISTANT="true"
export NODE_ENV="development"
export PORT="3002"

# Check if services are running
echo "🔍 Checking services..."

# Check PostgreSQL
if pg_isready -h localhost -p 5432 > /dev/null 2>&1; then
    echo "✅ PostgreSQL is running"
else
    echo "❌ PostgreSQL is not running. Starting..."
    brew services start postgresql@15
fi

# Check Redis
if redis-cli ping > /dev/null 2>&1; then
    echo "✅ Redis is running"
else
    echo "❌ Redis is not running. Starting..."
    brew services start redis
fi

echo "🎯 Starting Enterprise AI Voice Assistant..."
echo "🌐 Server will be available at: http://localhost:3002"
echo "🎤 Voice Assistant demo: http://localhost:3002/solutions/small-business-demo/barbertech-pro"
echo ""
echo "📋 Enterprise Features Active:"
echo "   ✅ PostgreSQL Database"
echo "   ✅ Redis Caching"
echo "   ✅ JWT Authentication"
echo "   ✅ Rate Limiting"
echo "   ✅ Analytics & Monitoring"
echo "   ✅ Multi-tenant Support"
echo "   ✅ Conversation Memory"
echo "   ✅ Enterprise AI Voice Assistant"
echo ""

# Start the development server
npm run dev -- --port 3002
