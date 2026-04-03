"use client"

import Link from "next/link"
import { Search, UserCircle, PlusCircle } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black italic tracking-tighter">
          <span className="text-white text-glow">NCR</span>
          <span className="text-[var(--color-neon-pink)] text-glow-pink">SCENE</span>
        </Link>
        
        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/events?type=all" className="text-gray-300 hover:text-white hover:text-glow transition-all">All Fests</Link>
          <Link href="/events/free" className="text-gray-300 hover:text-[var(--color-neon-cyan)] hover:text-glow-cyan transition-all flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--color-neon-cyan)] shadow-[0_0_8px_var(--color-neon-cyan)]"></span>
            Free
          </Link>
          <Link href="/events/paid" className="text-gray-300 hover:text-[var(--color-neon-pink)] hover:text-glow-pink transition-all flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--color-neon-pink)] shadow-[0_0_8px_var(--color-neon-pink)]"></span>
            Paid
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all">
            <Search className="w-5 h-5" />
          </button>
          
          <Link href="/post-event" className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:border-[var(--color-neon-purple)] hover:shadow-[0_0_15px_rgba(177,0,255,0.4)]">
            <PlusCircle className="w-4 h-4 text-[var(--color-neon-purple)]" />
            <span>Post a Fest</span>
          </Link>

          <Link href="/login" className="flex items-center gap-2 bg-[var(--color-neon-pink)] hover:bg-[#ff145b] text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(255,42,109,0.5)] hover:shadow-[0_0_25px_rgba(255,42,109,0.7)]">
            <UserCircle className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
