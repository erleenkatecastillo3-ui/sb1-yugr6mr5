import { ArrowLeft, MoreHorizontal, Search, UserPlus, Camera, Home, ShoppingBag, Plus, MessageSquare, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TikTokInboxProps {
  onBack: () => void;
}

export const TikTokInbox = ({ onBack }: TikTokInboxProps) => {
  const [view, setView] = useState<'list' | 'chat'>('list');

  const conversation = {
    name: 'xai',
    avatar: '/tiktok.jpg',
    lastMessage: 'seen',
    time: '1s ago',
    unread: true,
  };

  if (view === 'chat') {
    return (
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="h-screen w-full max-w-md mx-auto bg-white flex flex-col"
      >
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setView('list')}>
              <ArrowLeft className="w-6 h-6 text-black" />
            </motion.button>
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <h3 className="text-black font-semibold text-sm">{conversation.name}</h3>
              <p className="text-gray-500 text-xs">Active now</p>
            </div>
          </div>
          <MoreHorizontal className="w-6 h-6 text-black" />
        </div>

        {/* Chat Area - ALL MESSAGES INSERTED BELOW */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <p className="text-white text-sm">HI HELLO I STALKED U WALA LANG ANW POGI MO AYON LANG BYE</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">9:54 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <p className="text-black text-sm">Uy hi HAHAHAHAHA thank you (?) I don't know how to take compliments sorry!😭</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <p className="text-black text-sm">You're both maganda ang pogi din! 🥹🫵</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:55 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <div className="bg-white/20 rounded-lg px-3 py-2 mb-2 border-l-4 border-white/50">
                  <p className="text-white/80 text-xs line-clamp-2 italic">
                    Uy hi HAHAHAHAHA thank you (?) I don't know how to take compliments sorry!😭
                  </p>
                </div>
                <p className="text-white text-sm">AHSJJJAHSHJAHSHAHSH HUY? 😭😭 hala same 🥹🥹🥹</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:56 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <p className="text-white text-sm">tahulan nalang kaya kita ganon? HAHAHA KEME</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:57 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <p className="text-black text-sm">Ate ko naman HAAHAHAHAHAHAHAHAHA😭😭😭</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">9:57 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <div className="bg-white/40 rounded-lg px-3 py-2 mb-2 border-l-4 border-white/50">
                  <p className="text-black/80 text-xs line-clamp-2 italic">
                    AHSJJJAHSHJAHSHAHSH HUY? 😭😭 hala same 🥹🥹🥹
                  </p>
                </div>
                <p className="text-black text-sm">Realllll, you're attractive!</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">9:57 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <div className="bg-white/20 rounded-lg px-3 py-2 mb-2 border-l-4 border-white/50">
                  <p className="text-white/80 text-xs line-clamp-2 italic">
                    Realllll, you're attractive!
                  </p>
                </div>
                <p className="text-white text-sm">U ARE TOO!!!</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:57 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <p className="text-white text-sm">ang ganda ng gupit mo like😮‍💨😮‍💨😮‍💨</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:57 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <p className="text-black text-sm">Thank you!!! HAHAHAHA it's funny at first nga kasi I thought hindi babagay yung gupit sakin</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">9:57 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <p className="text-white text-sm">nung nakita ko nagcomment ka sa akin nakuha mo agad atensyon ko sa buhok mo HAHAHAHAHAHAHAHAH</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:58 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <p className="text-black text-sm">I'm flattered, di ko talaga alam ano asabihin henever someone compliments me😭</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">9:58 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <p className="text-white text-sm">HAHAHAHAHAHAHA tahol ka lang</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:58 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2">
                <p className="text-white text-sm">JOKE BAKA ISIPIN M BALIW AQOUH</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:59 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <div className="bg-white/40 rounded-lg px-3 py-2 mb-2 border-l-4 border-white/50">
                  <p className="text-black/80 text-xs line-clamp-2 italic">
                    HAHAHAHAHAHAHA tahol ka lang
                  </p>
                </div>
                <p className="text-black text-sm">Arf arf?😭</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">9:59 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2 text-black text-sm">
                HAWHAAHAHAHAHAHAHAHAHA
              </div>
              <span className="text-gray-500 text-xs mt-1 block">9:59 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2 text-white text-sm">
                WOOF WOOF
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:59 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2 text-white text-sm">
                HASHHAHAHAHAHHASHAHAHAHHAHA
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">9:59 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <div className="bg-white/40 rounded-lg px-3 py-2 mb-2 border-l-4 border-white/50">
                  <p className="text-black/80 text-xs line-clamp-2 italic">
                    JOKE BAKA ISIPIN M BALIW AQOUH
                  </p>
                </div>
                <p className="text-black text-sm">WAG KA MAG ALALA, KANAL HUMOR DIN AKO😼🫵</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">10:00 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2 text-white text-sm">
                CAN WE BE MOOTS SA IG?
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">10:00 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2">
                <div className="bg-white/40 rounded-lg px-3 py-2 mb-2 border-l-4 border-white/50">
                  <p className="text-black/80 text-xs line-clamp-2 italic">
                    CAN WE BE MOOTS SA IG?
                  </p>
                </div>
                <p className="text-black text-sm">Wait, I deactivated mine eh HAHAHAHAHAHA</p>
              </div>
              <span className="text-gray-500 text-xs mt-1 block">10:00 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2 text-black text-sm">
                #lowkey era ko sa socmeds aside sa tiktok
              </div>
              <span className="text-gray-500 text-xs mt-1 block">10:01 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2 text-black text-sm">
                I'll install ig muna, wait
              </div>
              <span className="text-gray-500 text-xs mt-1 block">10:01 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2 text-white text-sm">
                WAO WAO WAO
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">10:03 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2 text-white text-sm">
                is it okay lang baa?? huhu
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">10:04 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2 text-black text-sm">
                Yeahhh, I've been thinking on going back naman na din sa socmeds
              </div>
              <span className="text-gray-500 text-xs mt-1 block">10:05 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2 text-black text-sm">
                @justleenonlife
              </div>
              <span className="text-gray-500 text-xs mt-1 block">10:10 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2 text-white text-sm">
                ang estetik moe pu...
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">10:13 PM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="bg-gray-200 rounded-3xl rounded-bl-sm px-4 py-2 text-black text-sm">
                Ang ganda moe pu,,,,
              </div>
              <span className="text-gray-500 text-xs mt-1 block">10:14 PM</span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[75%]">
              <div className="bg-pink-500 rounded-3xl rounded-br-sm px-4 py-2 text-white text-sm">
                wag k po ganiyan mabilis poeh aqouh kiligin
              </div>
              <span className="text-gray-500 text-xs mt-1 block text-right">10:14 PM</span>
            </div>
          </div>
        </div>

        {/* Footer Input */}
        <div className="bg-white border-t border-gray-100 p-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-black placeholder-gray-500 outline-none"
          />
          <button className="text-pink-500 font-semibold text-sm px-2">Send</button>
        </div>
      </motion.div>
    );
  }

  // Inbox List View (Main Screen)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-full max-w-md mx-auto bg-white flex flex-col font-sans text-black"
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <UserPlus className="w-7 h-7" />
        <div className="flex items-center gap-1">
          <h1 className="text-[17px] font-bold">Happy Valentines, my bubba!</h1>
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
        </div>
        <Search className="w-7 h-7" />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Story/Create Circle */}
        <div className="px-4 py-4 flex gap-5 overflow-x-auto no-scrollbar">
          <div className="flex flex-col items-center gap-1">
            <div className="relative">
              <img 
                src="/achie.jpg" 
                className="w-16 h-16 rounded-full object-cover border border-gray-100"
              />
              <div className="absolute -top-4 -left-2 bg-white px-2 py-1 rounded-xl shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 leading-tight">Whisper,<br/>whisper</p>
              </div>
              <div className="absolute bottom-0 right-0 bg-cyan-400 rounded-full border-2 border-white p-0.5">
                <Plus className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-xs text-gray-800 mt-1">Create</span>
          </div>
        </div>

        {/* Top Notifications */}
        <div className="px-4 py-3 flex items-center gap-4 active:bg-gray-50">
          <div className="w-14 h-14 bg-cyan-400 rounded-full flex items-center justify-center">
            <UserPlus className="text-white w-7 h-7" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-[15px]">New followers</h3>
            <p className="text-gray-500 text-sm">justxaishi started following you.</p>
          </div>
        </div>

        <div className="px-4 py-3 flex items-center gap-4 active:bg-gray-50">
          <div className="relative">
            <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center">
              <svg className="text-white w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <div className="absolute top-0 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">6</div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-[15px]">Activity</h3>
            <p className="text-gray-500 text-sm truncate w-48">xai says she loves you so much</p>
          </div>
        </div>

        {/* Clickable Message */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setView('chat')}
          className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
        >
          <div className="relative">
            <img src={conversation.avatar} className="w-14 h-14 rounded-full object-cover" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-pink-500 rounded-full border-2 border-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-[15px]">{conversation.name}</h3>
            <p className="text-gray-400 text-sm">{conversation.lastMessage}</p>
          </div>
          <Camera className="w-6 h-6 text-gray-800" />
        </motion.button>
      </div>

     {/* Bottom Nav */}
      <div className="border-t border-gray-100 px-2 py-2 flex justify-around items-end bg-white">
        
        {/* Fixed Home Button */}
        <button 
          onClick={onBack} 
          className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <Home className="w-7 h-7" />
          <span className="text-[10px]">Home</span>
        </button>

        <div className="flex flex-col items-center opacity-60 relative">
            <ShoppingBag className="w-7 h-7" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
            <span className="text-[10px]">Shop</span>
        </div>

        <div className="bg-black p-1 rounded-lg px-3 mb-1">
          <Plus className="text-white w-6 h-5" strokeWidth={3} />
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <MessageSquare className="w-7 h-7 fill-black" />
            <div className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold px-1 rounded-md">39</div>
          </div>
          <span className="text-[10px] font-bold">Inbox</span>
        </div>

        <div className="flex flex-col items-center opacity-60">
          <User className="w-7 h-7" />
          <span className="text-[10px]">Profile</span>
        </div>
      </div>
    </motion.div>
  );
};