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
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />
      <HeroSection />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full border border-[#333] bg-[#0a0a0a] text-[10px] font-bold tracking-widest text-[#aaa] uppercase">
            Live Feed
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
            The Scene Right Now
          </h2>
        </div>

        <TabsFilter activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Event Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#555]">
            <p className="text-lg font-medium border border-[#222] bg-[#0a0a0a] inline-block px-8 py-4 rounded-xl">
              No fests found for this vibe right now.
            </p>
          </div>
        )}

        {/* Trending Campuses Section */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Trending Campuses</h2>
            <button className="text-[#888] text-sm hover:text-white transition-all font-medium">View all →</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['IIT Delhi', 'NSUT', 'DTU', 'NIFT'].map((campus, idx) => (
              <div key={campus} className="relative h-36 rounded-xl overflow-hidden bg-[#0a0a0a] border border-[#222] hover:border-[#444] transition-all group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-white font-bold text-lg leading-tight">{campus}</h4>
                  <p className="text-[#666] text-xs font-semibold mt-1">{12 + (idx * 5)} upcoming</p>
                </div>
                <div className="absolute top-3 right-3 z-20">
                  <span className={`w-2 h-2 rounded-full inline-block ${idx % 2 === 0 ? 'bg-[var(--color-neon-cyan)]' : 'bg-[var(--color-neon-pink)]'}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 mb-12 p-8 md:p-12 border border-[#222] rounded-2xl bg-[#0a0a0a] text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-neon-purple)]/10 blur-[80px] rounded-full"></div>
          <div className="relative z-10 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Join the Underground</h2>
            <p className="text-[#888] text-sm mb-8 leading-relaxed">Get exclusive invites, early bird tickets, and secret location reveals directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-[#050505] border border-[#333] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 text-white placeholder:text-[#555]"
              />
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all text-sm active:scale-[0.98]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Minimalism Footer */}
      <footer className="relative bg-[#050505] pt-16 pb-8 border-t border-[#111]">
        
        {/* Giant Hollow Text Marquee Background */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none flex z-0 opacity-5">
          <div className="animate-marquee-giant whitespace-nowrap flex text-[12rem] md:text-[20rem] font-black italic tracking-tighter">
            {[...Array(10)].map((_, i) => (
              <span 
                key={i} 
                className="mr-12 md:mr-24 text-white"
              >
                NCR SCENE
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left relative z-10">
          
          {/* Logo & Vibe */}
          <div>
            <span className="text-2xl font-black italic tracking-tighter flex items-center justify-center md:justify-start gap-1">
              <span className="text-white">NCR</span>
              <span className="text-[var(--color-neon-pink)]">SCENE</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-[#333] text-[#888] ml-2 tracking-widest uppercase">Live</span>
            </span>
            <p className="text-xs text-[#666] mt-4 leading-relaxed font-medium max-w-xs mx-auto md:mx-0">
              Curating the loudest nights, the most chaotic college fests, and the underground scenes of Delhi NCR.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-[10px] font-bold uppercase text-[#555] tracking-[0.2em] mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a href="#" className="p-2.5 bg-[#0a0a0a] border border-[#222] rounded-lg hover:bg-[#111] hover:border-[#444] text-[#888] hover:text-white transition-all">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-[#0a0a0a] border border-[#222] rounded-lg hover:bg-[#111] hover:border-[#444] text-[#888] hover:text-white transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-[#0a0a0a] border border-[#222] rounded-lg hover:bg-[#111] hover:border-[#444] text-[#888] hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-[#111] text-center px-6">
          <p className="text-[10px] text-[#555] font-semibold uppercase tracking-widest">
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
