"use client"

import { useState } from "react"
import { Search, Volume2, VolumeX } from "lucide-react"

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {/* We use a reliable placeholder video here. The user can swap this out with their own concert/party video. */}
        <video 
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] object-cover -translate-x-1/2 -translate-y-1/2 opacity-60"
          poster="https://images.unsplash.com/photo-1540039155732-d682121ae433?q=80&w=2574&auto=format&fit=crop"
        >
          <source src="/Cinematic_Gen_Z_Fest_DJ_Night_Video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays to make text readable and add the darker/neon vibe */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505] z-10" />
        <div className="absolute inset-0 bg-[var(--color-neon-purple)]/5 mix-blend-overlay z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 mt-16 max-w-4xl mx-auto w-full">
        
        {/* Main Headline */}
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-semibold tracking-wider text-white shadow-[0_0_15px_rgba(5,217,232,0.2)]">
          <span className="text-[var(--color-neon-cyan)] mr-2">●</span>LIVE IN NCR
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
          <span className="block text-white text-glow">DISCOVER</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-pink)] to-[var(--color-neon-purple)] drop-shadow-[0_0_15px_rgba(255,42,109,0.5)]">
            THE SCENE
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
          The ultimate platform to find, share, and hype the best college fests, DJ nights, and concerts in Delhi NCR.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto w-full group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-pink)] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative flex items-center bg-[#0d0d0d] rounded-full border border-white/10 p-2 glass-dark">
            <Search className="w-6 h-6 text-gray-400 ml-4 hidden sm:block" />
            <input 
              type="text"
              placeholder="Search fests, colleges, or vibes..."
              className="w-full bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-gray-500 font-medium text-lg focus:ring-0"
            />
            <button className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-all text-sm md:text-base">
              Explore
            </button>
          </div>
        </div>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2">Trending:</span>
          {["EDM Nights", "Hackathons", "Cultural Fests", "Fashion Shows"].map((pill) => (
            <button key={pill} className="text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)] hover:shadow-[0_0_10px_rgba(5,217,232,0.3)] transition-all">
              {pill}
            </button>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 opacity-50 animate-bounce">
        <span className="text-xs font-bold uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      {/* Mute/Unmute toggle */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-30 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] group"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 group-hover:text-[var(--color-neon-pink)] transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 group-hover:text-[var(--color-neon-cyan)] transition-colors" />
        )}
      </button>
    </div>
  )
}
