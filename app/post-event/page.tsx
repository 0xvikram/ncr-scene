import Navbar from "@/components/ui/Navbar";
import { PlusCircle } from "lucide-react";

export default function PostEvent() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[var(--color-neon-cyan)] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-3xl w-full mx-auto pt-32 px-6 pb-20">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">
            HYPE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-blue-500 text-glow-cyan">EVENT</span>
          </h1>
          <p className="text-gray-400 font-medium">Post your college fest, concert, or DJ night to the biggest platform in Delhi NCR.</p>
        </div>

        <div className="glass-dark p-8 md:p-12 rounded-3xl border border-white/10 relative">
           <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-neon-cyan)] to-blue-500 rounded-3xl blur opacity-10"></div>
           
           <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300">Fest Name</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors focus:shadow-[0_0_15px_rgba(5,217,232,0.2)]" placeholder="e.g. Neon Pulse 2k26" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300">College / Venue</label>
                  <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-cyan)] transition-colors focus:shadow-[0_0_15px_rgba(5,217,232,0.2)]" placeholder="e.g. IIT Delhi" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Category</label>
                <div className="flex gap-4">
                  <label className="flex-1 bg-white/5 border border-[var(--color-neon-cyan)]/50 rounded-xl p-4 flex items-center justify-center cursor-pointer hover:bg-[var(--color-neon-cyan)]/10 transition-all">
                    <input type="radio" name="category" className="hidden" defaultChecked />
                    <span className="font-bold text-[var(--color-neon-cyan)]">● FREE</span>
                  </label>
                  <label className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all opacity-50">
                    <input type="radio" name="category" className="hidden" />
                    <span className="font-bold text-gray-400">● PAID</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2 pt-6">
                <button type="button" className="w-full py-4 bg-gradient-to-r from-[var(--color-neon-cyan)] to-blue-600 rounded-xl font-black text-white text-lg tracking-wide transition-all shadow-[0_0_20px_rgba(5,217,232,0.3)] hover:shadow-[0_0_30px_rgba(5,217,232,0.6)] flex items-center justify-center gap-2">
                  <PlusCircle className="w-6 h-6" />
                  POST TO THE SCENE
                </button>
              </div>
           </form>
        </div>

      </div>
    </main>
  )
}
