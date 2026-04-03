import Link from "next/link"
import Navbar from "@/components/ui/Navbar"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[var(--color-neon-pink)] selection:text-white flex flex-col overflow-hidden relative">
      <Navbar />
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-pink)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-neon-cyan)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 text-center">
        
        {/* Massive 404 Graphic */}
        <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent relative origin-center">
          404
          {/* Overlay glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-pink)] via-purple-500 to-[var(--color-neon-cyan)] bg-clip-text text-transparent opacity-50 blur-sm">
            404
          </span>
        </h1>
        
        {/* Explainer Text */}
        <div className="mt-[-2rem] md:mt-[-4rem]">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-neon-cyan)] to-blue-500 drop-shadow-[0_0_10px_rgba(5,217,232,0.4)] mb-4">
            SCENE NOT FOUND
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md mx-auto mb-10">
            Looks like the party moved somewhere else. The fest you're looking for doesn't exist.
          </p>
          
          {/* Back to Home Button */}
          <Link href="/">
            <button className="relative group overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-pink)] to-[var(--color-neon-cyan)] rounded-full opacity-70 group-hover:opacity-100 blur transition-opacity duration-500"></span>
              <div className="relative bg-[#050505] px-8 py-4 rounded-full flex items-center gap-3 transition-all group-hover:bg-transparent">
                <span className="font-bold text-white tracking-widest uppercase shadow-black">
                  TAKE ME BACK TO THE CLUB
                </span>
                <svg className="w-5 h-5 text-white animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
      
      {/* Custom CSS for bounce-horizontal animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
      `}} />
    </main>
  )
}
