"use client"

import { useState } from "react"
import { Search, Volume2, VolumeX } from "lucide-react"

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {/* Background Video (Darkened) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] object-cover -translate-x-1/2 -translate-y-1/2 opacity-30"
          poster="https://images.unsplash.com/photo-1540039155732-d682121ae433?q=80&w=2574&auto=format&fit=crop"
        >
          <source src="/Cinematic_Gen_Z_Fest_DJ_Night_Video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 mt-16 max-w-4xl mx-auto w-full">
        
        {/* Main Headline */}
        <div className="inline-flex items-center mb-8 px-3 py-1 rounded-full border border-[#333] bg-[#0a0a0a] text-xs font-medium tracking-wide text-[#aaa]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-cyan)] mr-2"></span>
          LIVE IN NCR
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1]">
          <span className="block text-white">Discover</span>
          <span className="block text-[#fff]">The Scene.</span>
        </h1>
        
        <p className="text-[#888] text-base md:text-lg font-normal mb-12 max-w-xl mx-auto">
          The ultimate platform to find, share, and hype the best college fests, DJ nights, and concerts in Delhi NCR.
        </p>

        {/* Minimalist Search Bar */}
        <div className="relative max-w-xl mx-auto w-full group">
          <div className="relative flex items-center bg-[#0a0a0a] rounded-xl border border-[#333] focus-within:border-[#666] transition-all p-1.5 shadow-2xl">
            <Search className="w-5 h-5 text-[#666] ml-4 hidden sm:block" />
            <input 
              type="text"
              placeholder="Search fests, colleges, or vibes..."
              className="w-full bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-[#555] font-medium text-sm focus:ring-0"
            />
            <button className="bg-white text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-all text-sm">
              Explore
            </button>
          </div>
        </div>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <span className="text-xs font-semibold text-[#555] uppercase tracking-wider mr-2">Trending:</span>
          {["EDM Nights", "Hackathons", "Cultural Fests", "Fashion Shows"].map((pill) => (
            <button key={pill} className="text-[11px] md:text-xs font-medium px-4 py-1.5 rounded-full border border-[#222] bg-[#0a0a0a] hover:bg-[#111] hover:text-white text-[#888] transition-all">
              {pill}
            </button>
          ))}
        </div>

      </div>

      {/* Mute/Unmute toggle */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-30 p-3 rounded-full bg-[#0a0a0a] hover:bg-[#111] border border-[#222] text-[#888] transition-all"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4 text-white" />
        )}
      </button>
    </div>
  )
}
