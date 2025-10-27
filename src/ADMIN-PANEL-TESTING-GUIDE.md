# 🧪 Admin Panel Testing Guide

**Quick reference for testing all admin panel features before and after deployment**

---

## 🔐 Login Testing

### Test 1: Correct Credentials (Lowercase)
```
URL: /login
Email: inchtomilez@gmail.com
Password: Amazing@123
Expected: Redirect to /admin with success toast
```

### Test 2: Incorrect Email Case (Uppercase)
```
URL: /login
Email: Inchtomilez@gmail.com
Password: Amazing@123
Expected: Error message (email is case-sensitive)
```

### Test 3: Wrong Password
```
URL: /login
Email: inchtomilez@gmail.com
Password: wrongpassword
Expected: Error message with red toast
```

### Test 4: Invalid Email Format
```
URL: /login
Email: notanemail
Password: Amazing@123
Expected: Error "Please enter a valid email address"
```

### Test 5: Empty Fields
```
URL: /login
Email: (empty)
Password: (empty)
Expected: Error "Please fill in all fields"
```

### Test 6: Auto-Initialize Admin
```
Action: First time accessing /login (fresh database)
Expected: 
1. Yellow banner: "Initializing default admin account..."
2. Success toast: "Default admin account created successfully!"
3. Login form ready
```

---

## 📊 Dashboard Testing

### Overview Tab

#### Test 1: Stats Cards Display
```
Action: Login and view Overview tab
Check:
- Total Leads card (yellow gradient)
- Awaiting Response card (blue gradient)
- Subscribers card (green gradient)
- Today's Activity card (purple gradient)
All should show numbers (0 if fresh database)
```

#### Test 2: Live Analytics Card
```
Action: Wait on Overview tab for 30 seconds
Check:
- Active Users count
- Page Views (1h) count
- Top Pages list (if any data)
- "Auto-refreshes every 30s" text at bottom
- "Live" badge animating (pulse effect)
```

#### Test 3: Status Breakdown Charts
```
Check:
- Inquiry Status Breakdown (progress bars)
- Chatbot Status Breakdown (progress bars)
Shows: New / Contacted / Closed with counts and percentages
```

#### Test 4: Refresh Button
```
Action: Click "Refresh" button at top
Expected:
- Spinner animation
- "Dashboard data refreshed successfully" toast (green)
- All stats update
```

---

### Inquiries Tab

#### Test 1: Empty State
```
Action: Navigate to Inquiries tab (fresh database)
Expected: 
- Tab shows "Inquiries (0)"
- Empty state message or empty table
```

#### Test 2: View Inquiry Details
```
Prerequisite: Submit contact form first
Action: Click on inquiry card/row
Expected:
- Details modal/panel opens
- Shows: Name, Email, Phone, Company, Budget, Message, Services, Status, Date
```

#### Test 3: Update Status
```
Prerequisite: Have at least 1 inquiry
Action: Click status dropdown → Select "Contacted"
Expected:
- Status updates immediately
- Success toast: "Status updated to 'contacted' successfully"
- Badge color changes (blue → yellow)
```

#### Test 4: Delete Single Inquiry
```
Action: Click delete icon on inquiry
Expected:
- Confirmation dialog
- After confirm: "Inquiry deleted successfully" toast
- Inquiry removed from list
- Count decreases
```

#### Test 5: Bulk Selection
```
Action: Click checkbox on multiple inquiries
Expected:
- Checkboxes select
- "Delete Selected" button appears
- Shows count: "X selected"
```

#### Test 6: Bulk Delete
```
Prerequisite: Select multiple inquiries (checkboxes)
Action: Click "Delete Selected" → Confirm
Expected:
- Success toast: "X inquiry(ies) deleted successfully"
- All selected inquiries removed
- Selection cleared
```

#### Test 7: Search Filter
```
Action: Click "Filters" → Enter search term (e.g., name/email)
Expected:
- Results filter in real-time
- Shows matching inquiries only
- Badge shows result count
```

#### Test 8: Status Filter
```
Action: Click "Filters" → Select status (e.g., "New")
Expected:
- Only inquiries with "New" status shown
- Other statuses hidden
```

#### Test 9: Date Range Filter
```
Action: Click "Filters" → Set "Date From" and "Date To"
Expected:
- Only inquiries within date range shown
```

#### Test 10: Clear Filters
```
Action: Click "Clear All Filters" button
Expected:
- All filters reset
- All inquiries visible again
- Success toast: "Filters cleared"
```

#### Test 11: Export CSV
```
Prerequisite: Have at least 1 inquiry
Action: Click "Export" button
Expected:
- CSV file downloads
- Filename: inchtomilez-inquiries-YYYY-MM-DD.csv
- Contains all inquiry data with headers
```

---

### Chatbot Tab

#### Test 1: Empty State
```
Action: Navigate to Chatbot tab (fresh database)
Expected:
- Tab shows "Chatbot (0)"
- Empty state message
```

#### Test 2: View Chatbot Lead
```
Prerequisite: Complete AI chatbot conversation
Action: Click on lead card
Expected:
- Details panel shows
- Name, Phone, Email, City, Budget, Service, Timeline
- Conversation History visible (if stored)
```

#### Test 3: Conversation History
```
Prerequisite: Lead with conversation data
Check:
- Chat messages visible in chronological order
- User messages and bot responses
- Timestamps
```

#### Test 4: Delete Chatbot Lead
```
Action: Click delete icon → Confirm
Expected:
- Success toast
- Lead removed
- Count decreases
```

#### Test 5: Bulk Delete (same as Inquiries)
```
Action: Select multiple leads → Delete Selected
Expected: Same as Inquiries bulk delete
```

#### Test 6: All Filters (same as Inquiries)
```
Test: Search, Status, Date Range, Clear
Expected: Same behavior as Inquiries tab
```

#### Test 7: Export CSV
```
Action: Click "Export" button
Expected:
- CSV downloads: inchtomilez-chatbot-YYYY-MM-DD.csv
- Contains: Name, Email, Phone, City, Budget, Service, Timeline, Status, Created At
```

---

### Newsletter Tab

#### Test 1: View Subscribers
```
Prerequisite: Have newsletter subscriptions
Check:
- Email addresses listed
- Subscribed dates
- Status (active)
- Source (footer)
```

#### Test 2: Export Newsletter
```
Action: Click "Export" button
Expected:
- CSV downloads: inchtomilez-newsletters-YYYY-MM-DD.csv
- Contains: Email, Subscribed At, Status, Source
```

---

## 🔍 Advanced Filtering Testing

### Test 1: Combined Filters
```
Action: Apply multiple filters simultaneously
- Search: "john"
- Status: "New"
- Date From: "2025-01-01"
Expected: Only results matching ALL criteria shown
```

### Test 2: Sort by Date (Ascending)
```
Action: Click "Date" column header
Expected:
- Oldest inquiries first
- Arrow icon shows ascending order
```

### Test 3: Sort by Date (Descending)
```
Action: Click "Date" column header again
Expected:
- Newest inquiries first (default)
- Arrow icon shows descending order
```

### Test 4: Sort by Name
```
Action: Click "Name" column header
Expected: Alphabetical order (A-Z or Z-A)
```

### Test 5: Sort by Status
```
Action: Click "Status" column header
Expected: Grouped by status (Closed, Contacted, New)
```

---

## 📱 Responsive Testing

### Mobile (≤640px)
```
Check:
- Navigation tabs scroll horizontally
- Stats cards stack vertically (1 column)
- Filters collapse into accordion
- Table/cards scroll horizontally
- Floating action buttons accessible
- All text readable (no overflow)
```

### Tablet (641px-1024px)
```
Check:
- Stats cards: 2 columns
- Filters: 2 columns
- Table visible with horizontal scroll
- Mega menu works properly
```

### Desktop (≥1025px)
```
Check:
- Stats cards: 4 columns
- Filters: 4 columns
- Full table view (no scroll unless many rows)
- All features accessible
```

---

## ⚡ Performance Testing

### Test 1: Large Dataset
```
Prerequisite: Import 100+ inquiries
Action: Navigate through tabs
Expected:
- No lag or freezing
- Smooth scrolling
- Filters work fast
- Export completes within 5 seconds
```

### Test 2: Live Analytics Refresh
```
Action: Stay on Overview tab for 2 minutes
Expected:
- Live analytics refreshes every 30 seconds
- No memory leaks
- CPU usage stays low
```

### Test 3: Rapid Status Updates
```
Action: Quickly change status on 5 inquiries
Expected:
- All updates succeed
- No errors
- UI stays responsive
```

---

## 🚨 Error Handling Testing

### Test 1: Backend Offline
```
Scenario: Supabase Edge Function not deployed
Action: Try to load admin panel
Expected:
- Error message in console
- User-friendly error toast
- Doesn't crash (graceful degradation)
```

### Test 2: Network Error During Submit
```
Scenario: Disconnect internet
Action: Try to update status
Expected:
- Error toast: "Failed to update status. Please try again."
- Data doesn't change
- Can retry after reconnecting
```

### Test 3: Invalid Session
```
Scenario: Clear localStorage
Action: Navigate to /admin
Expected:
- Redirect to /login
- "Verifying authentication..." loading state
```

### Test 4: Expired Session
```
Scenario: Wait 24 hours (or manipulate session expiry)
Action: Try to use admin panel
Expected:
- Session invalid error
- Redirect to login
```

---

## 🔒 Security Testing

### Test 1: Direct Admin Access (Not Logged In)
```
Action: Navigate to /admin without logging in
Expected:
- Redirect to /login
- Protected route blocks access
```

### Test 2: API Call Without Auth Token
```
Action: Open DevTools → Network → Try manual API call
Expected:
- 401 Unauthorized error
- No data returned
```

### Test 3: SQL Injection Attempt
```
Action: In search filter, enter: `'; DROP TABLE inquiries; --`
Expected:
- Safely escaped
- No database changes
- Treats as literal string
```

### Test 4: XSS Attempt
```
Action: Submit contact form with: `<script>alert('XSS')</script>`
Expected:
- Sanitized on display
- Script doesn't execute
- Shows as plain text in admin panel
```

---

## 📋 Integration Testing

### Test 1: Contact Form → Admin Panel
```
Flow:
1. Go to /lets-talk
2. Submit contact form
3. Login to admin
4. Navigate to Inquiries tab
Expected: New inquiry visible with "New" status
```

### Test 2: AI Chatbot → Admin Panel
```
Flow:
1. Complete chatbot conversation
2. Provide all details (name, phone, email, etc.)
3. Login to admin
4. Navigate to Chatbot tab
Expected: 
- New lead visible
- All fields populated
- Conversation history saved
```

### Test 3: Newsletter → Admin Panel
```
Flow:
1. Subscribe via footer
2. Login to admin
3. Navigate to Newsletter tab
Expected: Email visible in subscribers list
```

### Test 4: Dual Storage (Chatbot)
```
Flow:
1. Complete chatbot conversation
2. Check Supabase admin panel → Should see lead
3. Check Google Sheet → Should see lead (if configured)
Expected: Lead in both locations
```

---

## ✅ Pre-Deployment Checklist

**Before deploying, verify:**

- [ ] All 4 tabs load without errors
- [ ] Stats cards show correct numbers
- [ ] Filters work (search, status, date)
- [ ] Sorting works (date, name, status)
- [ ] Status updates work
- [ ] Single delete works
- [ ] Bulk delete works
- [ ] CSV export downloads
- [ ] Live analytics refreshes
- [ ] Mobile responsive
- [ ] Login/logout works
- [ ] Protected routes work
- [ ] No console errors
- [ ] All toasts appear correctly
- [ ] Loading states visible
- [ ] Error messages user-friendly

---

## ✅ Post-Deployment Testing

**After deploying to production:**

1. **Test Login:**
   - Go to: `https://your-domain.com/login`
   - Login with credentials
   - Verify redirect to /admin

2. **Submit Test Data:**
   - Contact form: 1 submission
   - Newsletter: 1 subscription
   - AI Chatbot: 1 lead

3. **Verify Admin Panel:**
   - All 3 items visible in respective tabs
   - Stats updated correctly
   - Export works for all tabs

4. **Test All Features:**
   - Update status
   - Delete single item
   - Export CSV
   - Use filters
   - Check live analytics

5. **Test on Devices:**
   - Desktop browser
   - Mobile phone
   - Tablet
   - Different browsers (Chrome, Safari, Firefox)

6. **Performance Check:**
   - Page loads < 3 seconds
   - No errors in console
   - Smooth interactions

---

## 🐛 Common Issues & Solutions

### Issue: Stats show 0 but data exists
**Solution:** Click Refresh button or reload page

### Issue: CSV export is empty
**Solution:** Check if data exists in that tab first

### Issue: Can't login (correct credentials)
**Solution:** 
- Ensure email is lowercase: `inchtomilez@gmail.com`
- Clear browser cache
- Check backend is deployed

### Issue: Live analytics not updating
**Solution:**
- Wait full 30 seconds
- Check backend deployment
- Check browser console for errors

### Issue: Bulk delete not working
**Solution:**
- Select items using checkboxes first
- Confirm deletion in popup
- Check network tab for errors

---

## 📊 Test Results Template

```markdown
## Admin Panel Test Results

**Date:** YYYY-MM-DD
**Tester:** [Your Name]
**Environment:** [Development/Production]

### Login Tests
- [ ] ✅ Correct credentials work
- [ ] ✅ Incorrect credentials rejected
- [ ] ✅ Auto-initialization works

### Dashboard Tests
- [ ] ✅ Stats cards display
- [ ] ✅ Live analytics refresh
- [ ] ✅ Status breakdowns show
- [ ] ✅ Refresh button works

### Inquiries Tests
- [ ] ✅ View inquiry details
- [ ] ✅ Update status
- [ ] ✅ Delete single
- [ ] ✅ Bulk delete
- [ ] ✅ Filters work
- [ ] ✅ Export CSV

### Chatbot Tests
- [ ] ✅ View lead details
- [ ] ✅ Conversation history
- [ ] ✅ Delete works
- [ ] ✅ Export CSV

### Newsletter Tests
- [ ] ✅ Subscribers list
- [ ] ✅ Export CSV

### Integration Tests
- [ ] ✅ Contact form → Admin
- [ ] ✅ AI Chatbot → Admin
- [ ] ✅ Newsletter → Admin

### Mobile Tests
- [ ] ✅ Mobile responsive
- [ ] ✅ All features work on mobile

### Security Tests
- [ ] ✅ Protected routes work
- [ ] ✅ Auth required for admin
- [ ] ✅ No XSS vulnerabilities

**Overall Status:** ✅ PASS / ❌ FAIL
**Notes:** [Any issues or observations]
```

---

**Happy Testing! 🚀**

Use this guide to thoroughly test your admin panel before and after deployment. Check off each test as you complete it to ensure nothing is missed.
