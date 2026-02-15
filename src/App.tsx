import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { TikTokFeed } from './components/TikTokFeed';
import { TikTokInbox } from './components/TikTokInbox';
import { InstagramNotification } from './components/InstagramNotification';
import { InstagramDM } from './components/InstagramDM';
import { InstagramStory } from './components/InstagramStory';
import { InstagramInbox } from './components/InstagramInbox';

type View = 'tiktok' | 'tiktok-inbox' | 'instagram-dm' | 'instagram-inbox';

function App() {
  const [view, setView] = useState<View>('tiktok');
  const [showNotification, setShowNotification] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [notificationShown, setNotificationShown] = useState(false);

  const handleReachLastVideo = () => {
    if (notificationShown) return;

    setTimeout(() => {
      setShowNotification(true);
      setNotificationShown(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 6000);
    }, 2000);
  };

  const handleNotificationTap = () => {
    setShowNotification(false);
    setView('instagram-inbox'); 
  };

  const handleBackToTikTok = () => {
    setView('tiktok');
  };

  const handleStoryClose = () => {
    setShowStory(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <InstagramNotification show={showNotification} onTap={handleNotificationTap} />
      <InstagramStory show={showStory} onClose={handleStoryClose} />

      <AnimatePresence mode="wait">
        {view === 'tiktok' && (
          <TikTokFeed
            key="tiktok-feed"
            onInboxClick={() => setView('tiktok-inbox')}
            onReachLastVideo={handleReachLastVideo}
          />
        )}
        {view === 'tiktok-inbox' && (
          <TikTokInbox key="tiktok-inbox" onBack={handleBackToTikTok} />
        )}
        
        {/* --- CHAT SCREEN (DM) --- */}
        {view === 'instagram-dm' && (
          <InstagramDM
            key="instagram-dm"
            // When going back from DM, go back to the Inbox list
            onBack={() => setView('instagram-inbox')} 
            onStoryClick={() => setShowStory(true)}
          />
        )}

        {/* --- MESSAGES LIST (INBOX) --- */}
        {view === 'instagram-inbox' && (
          <InstagramInbox
            key="instagram-inbox"
            onBack={handleBackToTikTok}
            // THIS LINE MAKES THE CLICK WORK:
            onChatClick={() => setView('instagram-dm')} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 