'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Auralix AI Assistant. We provide an Enterprise-Grade Voice Agent that helps restaurants never miss another call. Our voice AI handles phone calls, appointments, and customer service 24/7.\n\nWhat would you like to know about our Enterprise-Grade Voice Agent?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          conversationHistory: messages.slice(-10) // Send last 10 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I&apos;m sorry, I&apos;m having trouble connecting right now. Please try again or contact us directly at info@auralixai.ca",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickReplies = [
    "How does AI Receptionist work?",
    "What's your pricing?",
    "Tell me about the Halifax case study",
    "Calculate my missed call cost",
    "I want a free consultation"
  ];

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    // Trigger submit after a short delay
    setTimeout(() => {
      const form = document.getElementById('chat-form') as HTMLFormElement;
      form?.dispatchEvent(new Event('submit', { bubbles: true }));
    }, 100);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label="Open chat"
      >
        <Bot className="text-xl sm:text-2xl" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-2 sm:p-4">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
          <div className="relative bg-[#0a0a0a] border border-[#333] rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md h-[500px] sm:h-[600px] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 sm:p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Bot className="text-xl sm:text-2xl text-white" />
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base">Auralix AI Assistant</h3>
                    <p className="text-cyan-100 text-xs sm:text-sm">Powered by AI</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors p-1 sm:p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
                  aria-label="Close chat"
                >
                  <X className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-[#1a1a1a] text-gray-200 border border-[#333]'
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm sm:text-base">{message.text}</div>
                    <div className={`text-xs mt-1 sm:mt-2 ${message.sender === 'user' ? 'text-cyan-100' : 'text-gray-400'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl px-3 sm:px-4 py-2 sm:py-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="animate-spin text-cyan-400 text-sm sm:text-base" />
                      <span className="text-gray-300 text-sm sm:text-base">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-[#1a1a1a] hover:bg-[#333] text-gray-300 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[#333] transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} id="chat-form" className="p-3 sm:p-4 border-t border-[#333]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-full px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 sm:p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Send message"
                >
                  <Send className="text-base sm:text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}