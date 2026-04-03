"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const tabs = [
  { id: "all", label: "ALL SCENES" },
  { id: "free", label: "FREE 🟢" },
  { id: "paid", label: "PREMIUM 🔴" }
]

export default function TabsFilter({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <div className="flex space-x-1 bg-[#0a0a0a] border border-white/10 p-1 rounded-full max-w-md mx-auto mb-10 w-full sm:w-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative flex-1 sm:px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 z-10 ${
            activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className={`absolute inset-0 rounded-full -z-10 ${
                tab.id === 'free' 
                  ? 'bg-[var(--color-neon-cyan)]/20 border border-[var(--color-neon-cyan)] shadow-[0_0_15px_rgba(5,217,232,0.3)]' 
                  : tab.id === 'paid' 
                    ? 'bg-[var(--color-neon-pink)]/20 border border-[var(--color-neon-pink)] shadow-[0_0_15px_rgba(255,42,109,0.3)]' 
                    : 'bg-white/10 border border-white/20'
              }`}
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
