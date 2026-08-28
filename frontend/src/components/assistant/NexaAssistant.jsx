import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Check, 
  RotateCcw
} from 'lucide-react';
import { Button } from '../common/Button';

export const NexaAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 Hi! I'm NexaBot, NexaTech's AI Tech Strategist. How can I help you today? Ask me about tech architecture, estimated MVP timelines, pricing, or our engineering process!",
    },
  ]);

  const messagesEndRef = useRef(null);

  const quickPrompts = [
    '⏱️ How fast can you build our MVP?',
    '💻 What tech stack do you recommend for SaaS?',
    '🔒 How do you handle security & compliance?',
    '💰 How does your pricing model work?',
  ];

  const knowledgeBase = [
    {
      keywords: ['mvp', 'fast', 'timeline', 'weeks', 'time', 'how long'],
      response:
        '🚀 For most MVPs and 1.0 products, our dedicated engineering squad ships within **3 to 6 weeks** using our Hyper-Sprint model! We run rapid two-week agile iterations with continuous CI/CD staging reviews.',
    },
    {
      keywords: ['tech stack', 'stack', 'technologies', 'react', 'spring', 'python', 'tools'],
      response:
        '🛠️ Our core battle-tested stack includes:\n• **Frontend**: React 19, Next.js, Vite 8, Tailwind CSS v4, TypeScript\n• **Backend**: Java Spring Boot 3 (Virtual Threads), Node.js, Go\n• **AI & Search**: pgvector, OpenAI GPT-4o, Pinecone, LangChain\n• **Cloud & DB**: PostgreSQL 16, Redis, AWS Fargate, Cloudflare Workers.',
    },
    {
      keywords: ['security', 'compliance', 'soc2', 'hipaa', 'safe', 'data'],
      response:
        '🛡️ Security is built into the foundation: TLS 1.3 encryption in transit, AES-256 at rest, automated vulnerability scanning in CI/CD, and full readiness for SOC-2 Type II and HIPAA compliance.',
    },
    {
      keywords: ['pricing', 'cost', 'estimate', 'budget', 'price', 'rates'],
      response:
        '💡 We provide transparent, milestone-based fixed estimates starting from **$6,500 – $14,000+** depending on scope depth and integrations. Zero surprise hourly overages! Check our interactive Project Estimator section above for custom ballpark calculations.',
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg = { id: Date.now().toString(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedResponse = knowledgeBase.find((item) =>
        item.keywords.some((k) => lower.includes(k))
      )?.response;

      if (!matchedResponse) {
        matchedResponse =
          "✨ That's a great project requirement! Our Principal Solutions Architects can tailor a bespoke roadmap for this. Would you like to schedule a quick 20-minute discovery call or submit an enquiry?";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', text: matchedResponse },
      ]);
      setIsTyping(false);
    }, 650);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "👋 Hi! I'm NexaBot, NexaTech's AI Tech Strategist. How can I help you today? Ask me about tech architecture, estimated MVP timelines, pricing, or our engineering process!",
      },
    ]);
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[390px] h-[520px] rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-fadeIn backdrop-blur-2xl">
          {/* Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white font-display">NexaBot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">AI Tech Strategist</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-violet-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-500 rounded-bl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-white border-t border-slate-200 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-violet-50 text-slate-700 hover:text-violet-700 text-[10px] font-medium whitespace-nowrap transition-colors border border-slate-200"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Bottom Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about tech, timelines, pricing..."
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 outline-none text-slate-900 placeholder-slate-400"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition-colors cursor-pointer shadow-md shadow-violet-600/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Direct CTA footer */}
          <div className="px-3 py-1.5 bg-slate-100 text-center border-t border-slate-200 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">Ready to build?</span>
            <button
              onClick={scrollToContact}
              className="font-bold text-violet-600 hover:text-violet-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 text-white border border-violet-500/40 shadow-2xl hover:scale-105 transition-all cursor-pointer"
        aria-label="Open AI Assistant"
      >
        <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
        </div>
        <div className="text-left hidden sm:block">
          <span className="text-xs font-bold text-white block leading-none">NexaBot AI</span>
          <span className="text-[9px] text-cyan-400 font-mono">Ask Tech Questions</span>
        </div>
      </button>
    </div>
  );
};
