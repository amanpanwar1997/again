import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.ts';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.use('*', logger(console.log));

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Health check
app.get('/make-server-dfdfec0d/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================================
// NEWSLETTER SUBSCRIPTIONS
// ============================================================

// Subscribe to newsletter
app.post('/make-server-dfdfec0d/newsletter/subscribe', async (c) => {
  try {
    const { email } = await c.req.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return c.json({ error: 'Invalid email address' }, 400);
    }

    // Check if already subscribed
    const existingKey = `newsletter:${email}`;
    const existing = await kv.get(existingKey);

    if (existing) {
      return c.json({ 
        message: 'Already subscribed',
        alreadySubscribed: true 
      }, 200);
    }

    // Store subscription
    const subscriptionData = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      source: 'footer'
    };

    await kv.set(existingKey, subscriptionData);

    console.log('Newsletter subscription:', email);

    return c.json({ 
      success: true,
      message: 'Successfully subscribed to newsletter' 
    }, 201);

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return c.json({ 
      error: 'Failed to subscribe',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get all newsletter subscribers (for admin)
app.get('/make-server-dfdfec0d/newsletter/subscribers', async (c) => {
  try {
    const subscribers = await kv.getByPrefix('newsletter:');
    
    return c.json({ 
      count: subscribers.length,
      subscribers: subscribers.map(sub => ({
        email: sub.email,
        subscribedAt: sub.subscribedAt,
        status: sub.status
      }))
    });

  } catch (error) {
    console.error('Get subscribers error:', error);
    return c.json({ 
      error: 'Failed to get subscribers',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// ============================================================
// CONTACT FORM INQUIRIES
// ============================================================

// Submit contact form
app.post('/make-server-dfdfec0d/contact/submit', async (c) => {
  try {
    const formData = await c.req.json();

    // Validate required fields
    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      return c.json({ 
        error: 'Missing required fields',
        required: ['name', 'phone', 'email', 'message']
      }, 400);
    }

    // Validate email
    if (!email.includes('@')) {
      return c.json({ error: 'Invalid email address' }, 400);
    }

    // Generate unique ID
    const inquiryId = `inquiry:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;

    // Store inquiry
    const inquiryData = {
      id: inquiryId,
      name,
      phone,
      email,
      company: formData.company || null,
      budget: formData.budget || null,
      message,
      services: formData.services || [],
      source: formData.source || 'contact_form',
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await kv.set(inquiryId, inquiryData);

    console.log('Contact form submission:', { name, email, phone });

    return c.json({ 
      success: true,
      message: 'Your inquiry has been submitted successfully. We will contact you within 24 hours.',
      inquiryId 
    }, 201);

  } catch (error) {
    console.error('Contact form submission error:', error);
    return c.json({ 
      error: 'Failed to submit inquiry',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get all inquiries (for admin)
app.get('/make-server-dfdfec0d/contact/inquiries', async (c) => {
  try {
    const inquiries = await kv.getByPrefix('inquiry:');
    
    // Sort by date (newest first)
    const sortedInquiries = inquiries.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return c.json({ 
      count: inquiries.length,
      inquiries: sortedInquiries
    });

  } catch (error) {
    console.error('Get inquiries error:', error);
    return c.json({ 
      error: 'Failed to get inquiries',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Update inquiry status
app.put('/make-server-dfdfec0d/contact/inquiries/:id/status', async (c) => {
  try {
    const inquiryId = c.req.param('id');
    const { status } = await c.req.json();

    if (!['new', 'contacted', 'closed'].includes(status)) {
      return c.json({ error: 'Invalid status' }, 400);
    }

    const inquiry = await kv.get(inquiryId);

    if (!inquiry) {
      return c.json({ error: 'Inquiry not found' }, 404);
    }

    const updatedInquiry = {
      ...inquiry,
      status,
      updatedAt: new Date().toISOString()
    };

    await kv.set(inquiryId, updatedInquiry);

    return c.json({ 
      success: true,
      inquiry: updatedInquiry
    });

  } catch (error) {
    console.error('Update inquiry status error:', error);
    return c.json({ 
      error: 'Failed to update inquiry',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// ============================================================
// CHATBOT LEADS
// ============================================================

// Submit chatbot lead
app.post('/make-server-dfdfec0d/chatbot/lead', async (c) => {
  try {
    const leadData = await c.req.json();

    // Validate required fields
    const { name, phone, email } = leadData;

    if (!name || !phone || !email) {
      return c.json({ 
        error: 'Missing required fields',
        required: ['name', 'phone', 'email']
      }, 400);
    }

    // Generate unique ID
    const leadId = `chatbot:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;

    // Store lead
    const lead = {
      id: leadId,
      name,
      phone,
      email,
      city: leadData.city || null,
      budget: leadData.budget || null,
      service: leadData.service || null,
      timeline: leadData.timeline || null,
      conversationHistory: leadData.conversationHistory || [],
      source: 'ai_chatbot',
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await kv.set(leadId, lead);

    console.log('Chatbot lead captured:', { name, email, phone });

    return c.json({ 
      success: true,
      message: 'Lead captured successfully',
      leadId 
    }, 201);

  } catch (error) {
    console.error('Chatbot lead submission error:', error);
    return c.json({ 
      error: 'Failed to capture lead',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Get all chatbot leads (for admin)
app.get('/make-server-dfdfec0d/chatbot/leads', async (c) => {
  try {
    const leads = await kv.getByPrefix('chatbot:');
    
    // Sort by date (newest first)
    const sortedLeads = leads.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return c.json({ 
      count: leads.length,
      leads: sortedLeads
    });

  } catch (error) {
    console.error('Get chatbot leads error:', error);
    return c.json({ 
      error: 'Failed to get leads',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// ============================================================
// ANALYTICS
// ============================================================

// Get dashboard stats
app.get('/make-server-dfdfec0d/analytics/stats', async (c) => {
  try {
    const [newsletters, inquiries, chatbotLeads] = await Promise.all([
      kv.getByPrefix('newsletter:'),
      kv.getByPrefix('inquiry:'),
      kv.getByPrefix('chatbot:')
    ]);

    // Calculate stats
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayInquiries = inquiries.filter(i => 
      new Date(i.createdAt) >= today
    );

    const todayLeads = chatbotLeads.filter(l => 
      new Date(l.createdAt) >= today
    );

    const newInquiries = inquiries.filter(i => i.status === 'new');
    const newLeads = chatbotLeads.filter(l => l.status === 'new');

    return c.json({
      newsletters: {
        total: newsletters.length,
        active: newsletters.filter(n => n.status === 'active').length
      },
      inquiries: {
        total: inquiries.length,
        today: todayInquiries.length,
        new: newInquiries.length,
        contacted: inquiries.filter(i => i.status === 'contacted').length,
        closed: inquiries.filter(i => i.status === 'closed').length
      },
      chatbotLeads: {
        total: chatbotLeads.length,
        today: todayLeads.length,
        new: newLeads.length,
        contacted: chatbotLeads.filter(l => l.status === 'contacted').length,
        closed: chatbotLeads.filter(l => l.status === 'closed').length
      },
      totalLeads: inquiries.length + chatbotLeads.length,
      totalNewLeads: newInquiries.length + newLeads.length
    });

  } catch (error) {
    console.error('Get analytics stats error:', error);
    return c.json({ 
      error: 'Failed to get stats',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Export data (CSV format)
app.get('/make-server-dfdfec0d/export/:type', async (c) => {
  try {
    const type = c.req.param('type');
    let data: any[] = [];
    let headers: string[] = [];

    if (type === 'newsletters') {
      data = await kv.getByPrefix('newsletter:');
      headers = ['Email', 'Subscribed At', 'Status', 'Source'];
    } else if (type === 'inquiries') {
      data = await kv.getByPrefix('inquiry:');
      headers = ['Name', 'Email', 'Phone', 'Company', 'Budget', 'Message', 'Services', 'Status', 'Created At'];
    } else if (type === 'chatbot') {
      data = await kv.getByPrefix('chatbot:');
      headers = ['Name', 'Email', 'Phone', 'City', 'Budget', 'Service', 'Timeline', 'Status', 'Created At'];
    } else {
      return c.json({ error: 'Invalid export type' }, 400);
    }

    // Generate CSV
    let csv = headers.join(',') + '\n';

    if (type === 'newsletters') {
      data.forEach(item => {
        csv += `${item.email},${item.subscribedAt},${item.status},${item.source}\n`;
      });
    } else if (type === 'inquiries') {
      data.forEach(item => {
        csv += `"${item.name}","${item.email}","${item.phone}","${item.company || ''}","${item.budget || ''}","${item.message.replace(/"/g, '""')}","${(item.services || []).join('; ')}","${item.status}","${item.createdAt}"\n`;
      });
    } else if (type === 'chatbot') {
      data.forEach(item => {
        csv += `"${item.name}","${item.email}","${item.phone}","${item.city || ''}","${item.budget || ''}","${item.service || ''}","${item.timeline || ''}","${item.status}","${item.createdAt}"\n`;
      });
    }

    return new Response(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="inchtomilez-${type}-${new Date().toISOString().split('T')[0]}.csv"`
      }
    });

  } catch (error) {
    console.error('Export error:', error);
    return c.json({ 
      error: 'Failed to export data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// ============================================================
// DELETE OPERATIONS
// ============================================================

// Delete contact inquiry
app.delete('/make-server-dfdfec0d/contact/inquiries/:id', async (c) => {
  try {
    const inquiryId = c.req.param('id');
    
    const inquiry = await kv.get(inquiryId);
    
    if (!inquiry) {
      return c.json({ error: 'Inquiry not found' }, 404);
    }
    
    await kv.del(inquiryId);
    
    console.log('Inquiry deleted:', inquiryId);
    
    return c.json({ 
      success: true,
      message: 'Inquiry deleted successfully',
      id: inquiryId
    });
    
  } catch (error) {
    console.error('Delete inquiry error:', error);
    return c.json({ 
      error: 'Failed to delete inquiry',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Delete chatbot lead
app.delete('/make-server-dfdfec0d/chatbot/leads/:id', async (c) => {
  try {
    const leadId = c.req.param('id');
    
    const lead = await kv.get(leadId);
    
    if (!lead) {
      return c.json({ error: 'Lead not found' }, 404);
    }
    
    await kv.del(leadId);
    
    console.log('Chatbot lead deleted:', leadId);
    
    return c.json({ 
      success: true,
      message: 'Lead deleted successfully',
      id: leadId
    });
    
  } catch (error) {
    console.error('Delete lead error:', error);
    return c.json({ 
      error: 'Failed to delete lead',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Bulk delete contact inquiries
app.post('/make-server-dfdfec0d/contact/inquiries/bulk-delete', async (c) => {
  try {
    const { ids } = await c.req.json();
    
    if (!Array.isArray(ids) || ids.length === 0) {
      return c.json({ error: 'Invalid or empty IDs array' }, 400);
    }
    
    await kv.mdel(ids);
    
    console.log(`Bulk deleted ${ids.length} inquiries`);
    
    return c.json({ 
      success: true,
      message: `${ids.length} inquiries deleted successfully`,
      count: ids.length
    });
    
  } catch (error) {
    console.error('Bulk delete inquiries error:', error);
    return c.json({ 
      error: 'Failed to bulk delete inquiries',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Bulk delete chatbot leads
app.post('/make-server-dfdfec0d/chatbot/leads/bulk-delete', async (c) => {
  try {
    const { ids } = await c.req.json();
    
    if (!Array.isArray(ids) || ids.length === 0) {
      return c.json({ error: 'Invalid or empty IDs array' }, 400);
    }
    
    await kv.mdel(ids);
    
    console.log(`Bulk deleted ${ids.length} chatbot leads`);
    
    return c.json({ 
      success: true,
      message: `${ids.length} leads deleted successfully`,
      count: ids.length
    });
    
  } catch (error) {
    console.error('Bulk delete leads error:', error);
    return c.json({ 
      error: 'Failed to bulk delete leads',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// ============================================================
// LIVE USER ANALYTICS
// ============================================================

// Track page view (simulated - stores in KV with expiry)
app.post('/make-server-dfdfec0d/analytics/pageview', async (c) => {
  try {
    const { page, sessionId } = await c.req.json();
    
    const viewId = `pageview:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;
    const sessionKey = `session:${sessionId}`;
    
    // Store page view
    await kv.set(viewId, {
      page,
      sessionId,
      timestamp: new Date().toISOString(),
      userAgent: c.req.header('user-agent') || 'Unknown'
    });
    
    // Update session activity
    await kv.set(sessionKey, {
      sessionId,
      lastActivity: new Date().toISOString(),
      lastPage: page
    });
    
    return c.json({ success: true });
    
  } catch (error) {
    console.error('Track pageview error:', error);
    return c.json({ error: 'Failed to track pageview' }, 500);
  }
});

// Get live analytics
app.get('/make-server-dfdfec0d/analytics/live', async (c) => {
  try {
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    
    // Get all sessions
    const sessions = await kv.getByPrefix('session:');
    
    // Filter active sessions (activity in last 5 minutes)
    const activeSessions = sessions.filter(session => {
      const lastActivity = new Date(session.lastActivity);
      return lastActivity >= fiveMinutesAgo;
    });
    
    // Get all page views from last hour
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const allPageViews = await kv.getByPrefix('pageview:');
    const recentPageViews = allPageViews.filter(view => {
      const viewTime = new Date(view.timestamp);
      return viewTime >= oneHourAgo;
    });
    
    // Calculate page view counts
    const pageViewCounts: Record<string, number> = {};
    recentPageViews.forEach(view => {
      pageViewCounts[view.page] = (pageViewCounts[view.page] || 0) + 1;
    });
    
    // Get top pages
    const topPages = Object.entries(pageViewCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([page, count]) => ({ page, count }));
    
    return c.json({
      activeUsers: activeSessions.length,
      totalPageViews: recentPageViews.length,
      pageViewsLastHour: recentPageViews.length,
      topPages,
      activeSessions: activeSessions.map(s => ({
        sessionId: s.sessionId,
        lastPage: s.lastPage,
        lastActivity: s.lastActivity
      }))
    });
    
  } catch (error) {
    console.error('Get live analytics error:', error);
    return c.json({ 
      error: 'Failed to get live analytics',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// ============================================================
// ADMIN USER INITIALIZATION
// ============================================================

// Initialize default admin user
app.post('/make-server-dfdfec0d/auth/init-admin', async (c) => {
  try {
    const defaultEmail = 'inchtomilez@gmail.com';
    const defaultPassword = 'Amazing@123';
    
    // Check if user already exists
    const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
    
    if (listError) {
      console.error('Error checking existing users:', listError);
      return c.json({ 
        error: 'Failed to check existing users',
        details: listError.message 
      }, 500);
    }
    
    // Check if default admin already exists
    const adminExists = existingUsers.users.some(user => user.email === defaultEmail);
    
    if (adminExists) {
      return c.json({ 
        success: true,
        message: 'Default admin user already exists',
        alreadyExists: true
      }, 200);
    }
    
    // Create default admin user
    const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
      email: defaultEmail,
      password: defaultPassword,
      email_confirm: true, // Auto-confirm email
      user_metadata: {
        name: 'Inchtomilez Admin',
        role: 'admin',
        created_via: 'auto_initialization'
      }
    });
    
    if (createError) {
      console.error('Error creating admin user:', createError);
      return c.json({ 
        error: 'Failed to create admin user',
        details: createError.message 
      }, 500);
    }
    
    console.log('Default admin user created successfully:', defaultEmail);
    
    return c.json({ 
      success: true,
      message: 'Default admin user created successfully',
      email: defaultEmail,
      userId: newUser.user.id
    }, 201);
    
  } catch (error) {
    console.error('Admin initialization error:', error);
    return c.json({ 
      error: 'Failed to initialize admin user',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Check if default admin exists
app.get('/make-server-dfdfec0d/auth/check-admin', async (c) => {
  try {
    const defaultEmail = 'inchtomilez@gmail.com';
    
    const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
    
    if (listError) {
      return c.json({ 
        error: 'Failed to check admin status',
        details: listError.message 
      }, 500);
    }
    
    const adminExists = existingUsers.users.some(user => user.email === defaultEmail);
    
    return c.json({ 
      exists: adminExists,
      email: defaultEmail
    });
    
  } catch (error) {
    console.error('Check admin error:', error);
    return c.json({ 
      error: 'Failed to check admin status',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Start server
Deno.serve(app.fetch);
