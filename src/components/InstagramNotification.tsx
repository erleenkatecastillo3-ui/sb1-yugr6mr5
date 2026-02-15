import { motion, AnimatePresence } from 'framer-motion';

interface InstagramNotificationProps {
  show: boolean;
  onTap: () => void;
}

export const InstagramNotification = ({ show, onTap }: InstagramNotificationProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-4 left-4 right-4 z-50 max-w-md mx-auto"
          onClick={onTap}
        >
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
          >
            <div className="p-3 flex items-start gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src="/ig.jpg"
                  alt="Instagram"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-black text-sm">Instagram</span>
                  <span className="text-gray-500 text-xs">now</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">justleenonlife</span> followed you back
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
