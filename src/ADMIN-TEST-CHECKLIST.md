# ✅ Admin Panel - Test Checklist

**Print this page and check off each item as you test.**

---

## 🔐 Login Test (2 minutes)

- [ ] Visit `http://localhost:5173/login`
- [ ] Page loads with black background
- [ ] "Use Default Credentials" button visible
- [ ] Click button → fields auto-fill
- [ ] Email shows: `inchtomilez@gmail.com`
- [ ] Password shows: `Amazing@123`
- [ ] Click "Sign In" button
- [ ] See "Login successful!" toast (green)
- [ ] Redirected to `/admin` page

**If ANY fail, check:** Backend server running? Supabase configured?

---

## 📊 Dashboard Test (3 minutes)

- [ ] Dashboard loads (no blank screen)
- [ ] Header shows "Inchtomilez Admin Dashboard"
- [ ] Your email shows in header (top-right area)
- [ ] 4 stat cards visible (yellow, blue, green, purple)
- [ ] 4 tabs visible (Overview, Inquiries, Chatbot, Newsletter)
- [ ] Tab counts show numbers (or "0" if no data)
- [ ] No console errors in browser DevTools

**If ANY fail, check:** Browser console errors? Network tab showing 200 OK?

---

## 🔘 Button Test - Header (1 minute)

- [ ] Click **Refresh** button
- [ ] See "Dashboard data refreshed successfully" toast (green)
- [ ] Page doesn't redirect

- [ ] Click **Filters** button
- [ ] Filter panel appears (slides down)
- [ ] Click **X** to close
- [ ] Filter panel disappears

- [ ] Click **Logout** button
- [ ] See "Logged out successfully" toast
- [ ] Redirected to `/login` page

**If ANY fail, check:** Are buttons clickable? Any JavaScript errors?

---

## 📥 Export Test (2 minutes)

**Login again first:**
- [ ] Login to `/admin`
- [ ] Navigate to **Overview** tab

**Test each export:**
- [ ] Click "Export Inquiries"
- [ ] See "Preparing inquiries export..." toast (blue)
- [ ] See "Inquiries exported successfully!" toast (green)
- [ ] CSV file downloads (check your Downloads folder)
- [ ] Open CSV → Has headers + data (or just headers if no data)

- [ ] Click "Export Chatbot"
- [ ] CSV downloads with "chatbot" in filename

- [ ] Click "Export Subscribers"
- [ ] CSV downloads with "newsletters" in filename

**If ANY fail, check:** Browser download permissions? Pop-up blocker?

---

## 📋 Inquiries Tab Test (3 minutes)

- [ ] Click **Inquiries** tab
- [ ] Tab changes to yellow (active state)
- [ ] Shows count (or "0 inquiries")

**If you have test data:**
- [ ] See inquiry cards listed
- [ ] Each card shows name, email, phone
- [ ] Status badge visible (blue "new" or yellow "contacted" or green "closed")

**Test View Details:**
- [ ] Click "Details" button on any inquiry
- [ ] Card expands showing full message
- [ ] Click "Hide" → card collapses

**Test Status Update:**
- [ ] Find inquiry with "new" status
- [ ] Click "Mark as Contacted" button
- [ ] See "Status updated to 'contacted' successfully" toast (green)
- [ ] Badge changes to yellow "contacted"
- [ ] Click "Mark as Closed" button
- [ ] Badge changes to green "closed"
- [ ] Click "Reopen" button
- [ ] Badge returns to blue "new"

**If ANY fail, check:** Is backend responding? Check Network tab for 200 OK.

---

## 🤖 Chatbot Tab Test (1 minute)

- [ ] Click **Chatbot** tab
- [ ] Tab changes to yellow (active state)
- [ ] Shows count (or "0 leads")

**If you have test data:**
- [ ] See lead cards listed
- [ ] Each card shows name, email, phone
- [ ] Service, city, budget visible (if captured)
- [ ] Status badge visible

**If NO data:**
- [ ] Shows empty state message ("No chatbot leads found")
- [ ] Purple sparkle icon visible

**Test Export:**
- [ ] Click "Export CSV" button
- [ ] CSV downloads successfully

**If ANY fail, check:** Same as Inquiries tab troubleshooting.

---

## 📧 Newsletter Tab Test (1 minute)

- [ ] Click **Newsletter** tab
- [ ] Tab changes to yellow (active state)
- [ ] Shows subscriber count

**If you have test data:**
- [ ] See table with Email, Date, Status columns
- [ ] Rows show subscriber emails
- [ ] All have green "active" badges

**If NO data:**
- [ ] Shows empty state message ("No newsletter subscribers yet")
- [ ] Mail icon visible

**Test Export:**
- [ ] Click "Export CSV" button
- [ ] CSV downloads successfully

**If ANY fail, check:** Is newsletter subscription working on main site?

---

## 🔍 Filter Test (2 minutes)

**Setup:**
- [ ] Go to Inquiries tab
- [ ] Click "Filters" button
- [ ] Filter panel opens

**Test Search:**
- [ ] Type partial email (e.g., "gmail")
- [ ] Results filter instantly
- [ ] Count updates

**Test Status Filter:**
- [ ] Select "New" from dropdown
- [ ] Only shows inquiries with "new" status
- [ ] Select "All" → shows all again

**Test Date Filter:**
- [ ] Set "Date From" to yesterday
- [ ] Results show only recent items
- [ ] Clear date → shows all

**Test Clear:**
- [ ] Click "Clear All Filters" button
- [ ] See "Filters cleared" toast (green)
- [ ] All filters reset
- [ ] Full list shows

**If ANY fail, check:** Are filters applying? Check browser console.

---

## 📱 Mobile Test (Optional - 3 minutes)

**Use browser DevTools (F12) → Toggle Device Toolbar:**

- [ ] Switch to iPhone/Android view
- [ ] Dashboard still readable
- [ ] All tabs visible
- [ ] Buttons stack vertically (not cut off)
- [ ] Filter panel works
- [ ] Export buttons work
- [ ] No horizontal scroll

**If ANY fail, check:** Responsive CSS? Viewport meta tag?

---

## 🔄 Refresh Test (30 seconds)

- [ ] While on `/admin` page
- [ ] Press F5 (refresh browser)
- [ ] Page reloads
- [ ] Still logged in (doesn't redirect to login)
- [ ] Dashboard loads normally

**If fails:** Session not persisting. Check localStorage.

---

## 🚪 Logout & Re-Login Test (1 minute)

- [ ] Click Logout button
- [ ] Redirected to `/login`
- [ ] Session cleared

- [ ] Try visiting `/admin` directly
- [ ] Automatically redirected to `/login` (Protected route working)

- [ ] Login again
- [ ] Dashboard loads normally

**If ANY fail, check:** ProtectedRoute component? Session management?

---

## 🧪 Data Submission Test (5 minutes)

**Create Test Inquiry:**
- [ ] Open new tab
- [ ] Visit `http://localhost:5173/lets-talk`
- [ ] Fill out contact form with test data
- [ ] Submit form
- [ ] See success message

**Verify in Admin:**
- [ ] Switch back to `/admin` tab
- [ ] Click Refresh button (or wait for auto-refresh if implemented)
- [ ] Go to Inquiries tab
- [ ] See new test inquiry at top of list
- [ ] Verify all fields match what you entered

**If fails, check:** Contact form backend? Network tab? Console errors?

---

## 📊 Final Summary Checklist

- [ ] Login works (auto-init, default creds, sign in)
- [ ] Dashboard loads (4 tabs, stats, no errors)
- [ ] Header buttons work (refresh, filters, logout)
- [ ] Export buttons work (3 types download CSV)
- [ ] Inquiries tab works (view, update status, filter)
- [ ] Chatbot tab works (view, export)
- [ ] Newsletter tab works (view, export)
- [ ] Filters work (search, status, date, clear)
- [ ] Mobile responsive (if tested)
- [ ] Refresh persists session
- [ ] Protected routes work
- [ ] Data submission reflects in admin

**Total Items:** 100+  
**Passing:** ___/100+  

---

## 🎯 Pass Criteria

**PASS:** 95%+ items checked (≥95/100)  
**ACCEPTABLE:** 85-94% items checked (some minor issues)  
**FAIL:** <85% items checked (major issues, needs debugging)

---

## 🚨 If You Encounter Issues

### Common Problems

**Nothing loads:**
1. Check backend is running (Supabase edge function)
2. Check browser console for errors
3. Check Network tab for failed requests

**Can't login:**
1. Use "Use Default Credentials" button
2. Verify credentials: inchtomilez@gmail.com / Amazing@123
3. Check Supabase auth configured

**Buttons don't work:**
1. Check browser console for JavaScript errors
2. Verify toast library (Sonner) is working
3. Try different browser

**Data doesn't show:**
1. Submit test form at /lets-talk
2. Check backend logs
3. Verify KV store has data

**Export fails:**
1. Check browser allows downloads
2. Disable pop-up blocker
3. Try incognito mode

---

## 📞 Support Resources

**Documentation:**
- Full Guide: `/ADMIN-PANEL-GUIDE.md`
- Quick Start: `/ADMIN-QUICK-START.md`
- Button Reference: `/ADMIN-REFERENCE-CARD.md`
- Verification: `/ADMIN-VERIFICATION-COMPLETE.md`

**Technical:**
- Backend Code: `/supabase/functions/server/index.tsx`
- Frontend Code: `/pages/Admin.tsx`
- API Utils: `/utils/supabase/client.ts`
- Auth Utils: `/utils/supabase/auth.ts`

---

**Test Date:** _________________  
**Tester:** _________________  
**Result:** ⬜ PASS  ⬜ ACCEPTABLE  ⬜ FAIL  
**Notes:** _________________________________  
______________________________________  
______________________________________  

---

**✅ When all items are checked, your admin panel is verified and ready to use!**
