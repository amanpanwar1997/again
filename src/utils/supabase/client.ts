import { projectId, publicAnonKey } from './info';
import { authAPI } from './auth';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-dfdfec0d`;

// Helper function to get auth token
async function getAuthToken() {
  try {
    const session = await authAPI.getSession();
    return session?.access_token || publicAnonKey;
  } catch (error) {
    return publicAnonKey;
  }
}

// Helper function for API calls
async function apiCall(endpoint: string, options: RequestInit = {}) {
  const token = await getAuthToken();
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(`API Error (${endpoint}):`, data);
    throw new Error(data.error || data.details || 'API request failed');
  }

  return data;
}

// Newsletter API
export const newsletterAPI = {
  async subscribe(email: string) {
    return apiCall('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  async getSubscribers() {
    return apiCall('/newsletter/subscribers');
  },
};

// Contact Form API
export const contactAPI = {
  async submit(formData: {
    name: string;
    phone: string;
    email: string;
    company?: string;
    budget?: string;
    message: string;
    services?: string[];
    source?: string;
  }) {
    return apiCall('/contact/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  async getInquiries() {
    return apiCall('/contact/inquiries');
  },

  async updateStatus(inquiryId: string, status: 'new' | 'contacted' | 'closed') {
    return apiCall(`/contact/inquiries/${inquiryId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },

  async deleteInquiry(inquiryId: string) {
    return apiCall(`/contact/inquiries/${inquiryId}`, {
      method: 'DELETE',
    });
  },

  async bulkDeleteInquiries(ids: string[]) {
    return apiCall('/contact/inquiries/bulk-delete', {
      method: 'POST',
      body: JSON.stringify({ ids }),
    });
  },
};

// Chatbot API
export const chatbotAPI = {
  async submitLead(leadData: {
    name: string;
    phone: string;
    email: string;
    city?: string;
    budget?: string;
    service?: string;
    timeline?: string;
    conversationHistory?: any[];
  }) {
    return apiCall('/chatbot/lead', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
  },

  async getLeads() {
    return apiCall('/chatbot/leads');
  },

  async deleteLead(leadId: string) {
    return apiCall(`/chatbot/leads/${leadId}`, {
      method: 'DELETE',
    });
  },

  async bulkDeleteLeads(ids: string[]) {
    return apiCall('/chatbot/leads/bulk-delete', {
      method: 'POST',
      body: JSON.stringify({ ids }),
    });
  },
};

// Analytics API
export const analyticsAPI = {
  async getStats() {
    return apiCall('/analytics/stats');
  },

  async getLiveAnalytics() {
    return apiCall('/analytics/live');
  },

  async trackPageView(page: string, sessionId: string) {
    return apiCall('/analytics/pageview', {
      method: 'POST',
      body: JSON.stringify({ page, sessionId }),
    });
  },
};

// Export API
export const exportAPI = {
  async download(type: 'newsletters' | 'inquiries' | 'chatbot') {
    const response = await fetch(`${API_BASE_URL}/export/${type}`, {
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Export failed');
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inchtomilez-${type}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  },
};
