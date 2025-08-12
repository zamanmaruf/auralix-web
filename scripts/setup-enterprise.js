const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function setupEnterprise() {
  console.log('🚀 Setting up Enterprise Auralix System...');

  try {
    // 1. Create default tenant
    console.log('📋 Creating default tenant...');
    const defaultTenant = await prisma.tenant.create({
      data: {
        name: 'Halifax Barber Co.',
        domain: 'halifaxbarberco.com',
        apiKey: `api_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        isActive: true,
      }
    });

    // 2. Create tenant settings
    console.log('⚙️ Creating tenant settings...');
    await prisma.tenantSettings.create({
      data: {
        tenantId: defaultTenant.id,
        businessName: 'Halifax Barber Co.',
        businessHours: {
          monday: { open: '09:00', close: '18:00' },
          tuesday: { open: '09:00', close: '18:00' },
          wednesday: { open: '09:00', close: '18:00' },
          thursday: { open: '09:00', close: '18:00' },
          friday: { open: '09:00', close: '18:00' },
          saturday: { open: '09:00', close: '18:00' },
          sunday: { open: null, close: null }
        },
        services: [
          { name: 'Haircut', price: 25, duration: 30 },
          { name: 'Beard Trim', price: 15, duration: 20 },
          { name: 'Haircut & Beard Combo', price: 35, duration: 45 },
          { name: 'Kids Haircut', price: 20, duration: 25 },
          { name: 'Senior Haircut', price: 20, duration: 30 }
        ],
        barbers: [
          { name: 'Mike Johnson', specialty: 'Master Barber', experience: 10 },
          { name: 'Emma Wilson', specialty: 'Stylist', experience: 6 },
          { name: 'David Brown', specialty: 'Traditional cuts', experience: 8 },
          { name: 'Sarah Davis', specialty: 'Color specialist', experience: 5 },
          { name: 'James Miller', specialty: 'Junior barber', experience: 3 }
        ],
        timeSlots: [
          '9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '4:00 PM', '5:00 PM'
        ],
        pricing: {
          haircut: 25,
          beardTrim: 15,
          combo: 35,
          kids: 20,
          senior: 20
        },
        notifications: {
          email: true,
          sms: true,
          push: false
        },
        integrations: {
          stripe: false,
          twilio: false,
          googleCalendar: false
        },
        customBranding: {
          primaryColor: '#FF6B35',
          secondaryColor: '#2C3E50',
          logo: null
        }
      }
    });

    // 3. Create super admin user
    console.log('👤 Creating super admin user...');
    const hashedPassword = await bcrypt.hash('admin123', 12);
    const superAdmin = await prisma.user.create({
      data: {
        email: 'admin@auralix.com',
        password: hashedPassword,
        firstName: 'Super',
        lastName: 'Admin',
        role: 'SUPER_ADMIN',
        isActive: true,
        tenantId: defaultTenant.id
      }
    });

    // 4. Create tenant admin user
    console.log('👤 Creating tenant admin user...');
    const tenantAdminPassword = await bcrypt.hash('admin123', 12);
    const tenantAdmin = await prisma.user.create({
      data: {
        email: 'manager@halifaxbarberco.com',
        password: tenantAdminPassword,
        firstName: 'Shop',
        lastName: 'Manager',
        role: 'TENANT_ADMIN',
        isActive: true,
        tenantId: defaultTenant.id
      }
    });

    // 5. Create staff users
    console.log('👥 Creating staff users...');
    const staffUsers = [
      { email: 'mike@halifaxbarberco.com', firstName: 'Mike', lastName: 'Johnson' },
      { email: 'emma@halifaxbarberco.com', firstName: 'Emma', lastName: 'Wilson' },
      { email: 'david@halifaxbarberco.com', firstName: 'David', lastName: 'Brown' },
      { email: 'sarah@halifaxbarberco.com', firstName: 'Sarah', lastName: 'Davis' },
      { email: 'james@halifaxbarberco.com', firstName: 'James', lastName: 'Miller' }
    ];

    for (const staff of staffUsers) {
      const staffPassword = await bcrypt.hash('staff123', 12);
      await prisma.user.create({
        data: {
          email: staff.email,
          password: staffPassword,
          firstName: staff.firstName,
          lastName: staff.lastName,
          role: 'STAFF',
          isActive: true,
          tenantId: defaultTenant.id
        }
      });
    }

    // 6. Create sample customer
    console.log('👤 Creating sample customer...');
    const customerPassword = await bcrypt.hash('customer123', 12);
    const customer = await prisma.user.create({
      data: {
        email: 'customer@example.com',
        password: customerPassword,
        firstName: 'John',
        lastName: 'Doe',
        role: 'CUSTOMER',
        isActive: true,
        tenantId: defaultTenant.id
      }
    });

    // 7. Create sample conversation
    console.log('💬 Creating sample conversation...');
    const sampleConversation = await prisma.conversation.create({
      data: {
        sessionId: 'sample_session_123',
        userId: customer.id,
        tenantId: defaultTenant.id,
        status: 'COMPLETED',
        intent: 'booking',
        confidence: 0.95,
        entities: {
          service: 'Haircut & Beard Combo',
          barber: 'Mike Johnson',
          date: 'Monday',
          time: '2:00 PM'
        },
        context: {
          bookingStage: 'completed',
          customerName: 'John Doe',
          preferredService: 'Haircut & Beard Combo',
          preferredBarber: 'Mike Johnson',
          preferredDate: 'Monday',
          preferredTime: '2:00 PM',
          conversationHistory: [
            'User: I want to book a haircut and beard combo',
            'Assistant: Great! Which barber would you prefer?',
            'User: Mike Johnson',
            'Assistant: Perfect! What day would you like to come in?',
            'User: Monday at 2 PM',
            'Assistant: Excellent! What\'s your name?',
            'User: John Doe',
            'Assistant: Thanks John! Your appointment is confirmed.'
          ]
        },
        processingTime: 1500,
        endedAt: new Date()
      }
    });

    // 8. Create sample messages
    console.log('💬 Creating sample messages...');
    const sampleMessages = [
      { content: 'I want to book a haircut and beard combo', role: 'USER' },
      { content: 'Great! Which barber would you prefer?', role: 'ASSISTANT' },
      { content: 'Mike Johnson', role: 'USER' },
      { content: 'Perfect! What day would you like to come in?', role: 'ASSISTANT' },
      { content: 'Monday at 2 PM', role: 'USER' },
      { content: 'Excellent! What\'s your name?', role: 'ASSISTANT' },
      { content: 'John Doe', role: 'USER' },
      { content: 'Thanks John! Your appointment is confirmed.', role: 'ASSISTANT' }
    ];

    for (const message of sampleMessages) {
      await prisma.message.create({
        data: {
          conversationId: sampleConversation.id,
          content: message.content,
          role: message.role,
          type: 'TEXT'
        }
      });
    }

    // 9. Create sample booking
    console.log('📅 Creating sample booking...');
    await prisma.booking.create({
      data: {
        conversationId: sampleConversation.id,
        customerName: 'John Doe',
        customerPhone: '(902) 555-0123',
        customerEmail: 'john.doe@example.com',
        service: 'Haircut & Beard Combo',
        barber: 'Mike Johnson',
        date: new Date('2024-01-15'),
        time: '2:00 PM',
        status: 'CONFIRMED',
        totalAmount: 35.00,
        paymentStatus: 'PAID'
      }
    });

    // 10. Create sample analytics
    console.log('📊 Creating sample analytics...');
    const analyticsTypes = [
      'CONVERSATION_START',
      'INTENT_RECOGNITION',
      'ENTITY_EXTRACTION',
      'BOOKING_COMPLETED',
      'USER_SATISFACTION'
    ];

    for (const type of analyticsTypes) {
      await prisma.analytics.create({
        data: {
          tenantId: defaultTenant.id,
          type: type,
          data: {
            count: Math.floor(Math.random() * 100) + 1,
            timestamp: new Date()
          },
          metadata: {
            source: 'sample_data'
          }
        }
      });
    }

    console.log('✅ Enterprise setup completed successfully!');
    console.log('\n📋 Setup Summary:');
    console.log(`- Tenant: ${defaultTenant.name} (${defaultTenant.domain})`);
    console.log(`- API Key: ${defaultTenant.apiKey}`);
    console.log(`- Super Admin: admin@auralix.com / admin123`);
    console.log(`- Tenant Admin: manager@halifaxbarberco.com / admin123`);
    console.log(`- Sample Customer: customer@example.com / customer123`);
    console.log(`- Staff Users: [email]@halifaxbarberco.com / staff123`);

  } catch (error) {
    console.error('❌ Setup failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run setup if called directly
if (require.main === module) {
  setupEnterprise()
    .then(() => {
      console.log('🎉 Enterprise setup completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Setup failed:', error);
      process.exit(1);
    });
}

module.exports = { setupEnterprise };
