import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Minimize2, Paperclip, Smile, ChevronDown, Check, CheckCheck } from 'lucide-react';
import React from 'react';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
}

const QUICK_QUESTIONS = [
  "What's included in a typical retreat?",
  "Help me choose the right program",
  "Tell me about Kerala centers",
  "What are the costs?",
  "Is it suitable for beginners?",
  "Can I customize my program?"
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: "Hi! I'm Ananya, your wellness care guide 👋",
    sender: 'agent',
    timestamp: new Date(Date.now() - 60000),
    status: 'read'
  },
  {
    id: '2',
    text: "I'm here to help you find the perfect Ayurvedic wellness experience in India. What brings you here today?",
    sender: 'agent',
    timestamp: new Date(Date.now() - 50000),
    status: 'read'
  }
];

export function ChatInterface({ isOpen, onClose, onMinimize }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickQuestions(false);

    // Update status to delivered
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === userMessage.id ? { ...msg, status: 'delivered' as const } : msg
        )
      );
    }, 500);

    // Simulate agent typing
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAgentResponse(text),
        sender: 'agent',
        timestamp: new Date(),
        status: 'read'
      };

      setMessages(prev => [...prev, agentResponse]);

      // Mark user message as read
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === userMessage.id ? { ...msg, status: 'read' as const } : msg
          )
        );
      }, 1000);
    }, 2000);
  };

  const getAgentResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('how much')) {
      return "Great question! Our retreats typically range from ₹45,000 to ₹2,80,000 depending on duration, location, and treatments. Most popular 7-day programs in Kerala are around ₹95,000-₹1,40,000. Would you like me to show you options in your budget?";
    }
    
    if (lowerText.includes('include') || lowerText.includes('typical')) {
      return "A typical retreat includes: ✓ Accommodation ✓ 3 Ayurvedic meals daily ✓ Daily consultations with doctors ✓ Personalized treatment plan ✓ Yoga & meditation sessions ✓ All therapies & medicines. Most are all-inclusive! Which aspect interests you most?";
    }
    
    if (lowerText.includes('kerala') || lowerText.includes('location')) {
      return "Kerala is the birthplace of Ayurveda! 🌴 We have 18 verified centers there. Popular areas are Palakkad (authentic, peaceful), Thrissur (heritage centers), and Wayanad (nature retreats). When are you planning to visit?";
    }
    
    if (lowerText.includes('beginner') || lowerText.includes('first time') || lowerText.includes('new')) {
      return "Absolutely perfect for beginners! 😊 Most of our travelers are first-timers. Centers provide English-speaking doctors, explain everything step-by-step, and customize treatments to your comfort level. You'll feel supported throughout. Want me to recommend beginner-friendly centers?";
    }
    
    if (lowerText.includes('customize') || lowerText.includes('personalize')) {
      return "Yes! Every program is customized after your initial consultation. Doctors assess your prakruti (constitution) and create a personalized plan. You can also request preferences for diet, room type, yoga intensity, etc. What would you like to customize?";
    }
    
    if (lowerText.includes('help') || lowerText.includes('choose') || lowerText.includes('recommend')) {
      return "I'd love to help you choose! 🎯 Let me ask: 1) What's your main wellness goal? (stress relief, detox, pain management, etc.) 2) Preferred duration? (7, 14, or 21 days) 3) Budget range? This helps me narrow down the perfect matches for you.";
    }
    
    return "That's a great point! I can help you with that. To give you the most relevant recommendations, could you tell me more about your wellness goals and what you're looking for in a retreat? Or feel free to ask me anything specific! 😊";
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-end sm:items-center justify-center sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full sm:w-[480px] h-[85vh] sm:h-[700px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center text-primary font-bold text-base sm:text-lg">
                  A
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-white">
                <div className="font-bold text-sm sm:text-base">Ananya Sharma</div>
                <div className="text-xs text-white/90 flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Active now
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={onMinimize}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-b from-muted/30 to-white">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-accent text-white rounded-2xl rounded-tr-sm'
                        : 'bg-white border border-muted rounded-2xl rounded-tl-sm text-foreground'
                    } px-4 py-3 shadow-sm`}
                  >
                    <div className="text-sm leading-relaxed">{message.text}</div>
                    <div className={`flex items-center justify-end gap-1 mt-1.5 text-xs ${
                      message.sender === 'user' ? 'text-white/70' : 'text-foreground/50'
                    }`}>
                      <span>{formatTime(message.timestamp)}</span>
                      {message.sender === 'user' && (
                        <>
                          {message.status === 'sent' && <Check className="w-3 h-3" />}
                          {message.status === 'delivered' && <CheckCheck className="w-3 h-3" />}
                          {message.status === 'read' && <CheckCheck className="w-3 h-3 text-blue-300" />}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-muted rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                    <div className="flex gap-1.5">
                      <motion.div
                        className="w-2 h-2 bg-primary/60 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary/60 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary/60 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Questions */}
          {showQuickQuestions && messages.length <= 2 && (
            <div className="px-6 py-3 border-t border-muted/50 bg-white">
              <div className="text-xs font-semibold text-foreground/60 mb-2">QUICK QUESTIONS:</div>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-3 py-2 rounded-full bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 hover:border-primary/40 transition-all font-medium"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-muted/50 px-4 py-4 bg-white">
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(inputValue);
                    }
                  }}
                  placeholder="Type your message..."
                  rows={1}
                  className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none text-sm bg-muted/30"
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="w-11 h-11 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="text-xs text-foreground/40 mt-2 text-center">
              Typically replies within 30 minutes • Available 9am-8pm IST
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}