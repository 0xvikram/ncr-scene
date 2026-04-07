"use client"

import Link from "next/link"
import { Search, UserCircle, PlusCircle } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#222] px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black italic tracking-tighter flex items-center gap-1">
          <span className="text-white">NCR</span>
          <span className="text-[var(--color-neon-pink)]">SCENE</span>
        </Link>
        
        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/events?type=all" className="text-[#888] hover:text-white transition-all">All Fests</Link>
          <Link href="/events/free" className="text-[#888] hover:text-white transition-all flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-cyan)]"></span>
            Free
          </Link>
          <Link href="/events/paid" className="text-[#888] hover:text-white transition-all flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-pink)]"></span>
            Paid
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-[#888] hover:text-white p-2 rounded-full hover:bg-white/5 transition-all">
            <Search className="w-4 h-4" />
          </button>
          
          <Link href="/post-event" className="hidden sm:flex items-center gap-2 bg-transparent hover:bg-white/5 border border-[#222] px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:border-[#444] text-[#888] hover:text-white">
            <PlusCircle className="w-4 h-4" />
            <span>Post a Fest</span>
          </Link>

          <Link href="/login" className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-5 py-2 rounded-lg text-sm font-bold transition-all active:scale-[0.98]">
            <UserCircle className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
