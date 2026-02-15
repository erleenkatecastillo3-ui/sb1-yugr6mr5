import { useRef, useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Music, Volume2, VolumeX } from 'lucide-react';

interface TikTokVideoCardProps {
  username: string;
  caption: string;
  music: string;
  profileImage: string;
  videoUrl: string;
  isMuted: boolean;
  isActive: boolean; 
}

export const TikTokVideoCard = ({ 
  username, 
  caption, 
  music, 
  profileImage, 
  videoUrl,
  isMuted = false,
  isActive 
}: TikTokVideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(isMuted);
  const [isPlaying, setIsPlaying] = useState(false);

  // --- LOGIC: Play/Pause based on Scroll ---
  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.currentTime = 0; 
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Fallback for browser blocking
            if (videoRef.current) {
              videoRef.current.muted = true;
              setMuted(true);
              videoRef.current.play();
              setIsPlaying(true);
            }
          });
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (videoRef.current) {
      const newMutedState = !muted;
      videoRef.current.muted = newMutedState;
      setMuted(newMutedState);
    }
  };

  const handleVideoTap = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        src={videoUrl}
        loop
        muted={muted}
        playsInline
        onClick={handleVideoTap}
      />

      {/* Play Icon Overlay (only when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="bg-black/40 rounded-full p-4">
            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
          </div>
        </div>
      )}

      {/* --- MUTE BUTTON (Made Subtle) --- */}
      <div 
        onClick={toggleMute}
        // Removed bg-black, added opacity-50. It fades in on hover.
        className="absolute top-24 right-4 z-30 p-2 cursor-pointer text-white/50 hover:text-white transition-opacity duration-200"
      >
        {muted ? (
          <VolumeX className="w-6 h-6 drop-shadow-md" />
        ) : (
          <Volume2 className="w-6 h-6 drop-shadow-md" />
        )}
      </div>

      {/* --- RIGHT SIDEBAR ACTIONS (Moved up slightly) --- */}
      {/* Changed bottom-20 to bottom-28 so it clears the text area */}
      <div className="absolute bottom-28 right-2 flex flex-col items-center gap-5 z-20">
        <div className="relative mb-2">
          <div className="w-12 h-12 rounded-full border-2 border-white p-0.5 overflow-hidden">
            <img src={profileImage} alt={username} className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 rounded-full p-0.5">
            <div className="w-4 h-4 text-white flex items-center justify-center text-xs font-bold">+</div>
          </div>
        </div>

        <button className="flex flex-col items-center gap-1">
          <Heart className="w-8 h-8 text-white drop-shadow-lg" />
          <span className="text-white text-xs font-semibold drop-shadow-md">84.2K</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <MessageCircle className="w-8 h-8 text-white drop-shadow-lg" />
          <span className="text-white text-xs font-semibold drop-shadow-md">1024</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <Share2 className="w-8 h-8 text-white drop-shadow-lg" />
          <span className="text-white text-xs font-semibold drop-shadow-md">Share</span>
        </button>
      </div>

      {/* --- BOTTOM TEXT (Fixed Position) --- */}
      {/* Changed bottom-4 to bottom-20. This lifts it above the Nav Bar */}
      <div className="absolute bottom-20 left-4 right-16 z-20 text-white pointer-events-none">
        <h3 className="font-bold text-lg mb-1 shadow-black drop-shadow-md">@{username}</h3>
        
        {/* Added leading-snug for better line spacing */}
        <p className="text-sm mb-3 leading-snug drop-shadow-md">
          {caption}
        </p>
        
        <div className="flex items-center gap-2 opacity-90">
          <Music className="w-3 h-3" />
          <div className="overflow-hidden w-32">
            <p className="text-xs whitespace-nowrap">{music}</p>
          </div>
        </div>
      </div>
    </div>
  );
};