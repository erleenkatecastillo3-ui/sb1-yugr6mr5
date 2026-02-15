import { Home, Search, PlusSquare, Inbox, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TikTokVideoCard } from './TikTokVideoCard';

interface TikTokFeedProps {
  onInboxClick: () => void;
  onReachLastVideo: () => void;
}

export const TikTokFeed = ({ onInboxClick, onReachLastVideo }: TikTokFeedProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0); // 1. State to track visible video

  // Sample Data
  const videos = [
    {
      id: 1,
      username: 'Euleen24',
      caption: 'NAKAKAPANGHINA TO SANA ALAM MO',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/1video.mp4',
    },
    {
      id: 2,
      username: 'Euleen24',
      caption: 'i LUV IT WHEN U WINK',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/2video.MP4',
    },
    {
      id: 3,
      username: 'Euleen24',
      caption: 'Gusto po kita',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/3video.MP4',
    },
    {
      id: 4,
      username: 'Euleen24',
      caption: 'Walang biceps pero merong kiss:P',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/4video.MP4',
    },
    {
      id: 5,
      username: 'Euleen24',
      caption: 'Cutie fak fak aaaaaa',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/5video.mp4',
    },
    {
      id: 6,
      username: 'Euleen24',
      caption: 'Ahehehehehehehehe',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/6video.mp4',
    },
    {
      id: 7,
      username: 'Euleen24',
      caption: 'For my eyes only lang po',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/7video.mp4',
    },
    {
      id: 8,
      username: 'Euleen24',
      caption: 'U requested, I oblige',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/8video.mp4',
    },
      {
      id: 9,
      username: 'Euleen24',
      caption: 'I luv luv dis',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/9video.mp4',
    },
    {
      id: 10,
      username: 'Euleen24',
      caption: 'Ahehehehehhehehehe',
      music: 'Valentines Special - xai',
      profileImage: '/euleen.jpg',
      videoUrl: '/10video.mp4',
    },
  ];

  // 2. The Scroll Handler
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;

    // Calculate which index is currently in view
    // (e.g., if scrolled 800px and height is 800px, index is 1)
    const newIndex = Math.round(scrollTop / clientHeight);

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }

    // Check if we reached the bottom to load more
    if (scrollHeight - scrollTop - clientHeight < 50) {
      onReachLastVideo();
    }
  };

  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-black overflow-hidden">
      {/* Scrollable Feed Container */}
      <div 
        ref={scrollRef} 
        onScroll={handleScroll} // 3. Listen to scroll events
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
      >
        {videos.map((video, index) => (
          <div key={video.id} className="h-full w-full snap-start relative">
             <TikTokVideoCard
               username={video.username}
               caption={video.caption}
               music={video.music}
               profileImage={video.profileImage}
               videoUrl={video.videoUrl}
               isMuted={false}
               // 4. THE FIX: Only true if this is the active index
               isActive={index === activeIndex} 
             />
          </div>
        ))}
      </div>

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center gap-8 z-20 pointer-events-none">
        <button className="text-white/60 text-sm font-medium pointer-events-auto">Following</button>
        <button className="text-white text-base font-semibold border-b-2 border-white pb-1 pointer-events-auto">
          For You
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-sm border-t border-white/10 flex items-center justify-around z-20">
        <motion.button whileTap={{ scale: 0.9 }} className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6 text-white" />
          <span className="text-white text-xs">Home</span>
        </motion.button>

        <motion.button whileTap={{ scale: 0.9 }} className="flex flex-col items-center gap-1">
          <Search className="w-6 h-6 text-white/60" />
          <span className="text-white/60 text-xs">Discover</span>
        </motion.button>

        <motion.button whileTap={{ scale: 0.9 }}>
          <div className="relative">
            <PlusSquare className="w-10 h-10 text-white" fill="white" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg" />
            </div>
          </div>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onInboxClick}
          className="flex flex-col items-center gap-1"
        >
          <Inbox className="w-6 h-6 text-white/60" />
          <span className="text-white/60 text-xs">Inbox</span>
        </motion.button>

        <motion.button whileTap={{ scale: 0.9 }} className="flex flex-col items-center gap-1">
          <User className="w-6 h-6 text-white/60" />
          <span className="text-white/60 text-xs">Profile</span>
        </motion.button>
      </div> 
    </div>
  );
};