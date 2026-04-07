import Navbar from "@/components/ui/Navbar";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-white selection:text-black">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-16 px-6">
        <div className="w-full max-w-sm">
          {/* Minimalist Header */}
          <div className="mb-10 text-center">
            <h1 className="text-2xl font-semibold tracking-tight mb-2">Create an account</h1>
            <p className="text-sm text-[#888]">Join the scene and start discovering fests.</p>
          </div>
          
          <div className="space-y-4">
            {/* Primary Action - Google */}
            <a 
              href="/api/auth/google" 
              className="w-full h-12 bg-white text-black rounded-xl font-medium text-sm flex items-center justify-center gap-3 transition-all hover:bg-gray-200 active:scale-[0.98]"
            >
              <img src="https://authjs.dev/img/providers/google.svg" alt="Google" className="w-5 h-5" />
              Sign up with Google
            </a>

            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-[#222]"></div>
              <span className="flex-shrink-0 mx-4 text-[10px] tracking-widest text-[#555] uppercase font-semibold">or</span>
              <div className="flex-grow border-t border-[#222]"></div>
            </div>

            {/* Email Form (Static Placeholder for Aesthetic) */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full h-12 bg-[#0a0a0a] border border-[#222] rounded-xl px-4 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-[#555] text-white"
                />
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full h-12 bg-[#0a0a0a] border border-[#222] rounded-xl px-4 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-[#555] text-white"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full h-12 bg-[#0a0a0a] border border-[#222] rounded-xl px-4 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-[#555] text-white"
              />
              <button 
                className="w-full h-12 bg-[#111] hover:bg-[#1a1a1a] text-white border border-[#222] rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                Create Account
                <MoveRight className="w-4 h-4 ml-1 opacity-50" />
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-[#666]">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:underline underline-offset-4 transition-all">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
