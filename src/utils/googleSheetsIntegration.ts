// Google Sheets Integration for Lead Capture
// This utility handles submitting lead data to Google Sheets via Apps Script Web App

interface LeadSubmissionData {
  name: string;
  phone: string;
  service: string;
  city: string;
  email: string;
  budget: string;
  timestamp: string;
  conversationHistory?: string[];
}

interface GoogleSheetsResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * SETUP INSTRUCTIONS:
 * 
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1hAGQqhiXuQlckdNBa4Jx6_hHe9xwVhwKKqR_AIzPRho/edit
 * 
 * 2. Go to Extensions > Apps Script
 * 
 * 3. Delete any existing code and paste this:
 * 
 * ```javascript
 * function doPost(e) {
 *   try {
 *     // Get the active spreadsheet
 *     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     
 *     // Parse the incoming data
 *     const data = JSON.parse(e.postData.contents);
 *     
 *     // Prepare row data
 *     const rowData = [
 *       new Date(data.timestamp),
 *       data.name,
 *       data.phone,
 *       data.service,
 *       data.city,
 *       data.email,
 *       data.budget,
 *       data.conversationHistory ? data.conversationHistory.join(' | ') : ''
 *     ];
 *     
 *     // Append to sheet
 *     sheet.appendRow(rowData);
 *     
 *     // Return success
 *     return ContentService.createTextOutput(JSON.stringify({
 *       success: true,
 *       message: 'Lead saved successfully'
 *     })).setMimeType(ContentService.MimeType.JSON);
 *     
 *   } catch (error) {
 *     return ContentService.createTextOutput(JSON.stringify({
 *       success: false,
 *       error: error.toString()
 *     })).setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * ```
 * 
 * 4. Click "Deploy" > "New deployment"
 * 
 * 5. Select type: "Web app"
 * 
 * 6. Settings:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 
 * 7. Click "Deploy" and copy the Web App URL
 * 
 * 8. Paste the URL below in GOOGLE_SHEETS_WEB_APP_URL
 * 
 * 9. Make sure your sheet has these column headers in row 1:
 *    - Timestamp | Name | Phone | Service | City | Email | Budget | Conversation History
 */

// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
const GOOGLE_SHEETS_WEB_APP_URL = 'YOUR_WEB_APP_URL_HERE';

/**
 * Submit lead data to Google Sheets
 */
export async function submitLeadToGoogleSheets(
  leadData: LeadSubmissionData
): Promise<GoogleSheetsResponse> {
  // Check if Web App URL is configured
  if (!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL === 'YOUR_WEB_APP_URL_HERE') {
    console.warn('Google Sheets Web App URL not configured. Lead saved locally only.');
    return {
      success: false,
      error: 'Google Sheets integration not configured'
    };
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    // Note: With no-cors mode, we can't read the response
    // We assume success if no error is thrown
    console.log('Lead submitted to Google Sheets successfully');
    
    return {
      success: true,
      message: 'Lead saved to Google Sheets'
    };

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Submit lead with retry mechanism
 */
export async function submitLeadWithRetry(
  leadData: LeadSubmissionData,
  maxRetries: number = 3
): Promise<GoogleSheetsResponse> {
  let lastError: GoogleSheetsResponse | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await submitLeadToGoogleSheets(leadData);
      
      if (result.success) {
        return result;
      }
      
      lastError = result;
      
      // Wait before retrying (exponential backoff)
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
      
    } catch (error) {
      lastError = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  return lastError || {
    success: false,
    error: 'Failed after maximum retries'
  };
}

/**
 * Validate lead data before submission
 */
export function validateLeadData(leadData: Partial<LeadSubmissionData>): boolean {
  if (!leadData.name || leadData.name.trim().length < 2) {
    console.error('Invalid name');
    return false;
  }

  if (!leadData.phone || leadData.phone.trim().length < 10) {
    console.error('Invalid phone number');
    return false;
  }

  if (!leadData.service || leadData.service.trim().length < 2) {
    console.error('Invalid service');
    return false;
  }

  if (!leadData.city || leadData.city.trim().length < 2) {
    console.error('Invalid city');
    return false;
  }

  if (!leadData.email || !leadData.email.includes('@')) {
    console.error('Invalid email');
    return false;
  }

  if (!leadData.budget || leadData.budget.trim().length < 1) {
    console.error('Invalid budget');
    return false;
  }

  return true;
}

/**
 * Format lead data for Google Sheets
 */
export function formatLeadForSheets(leadData: {
  name?: string;
  phone?: string;
  service?: string;
  city?: string;
  email?: string;
  budget?: string;
  timestamp: Date;
  conversationHistory: string[];
}): LeadSubmissionData {
  return {
    name: leadData.name || 'Unknown',
    phone: leadData.phone || 'Unknown',
    service: leadData.service || 'Unknown',
    city: leadData.city || 'Unknown',
    email: leadData.email || 'Unknown',
    budget: leadData.budget || 'Unknown',
    timestamp: leadData.timestamp.toISOString(),
    conversationHistory: leadData.conversationHistory
  };
}

/**
 * Test Google Sheets connection
 */
export async function testGoogleSheetsConnection(): Promise<boolean> {
  if (!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL === 'YOUR_WEB_APP_URL_HERE') {
    console.error('Google Sheets Web App URL not configured');
    return false;
  }

  const testData: LeadSubmissionData = {
    name: 'Test Lead',
    phone: '9999999999',
    service: 'Test Service',
    timestamp: new Date().toISOString(),
    conversationHistory: ['Test conversation']
  };

  const result = await submitLeadToGoogleSheets(testData);
  return result.success;
}
