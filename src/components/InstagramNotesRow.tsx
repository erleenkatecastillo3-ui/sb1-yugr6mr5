import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface InstagramNotesRowProps {
  onStoryClick: () => void;
}

const mockNotes = [
  {
    id: 'own',
    username: 'Your note',
    avatar: '/igchie.jpg',
    noteText: 'Location off',
    isOwn: true,
  },
  {
    id: 1,
    username: 'lin',
    avatar: 'ig.jpg',
    noteText: 'hi:)',
    hasStory: true,
  },
];

export const InstagramNotesRow = ({ onStoryClick }: InstagramNotesRowProps) => {
  return (
    <div className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {mockNotes.map((note) =>
          note.isOwn ? (
            <motion.div
              key={note.id}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
            >
              <div className="relative mb-2">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <img src={note.avatar} alt={note.username} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-full" />
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              </div>
              <p className="text-xs font-semibold text-black text-center max-w-[60px] truncate">{note.username}</p>
              <p className="text-xs text-gray-500 text-center max-w-[60px] line-clamp-1">{note.noteText}</p>
            </motion.div>
          ) : (
            <motion.div
              key={note.id}
              whileTap={{ scale: 0.95 }}
              onClick={onStoryClick}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
            >
              <div className="relative mb-2">
                <div
                  className={`w-16 h-16 rounded-full p-[2px] flex items-center justify-center overflow-hidden ${
                    note.hasStory
                      ? 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-orange-500'
                      : 'bg-gray-200'
                  }`}
                >
                  <img
                    src={note.avatar}
                    alt={note.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs font-semibold text-black text-center max-w-[60px] truncate">{note.username}</p>
              <p className="text-xs text-gray-500 text-center max-w-[60px] line-clamp-1">{note.noteText}</p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};
