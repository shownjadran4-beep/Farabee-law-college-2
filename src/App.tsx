import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import InvitationCard from './components/InvitationCard';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleOpenCard = () => {
    setIsOpen(true);
    setIsMuted(false); // Play gorgeous ambient music when card is opened
  };

  return (
    <main className={`min-h-screen bg-velvet text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden relative ${isOpen ? 'overflow-y-auto' : 'overflow-hidden no-scrollbar'}`}>
      
      {/* Background Soft ambient noise / overlay */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-[0.02] mix-blend-overlay pointer-events-none z-50" />

      {/* Floating Ambient Music Control (adds luxury sound feedback to the invitation) */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2.5 bg-[#0a1220]/80 border border-amber-500/20 rounded-full text-amber-400 hover:text-amber-200 hover:border-amber-400/50 transition-all shadow-lg backdrop-blur-md flex items-center justify-center cursor-pointer"
          title={isMuted ? "Play Ambient Music" : "Mute Music"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
        </button>
        {/* Hidden HTML Audio element for high fidelity soft harp/orchestral background */}
        {!isMuted && (
          <iframe
            src="https://www.youtube.com/embed/5_mS69gR_cQ?autoplay=1&loop=1&playlist=5_mS69gR_cQ&mute=0"
            className="hidden w-0 h-0"
            allow="autoplay"
          />
        )}
      </div>

      {/* Elegant Header branding - fades in beautifully when the card is unfolded */}
      {isOpen && (
        <header className="w-full py-5 px-6 md:px-8 bg-[#050b14]/85 border-b border-amber-500/10 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md select-none animate-fade-in">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 text-lg">⚖️</span>
            <span className="font-cinzel text-amber-200 tracking-[0.2em] text-xs font-bold">FARABEE LAW</span>
          </div>
          <span className="font-cinzel text-[9px] md:text-[10px] tracking-[0.15em] text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-bold">
            LLB PART 5 FAREWELL
          </span>
        </header>
      )}

      {/* Custom Classical Formal Invitation Card Design (Cohesive 3D Unfolding Stage) */}
      <InvitationCard isOpen={isOpen} setIsOpen={handleOpenCard} />

    </main>
  );
}
