# Supabase Backend Guidelines

## Overview
The Inchtomilez website uses Supabase as a backend database for managing leads, inquiries, and subscriptions. This document outlines how the integration works and how to use it.

---

## Architecture

### Three-Tier Architecture:
```
Frontend (React) 
    ↓
Supabase Edge Function (API Server)
    ↓
KV Store Database (Supabase)
```

---

## API Structure

### Base URL:
```
https://{projectId}.supabase.co/functions/v1/make-server-dfdfec0d
```

### Authentication:
All requests use `Authorization: Bearer {publicAnonKey}` header

### Endpoints:

#### Newsletter:
- `POST /newsletter/subscribe` - Subscribe email
- `GET /newsletter/subscribers` - Get all subscribers

#### Contact Form:
- `POST /contact/submit` - Submit inquiry
- `GET /contact/inquiries` - Get all inquiries
- `PUT /contact/inquiries/:id/status` - Update status

#### Chatbot:
- `POST /chatbot/lead` - Submit lead
- `GET /chatbot/leads` - Get all leads

#### Analytics:
- `GET /analytics/stats` - Get statistics
- `GET /export/:type` - Export CSV

---

## Data Storage

### KV Store Keys:

```typescript
// Newsletter
newsletter:{email}

// Contact Inquiry
inquiry:{timestamp}:{randomId}

// Chatbot Lead
chatbot:{timestamp}:{randomId}
```

### Data Structures:

```typescript
// Newsletter Subscription
{
  email: string,
  subscribedAt: string (ISO timestamp),
  status: 'active',
  source: 'footer'
}

// Contact Inquiry
{
  id: string,
  name: string,
  phone: string,
  email: string,
  company?: string,
  budget?: string,
  message: string,
  services: string[],
  status: 'new' | 'contacted' | 'closed',
  source: string,
  createdAt: string,
  updatedAt: string
}

// Chatbot Lead
{
  id: string,
  name: string,
  phone: string,
  email: string,
  city?: string,
  budget?: string,
  service?: string,
  timeline?: string,
  conversationHistory: any[],
  status: 'new' | 'contacted' | 'closed',
  source: 'ai_chatbot',
  createdAt: string,
  updatedAt: string
}
```

---

## Frontend Integration

### Import API Client:
```typescript
import { 
  newsletterAPI, 
  contactAPI, 
  chatbotAPI,
  analyticsAPI,
  exportAPI 
} from './utils/supabase/client';
```

### Usage Examples:

```typescript
// Subscribe to newsletter
await newsletterAPI.subscribe('user@example.com');

// Submit contact form
await contactAPI.submit({
  name: 'John Doe',
  phone: '+91 9876543210',
  email: 'john@example.com',
  message: 'Need help with digital marketing',
  services: ['Digital Marketing', 'SEO']
});

// Submit chatbot lead
await chatbotAPI.submitLead({
  name: 'Jane Smith',
  phone: '9876543210',
  email: 'jane@example.com',
  city: 'Mumbai',
  service: 'Website Development',
  budget: '₹1,00,000 - ₹2,00,000',
  conversationHistory: [...]
});

// Get statistics
const stats = await analyticsAPI.getStats();

// Export data
await exportAPI.download('inquiries'); // or 'newsletters', 'chatbot'
```

---

## Components

### ContactFormWithSupabase
**Location:** `/components/ContactFormWithSupabase.tsx`

**Features:**
- Full form validation
- Service selection badges
- Loading states
- Success/error messages
- Auto-reset after submission

**Usage:**
```tsx
import ContactFormWithSupabase from './components/ContactFormWithSupabase';

<ContactFormWithSupabase />
```

### Footer (Newsletter)
**Location:** `/components/Footer.tsx`

**Features:**
- Email validation
- Duplicate detection
- Loading states
- Success/error messages

### AIChatBot (Dual Storage)
**Location:** `/components/AIChatBot.tsx`

**Features:**
- Saves to Google Sheets (primary)
- Saves to Supabase (backup)
- Parallel saves with Promise.allSettled
- Fallback to localStorage
- Error handling

---

## Admin Dashboard

### Access:
`/admin` route

### Tabs:
1. **Overview** - Statistics and quick actions
2. **Contact Inquiries** - Form submissions
3. **Chatbot Leads** - AI chatbot conversations
4. **Newsletter** - Email subscribers

### Features:
- View all data
- Update inquiry status
- Export to CSV
- Real-time statistics
- Responsive design

---

## Error Handling

### Frontend:
```typescript
try {
  await contactAPI.submit(formData);
  // Show success message
} catch (error) {
  console.error('Submission error:', error);
  // Show error message to user
}
```

### Backend:
- All errors logged to console
- Error responses include detailed messages
- HTTP status codes: 400 (validation), 404 (not found), 500 (server error)

---

## Status Management

### Inquiry Statuses:
- `new` - Just received (blue badge)
- `contacted` - You responded (yellow badge)
- `closed` - Completed (green badge)

### Updating Status:
```typescript
await contactAPI.updateStatus(inquiryId, 'contacted');
```

---

## CSV Export

### Format:
```csv
Name,Email,Phone,Company,Budget,Message,Services,Status,Created At
"John Doe","john@example.com","+91 9876543210","ABC Corp","₹50,000","Need help...","Digital Marketing; SEO","new","2025-10-26T14:30:00Z"
```

### Usage:
```typescript
// Export all inquiries
await exportAPI.download('inquiries');

// Export newsletter subscribers
await exportAPI.download('newsletters');

// Export chatbot leads
await exportAPI.download('chatbot');
```

---

## Security

### Best Practices:
- ✅ Email validation before submission
- ✅ Phone validation for chatbot
- ✅ API authentication required
- ✅ CORS properly configured
- ✅ Server-side validation
- ✅ Error messages sanitized

### Environment Variables:
```
SUPABASE_URL              - Project URL
SUPABASE_SERVICE_ROLE_KEY - Backend key (secret!)
SUPABASE_ANON_KEY         - Frontend key (safe to expose)
```

---

## File Structure

```
/supabase/functions/server/
  ├── index.tsx        - API server (main)
  └── kv_store.tsx     - Database utilities (protected)

/utils/supabase/
  ├── client.ts        - Frontend API client
  └── info.tsx         - Supabase config

/components/
  ├── ContactFormWithSupabase.tsx - Contact form
  ├── Footer.tsx                  - Newsletter
  └── AIChatBot.tsx              - Chatbot (dual storage)

/pages/
  └── Admin.tsx        - Admin dashboard
```

---

## Testing

### Manual Testing:
1. Submit newsletter subscription (footer)
2. Submit contact form (/lets-talk)
3. Complete chatbot conversation
4. Check /admin dashboard
5. Export CSV files

### Console Logging:
```typescript
// Frontend logs
console.log('Newsletter subscription successful:', email);
console.log('Contact form submitted successfully:', response);

// Backend logs
console.log('Newsletter subscription:', email);
console.log('Contact form submission:', { name, email, phone });
```

---

## Troubleshooting

### Common Issues:

**"Failed to subscribe" error:**
- Check browser console
- Verify Supabase connection
- Check API endpoint

**Data not appearing:**
- Refresh admin dashboard
- Check browser console
- Verify form submission succeeded

**Export not working:**
- Check browser allows downloads
- Verify data exists
- Check console for errors

---

## Maintenance

### Daily Tasks:
- Check /admin for new leads
- Respond to "new" status inquiries
- Update status to "contacted" or "closed"

### Weekly Tasks:
- Export data for backup
- Review analytics
- Clean up old/spam entries (future feature)

### Monthly Tasks:
- Review service popularity trends
- Analyze lead sources
- Export for email campaigns

---

## Future Enhancements

### Phase 2:
- [ ] Password protection for /admin
- [ ] User authentication (login/logout)
- [ ] Role-based access (admin/viewer)

### Phase 3:
- [ ] Email notifications on new lead
- [ ] Auto-reply to customer
- [ ] Email templates

### Phase 4:
- [ ] Charts and graphs
- [ ] Lead source tracking
- [ ] Conversion funnels
- [ ] Geographic analytics

---

## Documentation

- **Full Guide:** `/SUPABASE-INTEGRATION-COMPLETE.md`
- **Quick Reference:** `/SUPABASE-QUICK-REFERENCE.md`
- **Setup Summary:** `/SUPABASE-SETUP-SUMMARY.md`
- **This File:** `/SUPABASE-BACKEND-GUIDELINES.md`

---

## Support

**Supabase:**
- Dashboard: https://app.supabase.com
- Docs: https://supabase.com/docs
- Support: https://supabase.com/support

**Project Files:**
- Backend: `/supabase/functions/server/index.tsx`
- Frontend: `/utils/supabase/client.ts`
- Admin: `/pages/Admin.tsx`

---

**Last Updated:** October 26, 2025
**Status:** ✅ PRODUCTION READY
**Version:** 1.0
