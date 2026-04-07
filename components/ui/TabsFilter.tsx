"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const tabs = [
  { id: "all", label: "ALL SCENES" },
  { id: "free", label: "FREE" },
  { id: "paid", label: "PAID" }
]

export default function TabsFilter({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <div className="flex space-x-1 bg-[#050505] border border-[#222] p-1 rounded-lg max-w-md mx-auto mb-10 w-full sm:w-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative flex-1 sm:px-6 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-300 z-10 ${
            activeTab === tab.id ? "text-white" : "text-[#555] hover:text-white"
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-[#1a1a1a] border border-[#333] rounded-md -z-10"
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
