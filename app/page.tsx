"use client"

import { useState } from "react"
import Navbar from "@/components/ui/Navbar"
import HeroSection from "@/components/ui/HeroSection"
import TabsFilter from "@/components/ui/TabsFilter"
import EventCard from "@/components/ui/EventCard"
import { Disc3, Headphones, Radio, Camera, MessageCircle, Globe } from "lucide-react"

// Mock Data
const MOCK_EVENTS = [
  {
    id: "1",
    title: "Neon Pulse DJ Night",
    college: "IIT Delhi",
    date: "Sat, Oct 14 • 8:00 PM",
    venue: "Main Ground",
    category: "paid" as const,
    price: 499,
    image: "https://images.unsplash.com/photo-1574391831460-1e5f8f553a15?q=80&w=2670&auto=format&fit=crop",
    tags: ["Music", "DJ", "EDM"],
    commentsCount: 124
  },
  {
    id: "2",
    title: "Synthwave Hackathon",
    college: "NSUT",
    date: "Fri, Oct 20 • 9:00 AM",
    venue: "CSE Block Alpha",
    category: "free" as const,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    tags: ["Tech", "24Hours", "Coding"],
    commentsCount: 45
  },
  {
    id: "3",
    title: "Rhythm & Bass Festival",
    college: "DTU",
    date: "Sun, Oct 22 • 5:00 PM",
    venue: "OAT",
    category: "free" as const,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2670&auto=format&fit=crop",
    tags: ["Concert", "Live", "Band"],
    commentsCount: 205
  },
  {
    id: "4",
    title: "Cyberpunk Fashion Walk",
    college: "NIFT Delhi",
    date: "Wed, Oct 25 • 7:00 PM",
    venue: "Auditorium",
    category: "paid" as const,
    price: 299,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tags: ["Fashion", "Ramp Walk", "Show"],
    commentsCount: 89
  },
  {
    id: "5",
    title: "Underground Rap Battle",
    college: "IIIT Delhi",
    date: "Fri, Nov 3 • 6:30 PM",
    venue: "Student Centre",
    category: "free" as const,
    image: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=2574&auto=format&fit=crop",
    tags: ["Music", "HipHop", "Battle"],
    commentsCount: 310
  },
  {
    id: "6",
    title: "Midnight Gaming Arena",
    college: "Amity University",
    date: "Sat, Nov 4 • 10:00 PM",
    venue: "Block J",
    category: "paid" as const,
    price: 150,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop",
    tags: ["Gaming", "Esports", "Valorant"],
    commentsCount: 22
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredEvents = MOCK_EVENTS.filter(event => {
    if (activeTab === "all") return true
    return event.category === activeTab
  })

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[var(--color-neon-pink)] selection:text-white">
      <Navbar />
      <HeroSection />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-blue-500 text-glow-cyan">Scene</span> Right Now
          </h2>
          <p className="text-gray-400 font-medium">Don't miss out on the craziest parties and events in NCR.</p>
        </div>

        <TabsFilter activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Event Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-2xl font-bold bg-white/5 inline-block px-8 py-4 rounded-2xl glass-dark">
              No fests found for this vibe right now.
            </p>
          </div>
        )}

      </div>

      {/* Crisp Light & DJ Themed Footer */}
      <footer className="relative bg-[#050505] pt-16 pb-8 overflow-hidden">
        
        {/* Animated Gradient Top Border */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-cyan)] to-[var(--color-neon-pink)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-white opacity-50 blur-[2px]"></div>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-gradient-to-b from-[var(--color-neon-cyan)]/10 to-transparent blur-3xl pointer-events-none"></div>

        {/* Giant Hollow Text Marquee Background */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none flex z-0 opacity-20">
          <div className="animate-marquee-giant whitespace-nowrap flex text-[12rem] md:text-[20rem] font-black italic tracking-tighter">
            {[...Array(10)].map((_, i) => (
              <span 
                key={i} 
                className="mr-12 md:mr-24 text-transparent" 
                style={{ WebkitTextStroke: `3px ${i % 2 === 0 ? 'var(--color-neon-cyan)' : 'var(--color-neon-pink)'}` }}
              >
                NCR SCENE
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
          
          {/* Logo & Vibe */}
          <div>
            <span className="text-3xl font-black italic tracking-tighter flex items-center justify-center md:justify-start gap-2">
              <span className="text-white text-glow">NCR</span>
              <span className="text-[var(--color-neon-pink)] text-glow-pink">SCENE</span>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-neon-cyan)]/30 text-[var(--color-neon-cyan)] ml-2">LIVE</span>
            </span>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed font-medium">
              Curating the loudest nights, the most chaotic college fests, and the underground scenes of Delhi NCR.
            </p>
          </div>

          {/* Equalizer Visual & Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-black uppercase text-gray-500 tracking-[0.2em] mb-4">Frequency</h4>
            <div className="flex items-end space-x-1 h-8 mb-6">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-gradient-to-t from-[var(--color-neon-cyan)] to-[var(--color-neon-pink)] rounded-t-sm"
                  style={{
                    height: `${20 + ((i * 37) % 80)}%`,
                    animation: `eq ${0.5 + ((i * 13) % 10) / 10}s ease-in-out infinite alternate delay-${i % 5}`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xs font-black uppercase text-gray-500 tracking-[0.2em] mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[var(--color-neon-pink)]/20 hover:border-[var(--color-neon-pink)] hover:text-[var(--color-neon-pink)] hover:shadow-[0_0_15px_rgba(255,42,109,0.4)] transition-all">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[var(--color-neon-cyan)]/20 hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)] hover:shadow-[0_0_15px_rgba(5,217,232,0.4)] transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-white/5 text-center px-6">
          <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} NCR Scene. Keep the baseline rolling.
          </p>
        </div>

        {/* Global Styles for Animations */}
        <style dangerouslySetInnerHTML={{__html:`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-giant {
            animation: marquee 60s linear infinite;
          }
          @keyframes eq {
            from { height: 20%; }
            to { height: 100%; }
          }
          .animate-spin-slow {
            animation: spin 4s linear infinite;
          }
          .delay-0 { animation-delay: 0s; }
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.2s; }
          .delay-3 { animation-delay: 0.3s; }
          .delay-4 { animation-delay: 0.4s; }
        `}} />
      </footer>
    </main>
  )
}
