import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Search, Home, Film, Plus, Heart, User, Phone, Video, MoreHorizontal, X } from 'lucide-react';
import { InstagramNotesRow } from './InstagramNotesRow';
import { InstagramMessagesSection } from './InstagramMessagesSection';
import { InstagramStory } from './InstagramStory';

// 1. ADD onChatClick TO THE INTERFACE
interface InstagramInboxProps {
  onBack: () => void;
  onChatClick: () => void; 
}

// 2. RECEIVE THE PROP HERE
export const InstagramInbox = ({ onBack, onChatClick }: InstagramInboxProps) => {
  const [showStory, setShowStory] = useState(false);
  const [activeTab, setActiveTab] = useState<'messages' | 'requests'>('messages');
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen w-full max-w-md mx-auto bg-white flex flex-col"
    >
      <InstagramStory show={showStory} onClose={() => setShowStory(false)} />

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-black">notyownis</span>
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <motion.button whileTap={{ scale: 0.9 }}>
              <MessageCircle className="w-6 h-6 text-black" />
            </motion.button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search or ask AI"
              className="flex-1 bg-transparent text-sm text-black placeholder-gray-500 outline-none"
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        </div>
      </div>

      <InstagramNotesRow onStoryClick={() => setShowStory(true)} />

      {/* Messages Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex gap-6">
            <motion.button
              onClick={() => setActiveTab('messages')}
              className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
                activeTab === 'messages' ? 'text-black border-black' : 'text-gray-500 border-transparent'
              }`}
            >
              Messages
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('requests')}
              className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
                activeTab === 'requests' ? 'text-black border-black' : 'text-gray-500 border-transparent'
              }`}
            >
              Requests
            </motion.button>
          </div>
        </div>

        {/* 3. THIS IS THE CRITICAL FIX: PASS THE CLICK HANDLER DOWN */}
        <InstagramMessagesSection 
          tab={activeTab} 
          onMessageSelect={onChatClick} 
        />
      </div>

      {/* Footer Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-around">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack}>
            <Home className="w-6 h-6 text-black" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }}>
            <Film className="w-6 h-6 text-black" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }}>
            <Plus className="w-6 h-6 text-black" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} className="relative">
            <Heart className="w-6 h-6 text-black" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">3</span>
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }}>
            <User className="w-6 h-6 text-black" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};