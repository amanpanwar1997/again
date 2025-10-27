import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import AIChatBot from './AIChatBot';

export default function FloatingCTA() {
  const [showChatTooltip, setShowChatTooltip] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  const handleWhatsAppClick = () => {
    // WhatsApp business number: 9669988666
    const phoneNumber = '919669988666'; // Add country code
    const message = encodeURIComponent('Hello! I would like to know more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Chatbot Interface */}
      <AIChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[9999]">
        {/* AI Chatbot Button - Hide when chat is open */}
        {!isChatOpen && (
          <div className="relative">
            <button
              onClick={handleChatClick}
              onMouseEnter={() => setShowChatTooltip(true)}
              onMouseLeave={() => setShowChatTooltip(false)}
              className="group w-14 h-14 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="AI Chatbot"
              data-floating-cta
            >
              <MessageCircle className="text-black" data-cta-icon />
            </button>
            
            {/* Tooltip */}
            {showChatTooltip && (
              <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black border border-white/20 px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                <p className="text-white text-sm">AI Chatbot</p>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-black border-r border-b border-white/20"></div>
              </div>
            )}
          </div>
        )}

        {/* WhatsApp Button */}
        <div className="relative">
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setShowWhatsAppTooltip(true)}
            onMouseLeave={() => setShowWhatsAppTooltip(false)}
            className="group w-14 h-14 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
            data-floating-cta
          >
            <Send className="text-black" data-cta-icon />
          </button>
          
          {/* Tooltip */}
          {showWhatsAppTooltip && (
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black border border-white/20 px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
              <p className="text-white text-sm">Chat on WhatsApp</p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-black border-r border-b border-white/20"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
