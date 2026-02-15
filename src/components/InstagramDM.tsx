import { ArrowLeft, Phone, Video, Info, Camera, Mic, Heart, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface InstagramDMProps {
  onBack: () => void;
  onStoryClick: () => void;
}

export const InstagramDM = ({ onBack, onStoryClick }: InstagramDMProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="h-[100dvh] w-full max-w-md mx-auto bg-white flex flex-col font-sans"
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-black" />
          </motion.button>
          
          <motion.button whileTap={{ scale: 0.95 }} onClick={onStoryClick} className="relative">
             <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <img src="/ig.jpg" alt="user" className="w-full h-full object-cover" />
             </div>
          </motion.button>
          
          <div>
            <h3 className="text-black font-semibold text-sm">lin</h3>
            <p className="text-gray-400 text-xs">Active now</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <Phone className="w-6 h-6 text-black" strokeWidth={1.5} />
          <Video className="w-6 h-6 text-black" strokeWidth={1.5} />
          <Info className="w-6 h-6 text-black" strokeWidth={1.5} />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 bg-white">

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">6/26/25, 11:52 PM</span>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm overflow-hidden max-w-[70%] shadow-sm">
             <img 
               src="/firstmove.jpg" 
               alt="sent photo" 
               className="w-full h-auto object-cover block" 
             />
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">HAHAHAHAHAHHA ANG RANDOM NAMAN NG WAY OF FIRST MOVE AH</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">MAGVM NLNG AQ</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">XURI NA AGAD SA BOSES</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Pag yan maganda, kakaltukan kita</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Wow nag mic test, isang kanta nga diyan miss maam</p>
            </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">6/27/25, 5:25 AM</span>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Good mornighttt! I had fun watching the moviesss</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Tulog ka na din if inaantok ka na</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">goodmornight!! ingat ikaw pagpasok sa school, gagawa muna ako ng chores here</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Yep thank you. Rest ka na after doing chores ah</p>
            </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">6/27/25, 11:18 PM</span>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">R U ALIVE</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Hi yeahhh, bakit? Miss mo ko?</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">ABA</p>
          </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">6/28/25, 10:29 PM</span>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HI HIIII</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Mag sleep over pala friends ko later</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HAHAHAHA until now nag vvalo kamiii</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Tas pagdating condo mag murder mystery file</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">uki ukiii, enjoy ikawww</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">tuhray updater na sha</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">i mean tau pala dalawa</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Sige wag na</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">LAH</p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">JOKE LANG</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUDHAHAHAHAHAHAHAHHA</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUSHAHAHAHHAHAHAHA</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HAHAHAHAHAHHAHAHAHAHAHHA</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">K</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">u laughing at me ha</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">hmp</p>
          </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">6/29/25, 9:27 PM</span>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Nakakatakot na pls🥹</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHAHAHAHHAHAHAHAHAHA KAHIT NAMAN ISKIP MO YUNG 19 MAY 20 PA MAY POSSIBLE NA MABALIW KA ULIT SA PAGMAMAHAL</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Wag na ma inlove ulit</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUDHAHAHAHAHAHAHAHHA</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">sa akin? ayaw mo? HAHAHHAHA KEME 😞😞😞</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUSHAHAHAHHAHAHAHA WOAHHHH</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHSHAHHAHA WHAT IF?</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">KEME ULIT</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Ikaw ha, crush mo ba ako?</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Emz</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HSJDHSJSBSHAHAHSHHAH</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HSJDHSJSBSHAHAHSHHAH</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm overflow-hidden max-w-[70%] shadow-sm">
             <img 
               src="/meme.png" 
               alt="sent photo" 
               className="w-full h-auto object-cover block" 
             />
          </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">6/30/25, 12:58 PM</span>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Wala naman yan sa ah ganto astrological sign ko or what shit. Tingnan mo nga, same year kayo nung kinuwento ko pero mas na ssense ko ang maturity mo kesa sa kanya</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Tsaka di naman porket water sign ka (PERO WOW WATER SIGN KA JUSKO PO JUSKO PO EME) eh same na kayo ng ugali ng mga nakilala kong water sign din</p>
             </div>
        </div>
        
        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHAHHAHAHAHQHHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAH fire sign po ako</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">march 28</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">aries</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">And here I am thinking pasok ka sa march 20 na cut</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">YEY FIRE SIGN SIYA</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">😭😭😭😭😭</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">LORD THANK YOU</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">May pa lsm pa, fire sign din naman</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHSHAHAHAHHAHAHAHAHHAHAHAHAUAHHAHAAHAHAHHAHAHAHQHAHHAUQHAHQHAHHQHAHQHAHQHAHJQHAHAHAHAHHAA BAKIT NAFEFEEL KO SOBRANG TUWANG TUWA KA</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Okay timeout sakin, I'll face the wall</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">STOP NAHIHIYA AKO KASI AKALA KO WATER SIGN KA</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HQJSHWHHSHAHAHAHHAHAHA 😭😭😭😭😭😭😭😭😭😭😭😭 ang cute</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Sorry malaki lang talaga inis ko sa water sign</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">SIGE INIS N RIN AQ SAKANILA</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">No hindi, nahihiya ako. Timeout muna ako</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">#nonchalant for a bit</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HQHAHHAHAHAHAHAH R U SHORE</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">OO</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Stop</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Im still shy</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Nakalimutan ko na cut off sa march 20 ang pisces</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Bye</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HHAHAHHAHAHAHAHHQHAHQQUHQUQUQUQHHQHQWHWHQHQHQHHAUQHAHA ANG CUTE MO</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">😭😭😭😭😭</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Ah hindi wala gagi don't, nakakahiya kalimutan na natin yun</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">sige btw aries ako ha</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Oo na fire sign ka na. Hindi ka water, sorry nag assume ako na water ka. Pero yipee yey kasi fire ka din like me😞</p>
             </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">6/30/25, 5:01 AM</span>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">di ka na magsleep?</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">I think hindi na talaga. Mag coffee nalang ako ulit later then babawi nalang ng tulog after class</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">mkay pero kumain ka muna b4 ka pumasok</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">WAO ANO YAN NANAY</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUDHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHA</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Yes ate</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">tangina</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">wag na</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">magutom ka nalang pala</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUDHAHAHAHAHAHAHAHHA</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HSUDHSJSHUSHAIAHSUAHSUAHHS</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUSHSHSHSHSHHSHSHSHSHSHSS</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">basag yon ah</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHSHQHHSHAHA</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HWUSHSHSHSHSHHSHSHSHSHSHSS</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">SARAP ASARIN KAINIS</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">wag ka kakain ha</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">masama kumain</p>
          </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">Ang galing</p>
             </div>
        </div>

        <div className="flex justify-start mt-1">
             <div className="bg-[#f3f4f6] rounded-[20px] rounded-bl-sm px-4 py-2 max-w-[75%]">
                <p className="text-black text-[15px]">HSJDHSKSHSHHSHSHSHS</p>
             </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">nag aantay nlmg aq bus</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">wao updators</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">wao updators</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Natatawa ako sa mga paganto mo, ano ba HSJSHSJSHAHEHS😭😭</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">tagal ng bus</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">nagwawait nlmg aq ng bus</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">waiter ako</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">waiter ako</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Okay benta yung joke</p>
            </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">tagal ng bus</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Sorry maam eto na papunta na po</p>
            </div>
        </div>

        <div className="flex flex-col items-end w-full">
            <span className="text-gray-400 text-[12px] mb-1 mr-4">You replied to lin</span>
            <div className="bg-gray-100 rounded-[24px] px-5 py-3 mb-1 mr-1 max-w-[65%]">
                <p className="text-gray-500 text-[14px]">Okay benta yung joke</p>
            </div>

            <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
                <p className="text-white text-[15px]">??????</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">Okay bunso</p>
          </div>
        </div>

        <div className="flex flex-col items-end w-full">
            <span className="text-gray-400 text-[12px] mb-1 mr-4">You replied to lin</span>
            <div className="bg-gray-100 rounded-[24px] px-5 py-3 mb-1 mr-1 max-w-[65%]">
                <p className="text-gray-500 text-[14px]">Sorry maam eto na papunta na po</p>
            </div>

            <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
                <p className="text-white text-[15px]">pakibilisan</p>
            </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">okay bunso</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">AY MAGALING</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">😛😛😛</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">pakibilisan</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Ay hindi ayoko, nawalan ng gas. Pumutok yung tire. Nadapa yung driver</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">tangina paano madadapa yung driver</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">😭😭😭</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Paakyat ng bus</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">bobo naman</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Tapos nadapa. Nabalian ng buto, na hospital</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Ayun</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Late ang bus</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">YAHAHHAHAHAHA ANG OA NAMAN NG NABALIAN</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">ayoko magstanding</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">tanginang yan</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">tayuan sa bus what the fuck
</p>
          </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">lin started a video chat</span>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">Video chat ended</span>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">YAWA</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">NAPINDOT</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">PATI AKO NAGULAT</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">SORRY</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">😭😭😭😭😭😭😭😭😭😭</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">sama ka ba sa byahe ko, bunso?</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">😭😭😭</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">sama ka ba sa byahe ko, bunso?</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Ano ba tong tao na to</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Nasa acceptance stage k n ba na matanda ka na?</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Okay, maganda yan</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHSHAHHSHAHSHAHSHHA GAGO TALAGA😭😭😭</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">teka napikon ako</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAJSHWJHSHAHAHA</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">HAUSHAKHAJAHAJA</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Okay tama na, pikon ka na</p>
            </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">7/1/25, 9:14 PM</span>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">KACALL KUTA BAKA TAW AKA NANG TAWAo</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">😞😞😞😞😞</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">HWUSHAHAHAHHAHAHAHA</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">OMG IM VEING CLINGY SAYO</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Ang kulit mo kapag lasing (in a good way)</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">THIS IS NOT GOO</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">GOOD</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">OMG</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">U HA</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">CRUSH KITA</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">PERO</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">OMG IM VEING CLINGY SAYO</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Crush mo ko noh</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">NAKAKAHIYA</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">OMG</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">CRUSH KITA</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">HWUDHAHAHAHAHAHAHAHHA</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">OMG</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">FAK U</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">:((</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">LASING NA AKO</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">😭😭😭😭</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">I TOLD U NA CRUSH KITA</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">😭😭😭😭</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">FAK U</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">:((</p>
          </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">7/4/25, 2:25 AM</span>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]"><div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">😭😭😭😭</p>
            </div>
        </div></p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">HSUDHAJBAHAJDHZJXHJSHXHSHSUDGDYXHHAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAH</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Si oa ung nasa control panel ng brain q raytnao</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">AND I LOVE IT DW</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">AND I LOVE IT DW</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Meron na akong entry sa propaganda I'll surely fall for</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">HEUDJSJHSJS</p>
            </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">Meron na akong entry sa propaganda I'll surely fall for</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Need q n magpalit ng phone nag gghost touch, nattype tuloy kung ano yung nasa subconscious mind ko</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">GO LANG TOTOO NAMAN KASE HUHU I LOVE IT SUPER</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">HWUSHSJAHJAAH😞😞😞😞😞</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">CUTE NAMAN EH</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">ANO KA BA</p>
          </div>
        </div>

        <div className="flex flex-col items-start max-w-[75%]">
            <span className="text-gray-400 text-[11px] mb-1 ml-1">Replied to you</span>
            <div className="bg-[#a78bfa] rounded-[20px] rounded-tl-sm px-4 py-2">
              <p className="text-white text-[15px] font-medium">ANO KA BA</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Yung tao na mukhang crush ka na</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHZBWJXBWJJSJA bakit ako ba hindi</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Wala na, u got me giggling n kicking my feet😞😞😞</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">Lord sige na po di na ako magththirstrap promise sa akin nlng to pls</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">😭😭😭😭😭</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">NATATAWA AKO HSKDHSKAHAJ ANG CUTE GAGE</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHSHWHDHHWHDHQHSHAHSHHQHSHQHSHQHSHHAHS</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">KINIKILIG NA AKO ANO K B. TEKA LANG WAIT PAUSE THE WORLD</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">OKAY GO TAKE UR TIME HSJWBDJNAJA</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Alam na alam kasi pano ako kunin eh, isang sulyap, isang ngiti. Grabe jusko po lord kaya favorite kita, papasok ka ng tao sa buhay ko tapos ganito kaganda</p>
            </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">7/7/25, 11:41 AM</span>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">awake na po ako</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">alternate tlg tau matulog eh no</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">HAHSJJAJSJSHSHS</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Tanginang baby yan teka kakagising ki lgn</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">edi goodmorning baby?</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">PARSNG EWAN TO</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">😞😞😞</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">bAKIT HAJWHSHAH GOODMORNING BABY</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">JSJDHSKSHS WSIT</p>
            </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">😞😞😞😞</p>
            </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#6366f1] rounded-[20px] rounded-br-sm px-4 py-2 max-w-[75%] shadow-sm">
             <p className="text-white text-[15px]">mkay baby</p>
          </div>
        </div>

        <div className="flex justify-start">
            <div className="bg-[#f3f4f6] rounded-[20px] px-4 py-2 max-w-[75%]">
               <p className="text-black text-[15px]">Sana aware ka po na nag mmalfunction utak ko rn</p>
            </div>
        </div>

        <div className="flex justify-center mb-6 mt-2">
            <span className="text-gray-400 text-[11px] font-medium">HI BABY I HOPE U HAD FUN REMINISCING OUR TALKING STAGE ERA HEHEHEH. OKI NOW THAT NATAPOS MO NA. PRESS UNG BACK BUTTON AND THEN CHECK MO YUNG STORIES DOON. HIHI I LOVE U!! IT'S JUST A LITTLE "TRAVEL BACK IN TIME" TYPA SHI. MWA!!</span>
        </div>

      </div>

      {/* Footer / Input Area */}
      <div className="bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.9 }}>
            <Camera className="w-7 h-7 text-black" strokeWidth={1.5} />
          </motion.button>
          
          <div className="flex-1 bg-[#f3f4f6] rounded-full px-4 py-2.5 flex items-center gap-2">
            <input
              type="text"
              placeholder="Message..."
              className="flex-1 bg-transparent text-[15px] text-black placeholder-gray-500 outline-none"
            />
            <Mic className="w-5 h-5 text-black" strokeWidth={1.5} />
            <ImageIcon className="w-5 h-5 text-black" strokeWidth={1.5} />
          </div>
          
          <motion.button whileTap={{ scale: 0.9 }}>
            <Heart className="w-7 h-7 text-black" strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
