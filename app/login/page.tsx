import Navbar from "@/components/ui/Navbar";
import { UserCircle } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[var(--color-neon-pink)] selection:text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-20 px-6">
        <div className="w-full max-w-md glass-dark p-8 rounded-3xl border border-white/10 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-neon-pink)] to-[var(--color-neon-purple)] rounded-3xl blur opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <UserCircle className="w-16 h-16 mx-auto mb-6 text-[var(--color-neon-pink)] drop-shadow-[0_0_15px_rgba(255,42,109,0.5)]" />
            <h1 className="text-3xl font-black mb-2 text-white">ENTER THE SCENE</h1>
            <p className="text-gray-400 mb-8 font-medium">Log in to RSVP, upvote fests, and join the hype.</p>
            
            <a href="/api/auth/google" className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:border-white/30">
              <img src="https://authjs.dev/img/providers/google.svg" alt="Google" className="w-6 h-6" />
              Continue with Google
            </a>
            
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="h-px bg-white/10 flex-1"></div>
              <span>OR</span>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>
            
            <button className="w-full py-4 mt-6 bg-gradient-to-r from-[var(--color-neon-pink)] to-[var(--color-neon-purple)] rounded-xl font-bold text-white transition-all shadow-[0_0_20px_rgba(255,42,109,0.4)] hover:shadow-[0_0_30px_rgba(177,0,255,0.6)]">
              Continue with Email
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
