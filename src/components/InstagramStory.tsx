import { X, Heart, Send, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface InstagramStoryProps {
  show: boolean;
  onClose: () => void;
}

const stories = [
  {
    id: 1,
    image: '/firstmeet.jpg',
    caption: 'First Picture together hihi ✨',
  },
  {
    id: 2,
    image: '/2pic.jpg',
    caption: 'My baby',
  },
  {
    id: 3,
    image: '/3pic.jpg',
    caption: 'I luv luv kissing u bubba',
  },
  {
    id: 4,
    image: '/4pic.jpg',
    caption: 'Cuties',
  },
  {
    id: 5,
    image: '/ln1.jpg',
    caption: 'Iwabyu:((',
  },
  {
    id: 6,
    image: '/ln2.jpg',
    caption: 'So pretty my bubba',
  },
  {
    id: 7,
    image: '/bgc1.jpg',
    caption: 'Remember our first pic sa bgc?',
  },
  {
    id: 8,
    image: '/bgc3.jpg',
    caption: 'Super seryoso mo mag survey hehe mwa',
  },
  {
    id: 9,
    image: '/bgc2.jpg',
    caption: 'UR SO CUTE HERE OH',
  },
  {
    id: 10,
    image: '/kiss1.jpg',
    caption: 'I love kissing u, bakit ba',
  },
  {
    id: 11,
    image: '/kiss2.jpg',
    caption: 'Another hehe',
  },
  {
    id: 12,
    image: '/favepic.jpg',
    caption: 'Fave pic ko kasi I love seeing ur eyes shine like this. I love you.',
  },
];

export const InstagramStory = ({ show, onClose }: InstagramStoryProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  useEffect(() => {
    if (!show) {
      setCurrentStoryIndex(0);
      setProgress(0);
      return;
    }

    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex((prevIndex) => prevIndex + 1);
            return 0;
          } else {
            onClose();
            return 0;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [show, currentStoryIndex, onClose, isPaused]);

  if (!show) return null;

  const currentStory = stories[currentStoryIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-md mx-auto bg-black">
          <div className="absolute top-0 left-0 right-0 z-20 p-2 flex gap-1">
            {stories.map((_, index) => (
              <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: '0%' }}
                  animate={{
                    width:
                      index < currentStoryIndex
                        ? '100%'
                        : index === currentStoryIndex
                        ? `${progress}%`
                        : '0%',
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            ))}
          </div>

          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                <img
                  src="/ig.jpg"
                  alt="justleenonlife"
                  className="w-full h-full rounded-full object-cover border border-black"
                />
              </div>
              <span className="text-white font-semibold text-sm">sarah.johnson</span>
              <span className="text-white/70 text-xs">5h</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white">
                <MoreHorizontal className="w-6 h-6" />
              </button>
              <motion.button whileTap={{ scale: 0.9 }} onClick={onClose} className="text-white">
                <X className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <motion.img
            key={currentStory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={currentStory.image}
            alt="Story"
            className="w-full h-full object-cover"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={goToPreviousStory}
            className="absolute left-0 top-0 w-1/3 h-full z-30 cursor-pointer"
            disabled={currentStoryIndex === 0}
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={goToNextStory}
            className="absolute right-0 top-0 w-1/3 h-full z-30 cursor-pointer"
          />

          <div className="absolute bottom-20 left-4 right-4 z-20">
            <p className="text-white text-sm font-medium drop-shadow-lg">{currentStory.caption}</p>
          </div>

          <div className="absolute bottom-6 left-4 right-4 z-20 flex items-center gap-3">
            <div className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Send message"
                className="w-full bg-transparent text-white placeholder-white/70 text-sm outline-none"
              />
            </div>
            <motion.button whileTap={{ scale: 0.9 }} className="text-white">
              <Heart className="w-7 h-7" />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} className="text-white">
              <Send className="w-7 h-7" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
