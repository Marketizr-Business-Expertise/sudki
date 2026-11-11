import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCheck, Sparkles, User, MessageCircle } from './Icons';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const phoneNumber = '97450117741';

  const defaultGreeting = {
    id: 1,
    sender: 'bot',
    text: `Welcome to Sudki Operation & Maintenance.\n\nHow can we support your Facilities Management and Manpower needs?`,
    time: 'Just now',
  };

  const [messages, setMessages] = useState([defaultGreeting]);
  const messagesEndRef = useRef(null);

  // Auto scroll messages to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Quick suggestion chips
  const suggestions = [
    'Hotel',
    'Restaurant',
    'Facility Management',
    'Pest Control',
    'Waste Management',
    'Request a Quotation',
  ];

  // AI Response Generator
  const generateAiResponse = (userText) => {
    const lower = userText.toLowerCase();

    if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
      return `Our rates start from 0.9 QAR/sqm for residential and 1.2 QAR/sqm for commercial premises in Qatar. We can also provide a free on-site survey anywhere in Doha! Would you like to connect directly on WhatsApp with our estimating team?`;
    }

    if (lower.includes('pest') || lower.includes('insect') || lower.includes('rodent') || lower.includes('termite') || lower.includes('bed bug') || lower.includes('fumigation')) {
      return `Sudki provides certified Pest Control & Fumigation services across Qatar. We use Ministry-approved, eco-safe treatments for termites, rodents, cockroaches, bedbugs, and flying insects in residential, commercial, and food facilities!`;
    }

    if (lower.includes('waste') || lower.includes('trash') || lower.includes('garbage') || lower.includes('disposal') || lower.includes('skip') || lower.includes('recycle')) {
      return `Sudki offers licensed Commercial & Hazardous Waste Management across Qatar, including scheduled skip bin placement, bulk debris haulage, recycling sorting, and municipal-compliant disposal!`;
    }

    if (lower.includes('hotel') || lower.includes('hospitality') || lower.includes('resort') || lower.includes('suite')) {
      return `Sudki provides 5-star hotel housekeeping, guest room turnover, public lobby sanitization, and linen management for luxury hotels, serviced apartments, and hospitality venues across Doha!`;
    }

    if (lower.includes('restaurant') || lower.includes('kitchen') || lower.includes('dining') || lower.includes('food')) {
      return `Sudki delivers specialized restaurant deep cleaning, commercial kitchen degreasing, exhaust hood steam washing, and dining floor sanitization complying with Qatar Ministry of Public Health standards!`;
    }

    if (lower.includes('facility') || lower.includes('maintenance') || lower.includes('operations')) {
      return `Sudki offers end-to-end Integrated Facility Management, technical MEP maintenance, janitorial staffing, and routine operations for corporate towers, commercial compounds, and malls across Qatar!`;
    }

    if (lower.includes('event') || lower.includes('exhibition') || lower.includes('gala') || lower.includes('venue')) {
      return `Sudki deploys dedicated event cleaning crews for pre-event detailing, real-time venue sanitation during active hours, and rapid post-event teardown across sports tournaments, exhibitions, and corporate gatherings!`;
    }

    if (lower.includes('commercial') || lower.includes('office') || lower.includes('building') || lower.includes('tower')) {
      return `Sudki specializes in corporate facilities, office towers in West Bay & Lusail, and commercial spaces with hospital-grade sanitization and rotary buffer machines. We can schedule daily, weekly, or 24/7 night-shift crews!`;
    }

    if (lower.includes('manpower') || lower.includes('staff') || lower.includes('maid')) {
      return `We provide fully vetted, background-checked, and safety-trained cleaning technicians and facility manpower with flexible contract terms (hourly, daily, or annual).`;
    }

    if (lower.includes('deep') || lower.includes('move')) {
      return `Our Deep Cleaning & Move-In/Out package covers ceiling-to-floor degreasing, grout scrubbing, AC vent vacuuming, and complete window washing. Perfect for turnkey handovers!`;
    }

    return `Thank you for reaching out! Our team in Doha is available 24/7 to discuss your project specifications. Click the 'WhatsApp Us' button below to continue directly with our duty supervisor!`;
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: generateAiResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // WhatsApp link with latest context
  const getWhatsAppUrl = () => {
    const lastUserMsg = [...messages].reverse().find((m) => m.sender === 'user');
    const intro = lastUserMsg
      ? `Hello Sudki! I have an inquiry about: "${lastUserMsg.text}"`
      : 'Hello Sudki Operation & Maintenance! How can we support our Facilities Management and Manpower needs?';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(intro)}`;
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  return (
    <aside aria-label="WhatsApp AI Support" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none">
      
      {/* ======================================================== */}
      {/* 1. WHATSAPP CHATBOX POPUP WINDOW (MATCHING UPLOADED UI)   */}
      {/* ======================================================== */}
      {isOpen && (
        <div className="absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-32px)] max-w-[370px] sm:w-[350px] md:w-[370px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col z-50 animate-fadeIn transition-all duration-300">
          
          {/* Header (Exact Dark Green WhatsApp Header) */}
          <div className="bg-[#005C4B] px-4 py-3.5 flex items-center justify-between text-white shadow-md">
            <div className="flex items-center gap-3">
              {/* Circular Avatar with Glowing Online Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white border border-white/40 flex items-center justify-center overflow-hidden p-1 shadow-sm">
                  <img
                    src="/favicon.png"
                    alt="Sudki Qatar"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Green Active Status Dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#005C4B]"></span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4 className="font-bold text-sm sm:text-[15px] leading-tight text-white flex items-center gap-1.5">
                  <span>Operation & Maintenance</span>
                </h4>
                <p className="text-[11px] text-emerald-100/90 leading-tight mt-0.5">
                  Typically replies within minutes
                </p>
              </div>
            </div>

            {/* Close Button 'x' */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* ======================================================== */}
          {/* WhatsApp Authentic Doodle Wallpaper Chat Body             */}
          {/* ======================================================== */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[220px] max-h-[340px] relative"
            style={{
              backgroundColor: '#EFEAE2',
              backgroundImage: `radial-gradient(#CBD5E1 0.75px, transparent 0.75px), radial-gradient(#94A3B8 0.75px, #EFEAE2 0.75px)`,
              backgroundSize: '30px 30px',
              backgroundPosition: '0 0, 15px 15px',
            }}
          >
            {/* Timestamp pill */}
            <div className="text-center my-1">
              <span className="px-2.5 py-1 rounded-md bg-white/70 backdrop-blur-sm text-[10px] font-semibold text-slate-500 shadow-xs uppercase tracking-wider">
                Today
              </span>
            </div>

            {/* Messages Stream */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`relative max-w-[85%] px-3.5 py-2.5 shadow-sm text-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#E7FFDB] text-slate-900 rounded-2xl rounded-tr-xs'
                      : 'bg-[#DCF8C6] text-slate-900 rounded-2xl rounded-tl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line text-[13px] leading-relaxed text-slate-800 font-normal">
                    {msg.text}
                  </p>

                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && (
                      <CheckCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-[#DCF8C6] px-3.5 py-2 rounded-2xl rounded-tl-xs w-20 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Suggestion Chips */}
          <div className="px-3 py-2 bg-[#F0F2F5] border-t border-slate-200/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {suggestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(item)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white hover:bg-emerald-50 text-[11px] font-medium text-slate-700 hover:text-emerald-700 border border-slate-200 transition-colors shadow-2xs"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Quick Chat Input Box */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-800 placeholder:text-slate-400"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              className="p-1.5 rounded-full bg-[#005C4B] text-white disabled:opacity-40 hover:bg-[#075E54] transition-colors focus:outline-none"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* ======================================================== */}
          {/* Action Footer: Big "WhatsApp Us" Button (Exact Match)     */}
          {/* ======================================================== */}
          <div className="p-3 bg-white border-t border-slate-100 space-y-2 text-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-200 shadow-md active:scale-98 group"
            >
              {/* WhatsApp SVG Icon */}
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.128-.485-1.745-.688-2.883-2.473-2.97-2.588-.088-.115-.708-.941-.708-1.796 0-.855.447-1.277.608-1.452.161-.176.353-.22.471-.22.12 0 .24.002.344.006.113.005.263-.043.411.314.152.368.517 1.258.562 1.35.045.093.076.202.015.324-.061.122-.091.198-.181.304-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.472.779 1.015 1.262.7.623 1.29.816 1.472.907.182.09.289.076.395-.045.107-.122.457-.534.578-.717.122-.183.244-.152.411-.091.168.061 1.066.503 1.25.594.183.091.305.137.35.213.045.076.045.442-.099.847zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.954-1.385C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.636 0-3.16-.487-4.436-1.328l-.318-.21-2.937.822.839-2.863-.227-.334A7.95 7.95 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Small Privacy / Status Tagline from image */}
            <p className="text-[11px] text-slate-500 font-medium">
              Online | Privacy policy
            </p>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* 2. FLOATING CIRCULAR WHATSAPP BUTTON TRIGGER              */}
      {/* ======================================================== */}
      <button
        type="button"
        onClick={toggleChat}
        aria-label="Open WhatsApp Chat"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Pulsing Outer Ring (When chatbox is closed) */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>
        )}

        {/* Unread Message Notification Dot */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white font-bold text-[10px] flex items-center justify-center shadow-md animate-bounce">
            1
          </span>
        )}

        {/* Icon: Toggle between X and WhatsApp */}
        {isOpen ? (
          <X className="w-6 h-6 text-white stroke-[2.5]" />
        ) : (
          <svg className="w-7 h-7 fill-white relative z-10" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.128-.485-1.745-.688-2.883-2.473-2.97-2.588-.088-.115-.708-.941-.708-1.796 0-.855.447-1.277.608-1.452.161-.176.353-.22.471-.22.12 0 .24.002.344.006.113.005.263-.043.411.314.152.368.517 1.258.562 1.35.045.093.076.202.015.324-.061.122-.091.198-.181.304-.091.106-.192.237-.274.318-.09.09-.185.187-.079.369.106.182.472.779 1.015 1.262.7.623 1.29.816 1.472.907.182.09.289.076.395-.045.107-.122.457-.534.578-.717.122-.183.244-.152.411-.091.168.061 1.066.503 1.25.594.183.091.305.137.35.213.045.076.045.442-.099.847zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.954-1.385C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.636 0-3.16-.487-4.436-1.328l-.318-.21-2.937.822.839-2.863-.227-.334A7.95 7.95 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
          </svg>
        )}

        {/* Floating Tooltip when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with Sudki Qatar
          </span>
        )}
      </button>

    </aside>
  );
}
