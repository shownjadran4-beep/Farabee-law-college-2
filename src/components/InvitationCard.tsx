import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import FarabeeMonogram from './FarabeeMonogram';

interface InvitationCardProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

// Classical gold corner filigree ornament, matching the user's high-end photo design exactly
function CornerOrnament({ rotationClass = "" }: { rotationClass?: string }) {
  return (
    <div className={`absolute w-12 h-12 md:w-16 md:h-16 text-amber-400/80 pointer-events-none drop-shadow-[0_1px_4px_rgba(212,175,55,0.4)] ${rotationClass}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-current fill-none"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Fine background arc guidelines for vintage look */}
        <path d="M 12,85 C 12,50 50,12 85,12" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.2" />
        <path d="M 14,75 C 14,35 35,14 75,14" strokeWidth="1" opacity="0.4" />
        
        {/* Main corner loop scrollwork */}
        <path d="M 12,12 Q 28,12 28,28 Q 28,42 14,32 C 8,26 12,16 20,18 C 28,20 26,30 18,34" />
        
        {/* Leaf wings */}
        <path d="M 12,38 C 16,36 20,36 23,40 Q 16,46 12,38 Z" fill="currentColor" opacity="0.1" />
        <path d="M 38,12 C 36,16 36,20 40,23 Q 46,16 38,12 Z" fill="currentColor" opacity="0.1" />
        
        {/* Accent spirals and vintage curls */}
        <path d="M 28,28 Q 40,28 45,35 Q 40,42 32,36" />
        <path d="M 28,28 Q 28,40 35,45 Q 42,40 36,32" />
        
        {/* Delicate golden dots */}
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="52" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="52" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}

// Background candle flame with warm organic flickering
function CandleFlame() {
  return (
    <div className="relative w-4 h-12 flex flex-col items-center">
      {/* Blue base of flame */}
      <div className="absolute bottom-0 w-2 h-2 bg-blue-500/50 rounded-full blur-[1px]" />
      {/* Outer soft warm glow */}
      <motion.div
        className="absolute bottom-1 w-8 h-12 bg-amber-500/30 rounded-full blur-[10px]"
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          opacity: [0.5, 0.75, 0.45, 0.7, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Central bright flame body */}
      <motion.div
        className="absolute bottom-1 w-3.5 h-9 bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 rounded-full blur-[0.5px]"
        style={{ transformOrigin: "bottom center" }}
        animate={{
          scaleY: [1, 1.25, 0.85, 1.15, 1],
          scaleX: [1, 0.85, 1.1, 0.9, 1],
          rotate: [-1.5, 2, -2, 1.5, -1.5],
          skewX: [-1, 1.5, -1.2, 0.6, -1],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default function InvitationCard({ isOpen, setIsOpen }: InvitationCardProps) {
  return (
    <div className={`w-full min-h-[calc(100vh-80px)] py-12 px-4 md:px-8 flex flex-col items-center justify-center relative ${isOpen ? 'overflow-y-auto' : 'overflow-hidden'} scroll-smooth`}>
      
      {/* ================= RICH CINEMATIC PRESENTATION ENVIRONMENT ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Soft radial table spotlight behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[200px]" />
        
        {/* Giant glowing candle-like ambient lights */}
        <div className="absolute top-[10%] left-[8%] w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[8%] w-[450px] h-[450px] bg-yellow-600/5 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Realistic Interactive Candle Group 1 (Left Background) */}
        <div className="absolute bottom-[15%] left-[8%] hidden xl:flex flex-col items-center opacity-40 hover:opacity-60 transition-opacity duration-500">
          <CandleFlame />
          {/* Wax Candle Body */}
          <div className="w-6 h-32 bg-gradient-to-r from-amber-950/90 via-[#120a03]/80 to-amber-950/90 rounded-t-md shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-t border-amber-400/20" />
          <div className="w-10 h-2 bg-black/70 rounded-full blur-[1.5px] mt-1" />
        </div>

        {/* Realistic Interactive Candle Group 2 (Right Background) */}
        <div className="absolute bottom-[22%] right-[8%] hidden xl:flex flex-col items-center opacity-30 hover:opacity-50 transition-opacity duration-500">
          <CandleFlame />
          {/* Wax Candle Body */}
          <div className="w-7 h-44 bg-gradient-to-r from-amber-950/90 via-[#120a03]/80 to-amber-950/90 rounded-t-md shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-t border-amber-400/20" />
          <div className="w-12 h-2.5 bg-black/70 rounded-full blur-[1.5px] mt-1" />
        </div>

        {/* Golden floating luxury sparkles / glitter dust */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-b from-amber-200 to-yellow-500 blur-[0.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -80, -10],
              x: [-10, 10, -10],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.8, 1.25, 0.8]
            }}
            transition={{
              duration: 7 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Gold beads and luxury glitter sprinkled on the dark table at the bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-5xl flex justify-between px-12 opacity-35">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-yellow-300 via-amber-500 to-amber-800 shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
              style={{
                transform: `translateY(${Math.sin(i) * 10}px) scale(${0.8 + Math.random() * 0.5})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP VIEW: SEAMLESS 3-PANEL 3D UNFOLDING BOOKLET ================= */}
      <div className="hidden lg:flex w-full max-w-6xl justify-center items-center relative z-10 py-12 my-auto min-h-[740px] perspective-[2000px]">
        
        <div className="flex items-stretch justify-center relative w-full" style={{ transformStyle: "preserve-3d" }}>
          
          {/* 1. LEFT PANEL (Poetry & Legacy) - Connected to Middle Panel left edge */}
          <motion.div
            initial={false}
            animate={isOpen ? {
              rotateY: 0,
              opacity: 1,
              x: 0,
              z: 0,
            } : {
              rotateY: 100, // closed / folded behind
              opacity: 0,
              x: 180, // tucked in behind
              z: -100,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 13, mass: 1.1 }}
            style={{
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
            className="w-[320px] bg-[#0a1220]/95 border border-amber-500/20 rounded-l-xl p-8 flex flex-col justify-between items-center text-center shadow-[-20px_20px_45px_rgba(0,0,0,0.7)] relative overflow-hidden h-[660px] my-auto origin-right z-10"
          >
            {/* Inner Gold Border */}
            <div className="absolute inset-4 border border-amber-500/15 rounded pointer-events-none">
              <div className="absolute inset-0.5 border border-amber-500/5" />
            </div>

            {/* Gold Filigree Corners */}
            <CornerOrnament rotationClass="top-2 left-2 rotate-0" />
            <CornerOrnament rotationClass="top-2 right-2 rotate-90" />
            <CornerOrnament rotationClass="bottom-2 left-2 -rotate-90" />
            <CornerOrnament rotationClass="bottom-2 right-2 rotate-180" />

            {/* Top Emblem */}
            <div className="mt-6 flex flex-col items-center">
              <span className="text-amber-400 text-3xl drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">⚖️</span>
              <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mt-3.5" />
            </div>

            {/* Legacy Wording */}
            <div className="my-auto px-2 z-10">
              <p className="font-serif italic text-amber-300 text-xl leading-relaxed tracking-wide">
                &ldquo;Every ending has a new beginning.&rdquo;
              </p>
              <p className="font-serif text-slate-300 text-sm leading-relaxed mt-6 font-light max-w-[260px] mx-auto">
                As we close this chapter of our law college life, let&apos;s celebrate the memories, the lessons, and the journey we shared.
              </p>
              <p className="font-script text-amber-400 text-2xl mt-6 tracking-wider">
                Together we leave as classmates, forever we remain as friends.
              </p>
            </div>

            {/* Bottom laurel Symbol */}
            <div className="mb-6 flex flex-col items-center">
              <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-3.5" />
              <span className="text-amber-500/40 text-2xl">🍃 ⚖️ 🍃</span>
            </div>
          </motion.div>


          {/* 2. MIDDLE PANEL (Main Invitation Details) - Sits in the Center */}
          <div
            className="w-[450px] bg-[#08101e] border-y-2 border-x border-amber-500/35 relative overflow-hidden h-[700px] shadow-[0_25px_60px_rgba(212,175,55,0.18)] z-10 flex flex-col justify-between p-8 text-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Corner filigree corners */}
            <div className="absolute top-5 left-5 w-5 h-5 border-t border-l border-amber-500/25 rounded-tl-sm" />
            <div className="absolute top-5 right-5 w-5 h-5 border-t border-r border-amber-500/25 rounded-tr-sm" />
            <div className="absolute bottom-5 left-5 w-5 h-5 border-b border-l border-amber-500/25 rounded-bl-sm" />
            <div className="absolute bottom-5 right-5 w-5 h-5 border-b border-r border-amber-500/25 rounded-br-sm" />

            {/* Silk ribbons */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
              <div className="absolute top-[-24px] right-[-24px] w-24 h-12 bg-amber-500/10 rotate-45 border-b border-amber-400/30" />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none overflow-hidden">
              <div className="absolute bottom-[-24px] left-[-24px] w-24 h-12 bg-amber-500/10 rotate-45 border-t border-amber-400/30" />
            </div>

            {/* Classical dual inner borders */}
            <div className="absolute inset-4 border border-amber-500/20 pointer-events-none rounded">
              <div className="absolute inset-0.5 border border-amber-500/5" />
            </div>

            {/* Crest & Header */}
            <div className="mt-3 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/5 border border-amber-500/25 rounded-full mb-3 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <span className="text-amber-400 text-xl">🎓</span>
              </div>
              <h1 className="font-cinzel text-amber-200 text-base font-bold tracking-[0.24em] leading-tight">
                FARABEE LAW COLLEGE
              </h1>
              <p className="text-[8px] font-sans tracking-[0.2em] text-slate-400 uppercase font-medium mt-1">
                Affiliated with University of the Punjab
              </p>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mt-3" />
            </div>

            {/* Main content details */}
            <div className="my-1 z-10">
              <p className="font-cinzel text-[8.5px] tracking-[0.28em] text-amber-400/80 uppercase font-medium">
                Cordially Invites You To
              </p>
              
              <h2 className="font-script text-gold-shimmer text-6xl my-2.5 leading-tight font-medium">
                Farewell Party
              </h2>
              
              <p className="font-cinzel text-[8px] tracking-[0.22em] text-slate-400 uppercase">
                In Honour of
              </p>
              
              <h3 className="font-cinzel text-amber-400 text-3xl font-extrabold tracking-[0.16em] mt-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                LLB PART 5
              </h3>
              
              <p className="font-cinzel text-xs tracking-[0.28em] text-amber-200/60 mt-1.5 font-semibold">
                SESSION 2021-2026
              </p>
            </div>

            {/* Information Rows */}
            <div className="w-full space-y-3 px-1 z-10">
              
              {/* Date Card */}
              <div className="flex items-center gap-3.5 bg-[#050b14]/80 border border-amber-500/10 p-2.5 rounded-lg shadow-inner">
                <div className="p-2 bg-amber-500/5 border border-amber-500/15 rounded text-amber-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[7.5px] font-sans tracking-[0.15em] text-slate-500 uppercase font-semibold">Date & Day</p>
                  <p className="font-cinzel text-xs text-amber-200 font-bold tracking-wider mt-0.5">25 JULY 2026, SATURDAY</p>
                </div>
              </div>

              {/* Time Card (Updated per instructions: no specific time, just inform soon) */}
              <div className="flex items-center gap-3.5 bg-[#050b14]/80 border border-amber-500/10 p-2.5 rounded-lg shadow-inner">
                <div className="p-2 bg-amber-500/5 border border-amber-500/15 rounded text-amber-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[7.5px] font-sans tracking-[0.15em] text-slate-500 uppercase font-semibold">Scheduled Time</p>
                  <p className="font-cinzel text-xs text-amber-200 font-bold tracking-wider mt-0.5 uppercase">
                    Time will be informed soon
                  </p>
                </div>
              </div>

              {/* Venue Card */}
              <div className="flex items-center gap-3.5 bg-[#050b14]/80 border border-amber-500/10 p-2.5 rounded-lg shadow-inner">
                <div className="p-2 bg-amber-500/5 border border-amber-500/15 rounded text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[7.5px] font-sans tracking-[0.15em] text-slate-500 uppercase font-semibold">Event Venue</p>
                  <p className="font-cinzel text-xs text-amber-200 font-bold tracking-wider mt-0.5">GYMKHANA HAFIZABAD</p>
                  <p className="text-[8px] text-slate-400 font-light mt-0.5">Hafizabad, Punjab</p>
                </div>
              </div>

            </div>

            {/* Bottom Quote */}
            <div className="mb-2 mt-1 z-10">
              <p className="font-serif italic text-[10px] text-slate-400 max-w-[260px] mx-auto leading-relaxed">
                &ldquo;Let&apos;s celebrate the end of a beautiful journey and the beginning of a new chapter.&rdquo;
              </p>
            </div>
          </div>


          {/* 3. RIGHT PANEL (Monogram & Affiliation) - Connected to Middle Panel right edge */}
          <motion.div
            initial={false}
            animate={isOpen ? {
              rotateY: 0,
              opacity: 1,
              x: 0,
              z: 0,
            } : {
              rotateY: -100, // closed / folded behind
              opacity: 0,
              x: -180, // tucked in behind
              z: -100,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 13, mass: 1.1 }}
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
            className="w-[320px] bg-[#0a1220]/95 border border-amber-500/20 rounded-r-xl p-8 flex flex-col justify-between items-center text-center shadow-[20px_20px_45px_rgba(0,0,0,0.7)] relative overflow-hidden h-[660px] my-auto origin-left z-10"
          >
            {/* Inner Gold Border */}
            <div className="absolute inset-4 border border-amber-500/15 rounded pointer-events-none">
              <div className="absolute inset-0.5 border border-amber-500/5" />
            </div>

            {/* Gold Filigree Corners */}
            <CornerOrnament rotationClass="top-2 left-2 rotate-0" />
            <CornerOrnament rotationClass="top-2 right-2 rotate-90" />
            <CornerOrnament rotationClass="bottom-2 left-2 -rotate-90" />
            <CornerOrnament rotationClass="bottom-2 right-2 rotate-180" />

            {/* Top divider */}
            <div className="mt-6 self-center w-2/3 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            {/* Center Monogram Emblem */}
            <div className="my-auto flex flex-col items-center">
              <FarabeeMonogram size={190} glow={true} />
              <h4 className="font-cinzel text-amber-200 text-xs font-bold tracking-[0.2em] mt-5 leading-tight uppercase">
                FARABEE LAW COLLEGE
              </h4>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                HAFIZABAD
              </span>
            </div>

            {/* Footer blocks */}
            <div className="mb-6 text-center z-10">
              <span className="text-amber-500/60 text-[9.5px] tracking-widest block font-cinzel">CLASS OF 2021-2026</span>
              <div className="w-10 h-[1px] bg-amber-500/20 mx-auto my-1.5" />
              <span className="text-[8.5px] font-sans text-slate-500 tracking-wider font-light uppercase">JUSTICE BRINGS HARMONY</span>
            </div>
          </motion.div>


          {/* 4. REAL COVER FRONT CARD - Sitting directly on top of Middle Panel, swinging left with incredible 3D realistic hinge */}
          <motion.div
            onClick={setIsOpen}
            initial={false}
            animate={isOpen ? {
              rotateY: -140,
              x: "-8%",
              z: 60,
              opacity: 0.1, // fade out slightly to reveal left panel text underneath
              pointerEvents: "none",
              boxShadow: "-10px 25px 40px rgba(0, 0, 0, 0.75)"
            } : {
              rotateY: 0,
              x: 0,
              z: 120, // keep high in 3D stacking layers
              opacity: 1,
              pointerEvents: "auto",
              boxShadow: "0px 30px 65px rgba(0, 0, 0, 0.95), inset 0px 0px 45px rgba(0, 0, 0, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 40, damping: 13, mass: 1.1 }}
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden"
            }}
            className="absolute left-[355px] top-[10px] w-[450px] h-[700px] bg-[#050f24] border-2 border-amber-500/40 rounded-xl p-8 flex flex-col justify-between items-center text-center select-none z-30 group cursor-pointer"
          >
            {/* Silk corner fold accents */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none overflow-hidden rounded-tr-xl">
              <div className="absolute top-[-30px] right-[-30px] w-[110px] h-[45px] bg-amber-500/10 rotate-45 border-b border-amber-400/30" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none overflow-hidden rounded-bl-xl">
              <div className="absolute bottom-[-30px] left-[-30px] w-[110px] h-[45px] bg-amber-500/10 rotate-45 border-t border-amber-400/30" />
            </div>

            {/* Luxury shimmers running diagonally across cover */}
            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
              <motion.div
                className="absolute inset-[-150%] bg-gradient-to-tr from-transparent via-amber-400/12 to-transparent"
                animate={{
                  x: ['-50%', '50%'],
                  y: ['-50%', '50%']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 4
                }}
              />
            </div>

            {/* Double gold line classical borders */}
            <div className="absolute inset-4 border border-amber-500/25 pointer-events-none rounded-lg">
              <div className="absolute inset-0.5 border border-amber-500/5 rounded-md" />
              
              {/* Double Line Corner Flourishes */}
              <CornerOrnament rotationClass="top-2 left-2 rotate-0" />
              <CornerOrnament rotationClass="top-2 right-2 rotate-90" />
              <CornerOrnament rotationClass="bottom-2 left-2 -rotate-90" />
              <CornerOrnament rotationClass="bottom-2 right-2 rotate-180" />
            </div>

            {/* Card header */}
            <div className="mt-6 z-10 flex flex-col items-center">
              <span className="font-sans text-[8.5px] tracking-[0.3em] text-amber-400/80 uppercase font-semibold">
                OFFICIAL INVITATION CARD
              </span>
              <div className="w-14 h-[1px] bg-amber-500/35 mt-2" />
            </div>

            {/* Glowing circular seal monogram, matching user's reference image exactly */}
            <div className="relative my-auto flex flex-col items-center z-10 group-hover:scale-[1.03] transition-transform duration-500">
              <div className="absolute inset-[-30px] bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500 pointer-events-none" />
              
              <FarabeeMonogram size={215} glow={true} />
              
              <h1 className="font-cinzel text-amber-200 text-sm md:text-base font-bold tracking-[0.24em] mt-6 leading-tight uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                FARABEE LAW COLLEGE
              </h1>
              <p className="text-[8.5px] font-mono tracking-[0.18em] text-slate-400 uppercase mt-1 font-light">
                HAFIZABAD
              </p>
            </div>

            {/* Interactive Golden Wax Seal Latch */}
            <div className="my-2 z-20 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.12, rotate: 4 }}
                whileTap={{ scale: 0.93 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffe58f] via-[#d4af37] to-[#8c6b12] p-[1.5px] shadow-[0_8px_20px_rgba(212,175,55,0.4)] flex items-center justify-center relative cursor-pointer"
              >
                <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-md animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 rounded-full bg-amber-400/10 scale-125 pointer-events-none" />
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#9a721d] via-[#b38728] to-[#fbf5b7] flex flex-col items-center justify-center shadow-[inset_0_1.5px_4px_rgba(255,255,255,0.4)]">
                  <span className="text-amber-100 text-lg drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.6)]">⚖️</span>
                  <span className="text-[6px] font-bold tracking-[0.14em] text-amber-200 mt-0.5">OPEN</span>
                </div>
                {/* Real ribbon hanging beneath seal */}
                <div className="absolute -bottom-3 w-4 h-5 bg-gradient-to-b from-[#b38728] to-[#8c6b12] -z-10 shadow-sm transform rotate-12 rounded-b-sm" />
                <div className="absolute -bottom-4.5 w-3.5 h-5 bg-gradient-to-b from-[#aa771c] to-[#5b3e0c] -z-10 shadow-sm transform -rotate-12 rounded-b-sm" />
              </motion.div>
            </div>

            {/* Footer with graduation info */}
            <div className="mb-6 z-10 flex flex-col items-center">
              <span className="font-cinzel text-[10.5px] text-amber-400/90 tracking-[0.26em] font-medium uppercase">
                LLB PART 5 • CLASS OF 2021-2026
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mt-2.5" />
            </div>

          </motion.div>

        </div>

      </div>


      {/* ================= MOBILE VIEW: GRACEFUL STAGGERED FADE-IN CARD CASCADE ================= */}
      <div className="lg:hidden w-full max-w-[430px] relative z-10 py-6 min-h-[75vh] flex flex-col justify-start">
        
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Closed Mobile Cover Stage */
            <motion.div
              key="mobile-cover"
              initial={{ opacity: 1, scale: 0.98 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full flex justify-center items-center py-6"
            >
              <div
                onClick={setIsOpen}
                className="w-full bg-[#050f24] border-2 border-amber-500/35 rounded-xl p-6 flex flex-col justify-between items-center text-center select-none shadow-[0_25px_50px_rgba(0,0,0,0.8),inset_0_0_35px_rgba(0,0,0,0.5)] h-[620px] relative overflow-hidden active:scale-95 transition-transform duration-300 cursor-pointer"
              >
                {/* Thin inner borders */}
                <div className="absolute inset-3 border border-amber-500/20 pointer-events-none rounded-lg" />
                
                {/* Gold corner filigrees */}
                <CornerOrnament rotationClass="top-1 left-1 scale-75 rotate-0" />
                <CornerOrnament rotationClass="top-1 right-1 scale-75 rotate-90" />
                <CornerOrnament rotationClass="bottom-1 left-1 scale-75 -rotate-90" />
                <CornerOrnament rotationClass="bottom-1 right-1 scale-75 rotate-180" />

                <div className="mt-3 z-10 flex flex-col items-center">
                  <span className="font-sans text-[7.5px] tracking-[0.26em] text-amber-400/80 uppercase font-semibold">
                    OFFICIAL INVITATION CARD
                  </span>
                  <div className="w-12 h-[1px] bg-amber-500/30 mt-1.5" />
                </div>

                <div className="my-auto flex flex-col items-center z-10">
                  <FarabeeMonogram size={175} glow={true} />
                  <h1 className="font-cinzel text-amber-200 text-xs font-bold tracking-[0.2em] mt-5 leading-tight uppercase">
                    FARABEE LAW COLLEGE
                  </h1>
                  <p className="text-[8px] font-mono tracking-[0.16em] text-slate-400 uppercase mt-1">
                    HAFIZABAD
                  </p>
                </div>

                {/* Interactive Golden Wax Seal Latch */}
                <div className="my-1.5 z-20 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    whileTap={{ scale: 0.94 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ffe58f] via-[#d4af37] to-[#8c6b12] p-[1px] shadow-[0_6px_15px_rgba(212,175,55,0.4)] flex items-center justify-center relative cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-sm animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#9a721d] via-[#b38728] to-[#fbf5b7] flex flex-col items-center justify-center shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)]">
                      <span className="text-amber-100 text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">⚖️</span>
                      <span className="text-[5.5px] font-bold tracking-[0.14em] text-amber-200 mt-0.5">OPEN</span>
                    </div>
                    {/* Ribbon Backing */}
                    <div className="absolute -bottom-2 w-3.5 h-4 bg-gradient-to-b from-[#b38728] to-[#8c6b12] -z-10 shadow-sm transform rotate-12 rounded-b-sm" />
                    <div className="absolute -bottom-3.5 w-3 h-4 bg-gradient-to-b from-[#aa771c] to-[#5b3e0c] -z-10 shadow-sm transform -rotate-12 rounded-b-sm" />
                  </motion.div>
                </div>

                <div className="mb-4 z-10 flex flex-col items-center">
                  <span className="font-cinzel text-[9.5px] text-amber-400/90 tracking-[0.22em] font-medium uppercase">
                    LLB PART 5 • CLASS OF 2021-2026
                  </span>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mt-2" />
                </div>
              </div>
            </motion.div>
          ) : (
            /* Opened Mobile Card Cascade (All detailed panels fade in beautifully on a scrollable flow) */
            <motion.div
              key="mobile-contents"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full space-y-12 py-4"
            >
              {/* PAGE 1: MAIN DETAILS CARD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[#0a1220] border-2 border-amber-500/30 rounded-xl p-6 flex flex-col justify-between items-center text-center shadow-[0_20px_45px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[600px]"
              >
                <div className="absolute inset-3 border border-amber-500/15 pointer-events-none rounded-lg" />
                
                {/* Shield Logo & Header */}
                <div className="mt-3 flex flex-col items-center">
                  <div className="w-11 h-11 flex items-center justify-center bg-amber-500/5 border border-amber-500/25 rounded-full mb-2.5">
                    <span className="text-amber-400 text-lg">🎓</span>
                  </div>
                  <h1 className="font-cinzel text-amber-200 text-sm font-bold tracking-[0.18em] leading-tight uppercase">
                    FARABEE LAW COLLEGE
                  </h1>
                  <p className="text-[7.5px] font-sans tracking-[0.14em] text-slate-400 uppercase font-medium mt-1">
                    Affiliated with University of the Punjab
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-2" />
                </div>

                {/* Body Content */}
                <div className="my-4">
                  <p className="font-cinzel text-[7.5px] tracking-[0.2em] text-amber-400/80 uppercase font-medium">
                    Cordially Invites You To
                  </p>
                  
                  <h2 className="font-script text-gold-shimmer text-5xl my-2 leading-tight font-medium">
                    Farewell Party
                  </h2>
                  
                  <p className="font-cinzel text-[7.5px] tracking-[0.16em] text-slate-400 uppercase">
                    In Honour of
                  </p>
                  
                  <h3 className="font-cinzel text-amber-400 text-2xl font-extrabold tracking-[0.1em] mt-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    LLB PART 5
                  </h3>
                  
                  <p className="font-cinzel text-[9.5px] tracking-[0.2em] text-amber-200/60 mt-0.5 font-semibold">
                    SESSION 2021-2026
                  </p>
                </div>

                {/* Details Grid */}
                <div className="w-full space-y-3 px-1">
                  
                  {/* Date */}
                  <div className="flex items-center gap-3 bg-[#050b14]/85 border border-amber-500/10 p-2.5 rounded-lg">
                    <div className="p-1.5 bg-amber-500/5 border border-amber-500/15 rounded text-amber-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] font-sans tracking-[0.12em] text-slate-500 uppercase font-semibold">Date & Day</p>
                      <p className="font-cinzel text-[11px] text-amber-200 font-bold tracking-wider mt-0.5">25 JULY 2026, SATURDAY</p>
                    </div>
                  </div>

                  {/* Time (Updated per instructions: no specific time, just inform soon) */}
                  <div className="flex items-center gap-3 bg-[#050b14]/85 border border-amber-500/10 p-2.5 rounded-lg">
                    <div className="p-1.5 bg-amber-500/5 border border-amber-500/15 rounded text-amber-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] font-sans tracking-[0.12em] text-slate-500 uppercase font-semibold">Scheduled Time</p>
                      <p className="font-cinzel text-[11px] text-amber-200 font-bold tracking-wider mt-0.5 uppercase">
                        Time will be informed soon
                      </p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-center gap-3 bg-[#050b14]/85 border border-amber-500/10 p-2.5 rounded-lg">
                    <div className="p-1.5 bg-amber-500/5 border border-amber-500/15 rounded text-amber-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] font-sans tracking-[0.12em] text-slate-500 uppercase font-semibold">Event Venue</p>
                      <p className="font-cinzel text-[11px] text-amber-200 font-bold tracking-wider mt-0.5">GYMKHANA HAFIZABAD</p>
                      <p className="text-[7.5px] text-slate-400 font-light mt-0.5">Hafizabad, Punjab</p>
                    </div>
                  </div>

                </div>

                {/* Bottom Quote */}
                <div className="mb-2 mt-3">
                  <p className="font-serif italic text-[9px] text-slate-400 max-w-[240px] mx-auto leading-relaxed">
                    &ldquo;Let&apos;s celebrate the end of a beautiful journey and the beginning of a new chapter.&rdquo;
                  </p>
                </div>
              </motion.div>

              {/* Scroll down indicator for mobile */}
              <div className="flex flex-col items-center justify-center py-2 text-amber-400/40">
                <span className="text-[8px] font-cinzel tracking-[0.2em] uppercase">Scroll to view legacy</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-xs mt-1"
                >
                  ▼
                </motion.span>
              </div>

              {/* PAGE 2: LEGACY & POETRY CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full bg-[#0a1220]/95 border border-amber-500/20 rounded-xl p-6 flex flex-col justify-between items-center text-center shadow-[0_20px_45px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[480px]"
              >
                <div className="absolute inset-3 border border-amber-500/15 rounded-lg pointer-events-none" />
                
                {/* Scales Symbol */}
                <div className="mt-5 flex flex-col items-center">
                  <span className="text-amber-400 text-2xl">⚖️</span>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mt-2.5" />
                </div>

                {/* Poetry */}
                <div className="my-auto px-1">
                  <p className="font-serif italic text-amber-300 text-lg leading-relaxed tracking-wide">
                    &ldquo;Every ending has a new beginning.&rdquo;
                  </p>
                  <p className="font-serif text-slate-300 text-xs leading-relaxed mt-5 font-light max-w-xs mx-auto">
                    As we close this chapter of our law college life, let&apos;s celebrate the memories, the lessons, and the journey we shared.
                  </p>
                  <p className="font-script text-amber-400 text-xl mt-5 tracking-wider">
                    Together we leave as classmates, forever we remain as friends.
                  </p>
                </div>

                {/* Laurel wreath */}
                <div className="mb-5 flex flex-col items-center">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-2.5" />
                  <span className="text-amber-500/40 text-xl">🍃 ⚖️ 🍃</span>
                </div>
              </motion.div>

              {/* PAGE 3: DETAILED MONOGRAM SEAL CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full bg-[#0a1220]/95 border border-amber-500/20 rounded-xl p-6 flex flex-col justify-between items-center text-center shadow-[0_20px_45px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-[440px]"
              >
                <div className="absolute inset-3 border border-amber-500/15 rounded-lg pointer-events-none" />

                <div className="mt-4 self-center w-2/3 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

                <div className="my-auto flex flex-col items-center">
                  <FarabeeMonogram size={150} glow={true} />
                  <h4 className="font-cinzel text-amber-200 text-xs font-bold tracking-[0.18em] mt-5 leading-tight uppercase">
                    FARABEE LAW COLLEGE
                  </h4>
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                    HAFIZABAD
                  </span>
                </div>

                <div className="mb-5 text-center">
                  <span className="text-amber-500/50 text-[9px] tracking-widest block font-cinzel">CLASS OF 2021-2026</span>
                  <span className="text-[7.5px] font-sans text-slate-500 tracking-wider font-light mt-0.5 block uppercase">JUSTICE BRINGS HARMONY</span>
                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ================= TOUCH HELPERS / USER PROMPTS AT BOTTOM ================= */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8 text-center z-30 pointer-events-none flex flex-col items-center select-none"
          >
            {/* Fine luxury emblem line */}
            <div className="w-8 h-[1px] bg-amber-500/45 mb-2.5" />
            <p className="font-cinzel text-amber-200/80 tracking-[0.28em] text-[9.5px] md:text-xs font-semibold uppercase">
              JUSTICE BRINGS HARMONY
            </p>
            
            {/* Elegant touch/click badge with beautiful bouncing motion */}
            <div className="flex items-center gap-2.5 mt-3.5 bg-amber-500/5 border border-amber-500/15 px-4.5 py-2 rounded-full backdrop-blur-md shadow-lg animate-bounce">
              <span className="text-amber-400 text-xs">✨</span>
              <p className="font-serif italic text-amber-300 text-xs md:text-sm font-light">
                Click Card Cover to Open Invitation
              </p>
              <span className="text-amber-400 text-xs">✨</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury footer copyright row */}
      <div className="relative z-10 py-6 text-center select-none w-full border-t border-amber-500/10 mt-12">
        <span className="text-[8.5px] font-mono text-slate-600 tracking-widest uppercase">
          © Class of 2021-2026 LLB Part 5 • Farabee Law College
        </span>
      </div>

    </div>
  );
}
