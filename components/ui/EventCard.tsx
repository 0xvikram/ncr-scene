"use client"

import { Calendar, MapPin, MessageCircle, Heart } from "lucide-react"

type Event = {
  id: string
  title: string
  college: string
  date: string
  venue: string
  category: "free" | "paid"
  price?: number
  image: string
  tags: string[]
  commentsCount: number
}

export default function EventCard({ event }: { event: Event }) {
  const isFree = event.category === "free"

  return (
    <div className="group relative w-full rounded-xl overflow-hidden bg-[#050505] border border-[#222] hover:border-[#444] transition-all duration-300">
      
      <div className="relative h-full flex flex-col z-10 w-full overflow-hidden">
        
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden border-b border-[#222]">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
            {isFree ? (
              <span className="bg-[#050505]/90 backdrop-blur-md border border-[#333] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-cyan)]"></span>
                FREE
              </span>
            ) : (
              <span className="bg-[#050505]/90 backdrop-blur-md border border-[#333] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-pink)]"></span>
                ₹{event.price}
              </span>
            )}
          </div>
          <button className="absolute top-3 right-3 p-2 bg-[#050505]/80 backdrop-blur-md rounded-md text-[#888] hover:text-white border border-[#333] transition-all z-20">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col bg-[#050505]">
          <p className="text-[#888] text-[10px] font-bold uppercase tracking-widest mb-2">{event.college}</p>
          <h3 className="text-xl font-bold text-white mb-4 line-clamp-1 group-hover:text-gray-200 transition-colors tracking-tight">{event.title}</h3>
          
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center text-sm text-[#888]">
              <Calendar className="w-4 h-4 mr-3 text-[#555]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-[#888]">
              <MapPin className="w-4 h-4 mr-3 text-[#555]" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map(tag => (
              <span key={tag} className="text-[11px] font-medium text-[#666] bg-[#0a0a0a] px-2.5 py-1 rounded-md border border-[#222]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#222]">
            <button className="flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all bg-white text-black hover:bg-gray-200 active:scale-[0.98]">
              Register
            </button>
            <button className="ml-3 flex items-center justify-center p-2.5 rounded-lg bg-[#0a0a0a] hover:bg-[#111] border border-[#222] text-[#888] hover:text-white transition-all active:scale-[0.98]">
              <MessageCircle className="w-4 h-4" />
              <span className="ml-1.5 text-xs font-semibold">{event.commentsCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
