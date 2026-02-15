import { motion } from 'framer-motion';
import { Phone, Video, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface InstagramMessagesSectionProps {
  tab: 'messages' | 'requests';
  onMessageSelect: () => void;
}

const mockMessages = [
  {
    id: 1,
    username: 'lin',
    avatar: '/ig.jpg',
    preview: 'That sounds amazing! 😊',
    timestamp: '1s',
    isRead: true,
    callStatus: null,
    reaction: null,
  },
];

const mockRequests = [
  {
    id: 101,
    username: 'lin_tkan',
    avatar: '/igdump.jpg',
    mutualFriends: 3, 
  },
];

export const InstagramMessagesSection = ({ tab, onMessageSelect }: InstagramMessagesSectionProps) => {
  const [contextMenu, setContextMenu] = useState<number | null>(null);

  const getStatusDisplay = (msg: any) => {
    if (msg.callStatus === 'missed-video') {
      return <span className="text-red-500 text-xs font-semibold">Missed video call</span>;
    }
    if (msg.reaction) {
      return <span className="text-gray-600 text-xs">Reacted {msg.reaction} to your message</span>;
    }
    return <span className="text-gray-500 text-xs">{msg.isRead ? `Seen ${msg.timestamp} ago` : 'Active now'}</span>;
  };

  if (tab === 'requests') {
    return (
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {mockRequests.map((request) => (
          <motion.div
            key={request.id}
            whileTap={{ backgroundColor: '#f9fafb' }}
            className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <img
                src={request.avatar}
                alt={request.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-black">{request.username}</p>
                <p className="text-xs text-gray-500">{request.mutualFriends} mutual friends</p>
              </div>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-5 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full"
              >
                Accept
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-5 py-1.5 bg-gray-200 text-black text-xs font-semibold rounded-full"
              >
                Delete
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
      {mockMessages.map((msg) => (
        <div key={msg.id} className="relative">
          <motion.div
            whileTap={{ backgroundColor: '#f9fafb' }}
            onClick={onMessageSelect}
            className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img
                src={msg.avatar}
                alt={msg.username}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold text-black ${msg.isRead ? 'font-semibold' : 'font-bold'}`}>
                  {msg.username}
                </p>
                <p className={`text-sm truncate ${msg.isRead ? 'text-gray-600' : 'text-gray-800 font-medium'}`}>
                  {msg.preview}
                </p>
                {getStatusDisplay(msg)}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              <span className={`text-xs ${msg.isRead ? 'text-gray-500' : 'text-gray-800 font-semibold'}`}>
                {msg.timestamp}
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setContextMenu(contextMenu === msg.id ? null : msg.id);
                }}
                className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:bg-gray-100 rounded-full transition-all"
              >
                <MoreHorizontal className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {contextMenu === msg.id && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute right-4 top-12 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-40"
            >
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Voice call
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
                <Video className="w-4 h-4" />
                Video call
              </button>
              <div className="border-t border-gray-100"></div>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-gray-600">
                Mute
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-gray-600">
                Mark as unread
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-500">
                Delete
              </button>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
