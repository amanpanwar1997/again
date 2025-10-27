import { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, Maximize2, Bot, User, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { submitLeadWithRetry } from '../utils/googleSheetsIntegration';
import { chatbotAPI } from '../utils/supabase/client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

interface LeadData {
  name: string;
  phone: string;
  service: string;
  city: string;
  email: string;
  budget: string;
  timestamp: Date;
  conversationHistory: string[];
}

interface AIChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

type ConversationStage = 'ask_name' | 'ask_phone' | 'ask_service' | 'ask_city' | 'ask_email' | 'ask_budget' | 'consultation_booking' | 'completed';

// 16 Services offered by Inchtomilez
const SERVICES = [
  'Digital Marketing',
  'Advertising',
  'E-Commerce Marketing',
  'Branding',
  'Media Production',
  'Animation',
  'Graphic Designing',
  'OOH Services',
  'Print Media',
  'Software Development',
  'Application Development',
  'Website Development',
  'Political Campaigns',
  'Corporate Gifting',
  'Influencer Marketing',
  'Public Relations'
];

// Budget ranges
const BUDGETS = [
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,00,000',
  'Above ₹2,00,000',
  'Not sure yet'
];

// Consultation booking options
const CONSULTATION_OPTIONS = [
  '📞 Call me within 1 hour',
  '📅 Schedule for tomorrow',
  '📅 Schedule for this week',
  '📧 Send email with details',
  '💬 Continue on WhatsApp'
];

const AIChatBot = ({ isOpen, onClose }: AIChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [conversationStage, setConversationStage] = useState<ConversationStage>('ask_name');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Lead data storage
  const [leadData, setLeadData] = useState<Partial<LeadData>>({
    timestamp: new Date(),
    conversationHistory: []
  });

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-focus input when conversation stage changes (especially for phone number)
  useEffect(() => {
    if (inputRef.current && !isMinimized) {
      inputRef.current.focus();
    }
  }, [conversationStage, isMinimized]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "👋 Hello! I'm your AI assistant from **Inchtomilez Digital Marketing Agency**!\n\nI'm here to help you find the perfect digital solution for your business. Let's get started!\n\n**What's your name?**",
          []
        );
      }, 500);
    }
  }, [isOpen]);

  // Add bot message with typing animation
  const addBotMessage = (text: string, suggestions: string[] = []) => {
    setIsTyping(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: suggestions.length > 0 ? suggestions : undefined
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  // Add user message
  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Track in conversation history
    setLeadData(prev => ({
      ...prev,
      conversationHistory: [...(prev.conversationHistory || []), `User: ${text}`]
    }));
  };

  // Validate phone number (STRICT: exactly 10 digits, starts with 6/7/8/9)
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    // Must be EXACTLY 10 digits AND start with 6, 7, 8, or 9
    return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  // Validate email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Process user input based on current stage
  const processUserInput = async (input: string) => {
    const trimmedInput = input.trim();

    switch (conversationStage) {
      case 'ask_name':
        if (trimmedInput.length < 2) {
          addBotMessage("Please enter a valid name (at least 2 characters).");
          return;
        }
        setLeadData(prev => ({ ...prev, name: trimmedInput }));
        setConversationStage('ask_phone');
        addBotMessage(
          `Nice to meet you, **${trimmedInput}**! 🎉\n\n**What's your phone number?**`,
          []
        );
        break;

      case 'ask_phone':
        // STRICT VALIDATION: Must be exactly 10 digits starting with 6/7/8/9
        const cleanedPhone = trimmedInput.replace(/\D/g, '');
        if (!validatePhone(trimmedInput)) {
          // Don't proceed if invalid - no error message shown
          return;
        }
        setLeadData(prev => ({ ...prev, phone: cleanedPhone }));
        setConversationStage('ask_service');
        addBotMessage(
          `Great! I've saved your number: **${cleanedPhone}** ✅\n\nNow, **which service are you interested in?**\n\nPlease select from the options below or type the service name:`,
          SERVICES
        );
        break;

      case 'ask_service':
        const matchedService = SERVICES.find(s => 
          s.toLowerCase() === trimmedInput.toLowerCase() || 
          trimmedInput.toLowerCase().includes(s.toLowerCase().split(' ')[0])
        );
        
        if (!matchedService) {
          addBotMessage(
            "Please select a valid service from the list above, or click one of the suggestions.",
            SERVICES
          );
          return;
        }
        setLeadData(prev => ({ ...prev, service: matchedService }));
        setConversationStage('ask_city');
        addBotMessage(
          `Perfect! You're interested in **${matchedService}** 🎯\n\n**Which city are you located in?**\n\n(This helps us serve you better)`,
          []
        );
        break;

      case 'ask_city':
        if (trimmedInput.length < 2) {
          addBotMessage("Please enter a valid city name.");
          return;
        }
        setLeadData(prev => ({ ...prev, city: trimmedInput }));
        setConversationStage('ask_email');
        addBotMessage(
          `Got it! You're in **${trimmedInput}** 📍\n\n**What's your email address?**\n\n(We'll send you detailed information)`,
          []
        );
        break;

      case 'ask_email':
        if (!validateEmail(trimmedInput)) {
          addBotMessage("Please enter a valid email address (e.g., yourname@example.com).");
          return;
        }
        setLeadData(prev => ({ ...prev, email: trimmedInput }));
        setConversationStage('ask_budget');
        addBotMessage(
          `Excellent! Email saved: **${trimmedInput}** ✅\n\n**What's your approximate budget for this project?**\n\nPlease select from the options below:`,
          BUDGETS
        );
        break;

      case 'ask_budget':
        const matchedBudget = BUDGETS.find(b => 
          b.toLowerCase() === trimmedInput.toLowerCase() ||
          trimmedInput.toLowerCase().includes(b.toLowerCase().slice(0, 5))
        );
        
        if (!matchedBudget) {
          addBotMessage(
            "Please select a budget range from the options above.",
            BUDGETS
          );
          return;
        }
        setLeadData(prev => ({ ...prev, budget: matchedBudget }));
        
        // Save to Google Sheets
        await saveLeadToSheets({
          ...leadData,
          budget: matchedBudget
        } as LeadData);
        
        setConversationStage('consultation_booking');
        addBotMessage(
          `Perfect! I've got all your details ✅\n\n**Here's what you've shared:**\n\n👤 Name: **${leadData.name}**\n📞 Phone: **${leadData.phone}**\n🎯 Service: **${leadData.service}**\n📍 City: **${leadData.city}**\n📧 Email: **${leadData.email}**\n💰 Budget: **${matchedBudget}**\n\n**How would you like us to connect with you?**`,
          CONSULTATION_OPTIONS
        );
        break;

      case 'consultation_booking':
        handleConsultationBooking(trimmedInput);
        break;

      case 'completed':
        addBotMessage(
          "Thank you for connecting with us! Our team will reach out soon.\n\nIs there anything else I can help you with?",
          ['View our services', 'Check pricing', 'See portfolio', 'Restart conversation']
        );
        break;
    }
  };

  // Save lead to Google Sheets and Supabase
  const saveLeadToSheets = async (data: LeadData) => {
    try {
      addBotMessage("💾 Saving your information securely...");
      
      // Save to both Google Sheets and Supabase in parallel
      const [sheetsResult, supabaseResult] = await Promise.allSettled([
        submitLeadWithRetry(data),
        chatbotAPI.submitLead({
          name: data.name,
          phone: data.phone,
          email: data.email,
          city: data.city,
          budget: data.budget,
          service: data.service,
          conversationHistory: data.conversationHistory
        })
      ]);
      
      // Check Google Sheets result
      if (sheetsResult.status === 'fulfilled' && sheetsResult.value.success) {
        console.log('✅ Lead saved successfully to Google Sheets');
      } else {
        console.error('⚠️ Google Sheets save failed');
      }
      
      // Check Supabase result
      if (supabaseResult.status === 'fulfilled') {
        console.log('✅ Lead saved successfully to Supabase database');
      } else {
        console.error('⚠️ Supabase save failed:', supabaseResult.reason);
      }
      
      // Save to localStorage as backup
      localStorage.setItem('inchtomilez_lead', JSON.stringify(data));
      
    } catch (error) {
      console.error('Error saving lead:', error);
      // Fallback to localStorage
      localStorage.setItem('inchtomilez_lead', JSON.stringify(data));
    }
  };

  // Handle consultation booking selection
  const handleConsultationBooking = (selection: string) => {
    const lowerSelection = selection.toLowerCase();

    if (lowerSelection.includes('call') || lowerSelection.includes('1 hour')) {
      setConversationStage('completed');
      addBotMessage(
        "📞 **Perfect!** Our team will call you within the next hour.\n\n**You'll receive a call on:** +91 " + leadData.phone + "\n\n✅ **Lead saved successfully!**\n\nThank you for choosing Inchtomilez! We're excited to help grow your business! 🚀",
        []
      );
    } else if (lowerSelection.includes('tomorrow')) {
      setConversationStage('completed');
      addBotMessage(
        "📅 **Great!** We've scheduled a consultation for tomorrow.\n\n**Our team will contact you tomorrow between 10 AM - 7 PM**\n\n✅ **Lead saved successfully!**\n\nWe'll discuss your project in detail. Looking forward to connecting! 💼",
        []
      );
    } else if (lowerSelection.includes('this week')) {
      setConversationStage('completed');
      addBotMessage(
        "📅 **Excellent!** We'll schedule a call this week.\n\n**Our team will reach out within 2-3 business days**\n\n✅ **Lead saved successfully!**\n\nWe'll find the perfect time to discuss your requirements! ⏰",
        []
      );
    } else if (lowerSelection.includes('email')) {
      setConversationStage('completed');
      addBotMessage(
        "📧 **Done!** We'll send you detailed information via email.\n\n**Check your inbox:** " + leadData.email + "\n\n✅ **Lead saved successfully!**\n\nYou'll receive comprehensive details about our services, pricing, and next steps within 24 hours! 📬",
        []
      );
    } else if (lowerSelection.includes('whatsapp')) {
      setConversationStage('completed');
      addBotMessage(
        "💬 **Awesome!** Let's continue on WhatsApp!\n\n**Click the WhatsApp button** (bottom-right of screen) to connect instantly.\n\n✅ **Lead saved successfully!**\n\nOur team is ready to chat with you on WhatsApp! 📱",
        []
      );
    } else {
      addBotMessage(
        "Please select one of the consultation options above:",
        CONSULTATION_OPTIONS
      );
    }
  };

  // Handle send message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    processUserInput(inputValue);
    setInputValue('');
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    addUserMessage(suggestion);
    processUserInput(suggestion);
  };

  // Handle minimize/maximize
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed bottom-24 right-8 z-[9998] transition-all duration-300 ${
        isMinimized ? 'w-80' : 'w-96'
      }`}
      style={{ maxHeight: isMinimized ? '60px' : '600px' }}
    >
      {/* Chat Container */}
      <div className="bg-black border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Bot className="text-yellow-500" />
            </div>
            <div>
              <h3 className="text-black">Inchtomilez AI</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-black/80 text-xs">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMinimize}
              className="p-2 hover:bg-black/10 rounded-lg transition-colors group relative"
              aria-label={isMinimized ? "Maximize" : "Minimize"}
              title={isMinimized ? "Maximize" : "Minimize"}
            >
              {isMinimized ? <Maximize2 className="text-black" size={20} /> : <Minimize2 className="text-black" size={20} />}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/10 rounded-lg transition-colors group relative"
              aria-label="Close Chat"
              title="Close Chat"
            >
              <X className="text-black" size={20} />
            </button>
          </div>
        </div>

        {/* Chat Body */}
        {!isMinimized && (
          <>
            {/* Progress Indicator */}
            <div className="bg-white/5 p-3 border-b border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-xs">Lead Capture Progress</span>
                <span className="text-yellow-500 text-xs">
                  {conversationStage === 'ask_name' && '1/6'}
                  {conversationStage === 'ask_phone' && '2/6'}
                  {conversationStage === 'ask_service' && '3/6'}
                  {conversationStage === 'ask_city' && '4/6'}
                  {conversationStage === 'ask_email' && '5/6'}
                  {conversationStage === 'ask_budget' && '6/6'}
                  {(conversationStage === 'consultation_booking' || conversationStage === 'completed') && 'Complete ✅'}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: 
                      conversationStage === 'ask_name' ? '16%' :
                      conversationStage === 'ask_phone' ? '33%' :
                      conversationStage === 'ask_service' ? '50%' :
                      conversationStage === 'ask_city' ? '66%' :
                      conversationStage === 'ask_email' ? '83%' :
                      conversationStage === 'ask_budget' ? '100%' :
                      '100%'
                  }}
                ></div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-black">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.sender === 'user'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}
                  >
                    {/* Message Header */}
                    <div className="flex items-center gap-2 mb-2">
                      {message.sender === 'bot' ? (
                        <Bot size={16} className="text-yellow-500" />
                      ) : (
                        <User size={16} />
                      )}
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    {/* Message Text */}
                    <div className="whitespace-pre-wrap">
                      {message.text.split('\n').map((line, i) => {
                        // Bold text handling
                        const parts = line.split('**');
                        return (
                          <div key={i}>
                            {parts.map((part, j) => (
                              j % 2 === 0 ? part : <strong key={j}>{part}</strong>
                            ))}
                          </div>
                        );
                      })}
                    </div>

                    {/* Suggestions */}
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-yellow-500/50 rounded-lg transition-all duration-200 text-sm"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span className="text-white/60 text-xs">AI is typing...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  type={conversationStage === 'ask_phone' ? 'tel' : conversationStage === 'ask_email' ? 'email' : 'text'}
                  inputMode={conversationStage === 'ask_phone' ? 'numeric' : conversationStage === 'ask_email' ? 'email' : 'text'}
                  pattern={conversationStage === 'ask_phone' ? '[6-9][0-9]{9}' : undefined}
                  maxLength={conversationStage === 'ask_phone' ? 10 : undefined}
                  autoComplete={conversationStage === 'ask_phone' ? 'tel' : conversationStage === 'ask_email' ? 'email' : 'off'}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={
                    conversationStage === 'ask_name' ? 'Type your name...' :
                    conversationStage === 'ask_phone' ? '9876543210' :
                    conversationStage === 'ask_service' ? 'Type or select a service...' :
                    conversationStage === 'ask_city' ? 'Type your city...' :
                    conversationStage === 'ask_email' ? 'your@email.com' :
                    conversationStage === 'ask_budget' ? 'Select your budget...' :
                    'Type your message...'
                  }
                  className="flex-1 bg-black border-white/20 text-white placeholder:text-white/40 focus:border-yellow-500"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || (conversationStage === 'ask_phone' && !validatePhone(inputValue))}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6"
                >
                  <Send size={20} />
                </Button>
              </div>
              {conversationStage === 'ask_phone' && (
                <div className="mt-2 text-center text-xs text-yellow-500/60">
                  10 digits • Starts with 6, 7, 8, or 9
                </div>
              )}
              <div className="mt-2 text-center text-xs text-white/40">
                Powered by Inchtomilez AI • Secure & Encrypted
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIChatBot;
