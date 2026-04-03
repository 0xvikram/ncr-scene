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
    <div className="group relative w-full rounded-2xl overflow-hidden glass-dark hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
      
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${isFree ? 'from-[var(--color-neon-cyan)] to-blue-500' : 'from-[var(--color-neon-pink)] to-[var(--color-neon-purple)]'} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500`}></div>
      
      <div className="relative h-full flex flex-col bg-[#080808] z-10 rounded-2xl overflow-hidden">
        
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
            {isFree ? (
              <span className="bg-[#050505]/80 backdrop-blur-md border border-[var(--color-neon-cyan)]/50 text-[var(--color-neon-cyan)] text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(5,217,232,0.3)]">
                ● FREE
              </span>
            ) : (
              <span className="bg-[#050505]/80 backdrop-blur-md border border-[var(--color-neon-pink)]/50 text-[var(--color-neon-pink)] text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,42,109,0.3)]">
                ● ₹{event.price}
              </span>
            )}
          </div>
          <button className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-[var(--color-neon-pink)] transition-colors z-20 hover:scale-110">
            <Heart className="w-4 h-4" />
          </button>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10 top-1/2"></div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{event.college}</p>
          <h3 className="text-xl font-black text-white mb-3 line-clamp-1 group-hover:text-glow transition-all">{event.title}</h3>
          
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center text-sm text-gray-300">
              <Calendar className="w-4 h-4 mr-2 text-[var(--color-neon-purple)]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <MapPin className="w-4 h-4 mr-2 text-[var(--color-neon-cyan)]" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {event.tags.map(tag => (
              <span key={tag} className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
            <button className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-xl ${
              isFree 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-[var(--color-neon-pink)] text-white shadow-[0_0_10px_rgba(255,42,109,0.3)] hover:shadow-[0_0_20px_rgba(255,42,109,0.6)]'
            }`}>
              Register
            </button>
            <button className="ml-3 flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all">
              <MessageCircle className="w-5 h-5" />
              <span className="ml-1.5 text-sm font-semibold">{event.commentsCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
