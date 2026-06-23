'use client'

import React from 'react'
import { Activity, BarChart3, Brain, Zap } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-neon">
              <Zap size={20} className="text-dark-bg" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-heading text-white">
                World Cup 2026
              </h1>
              <p className="text-xs text-gray-400">AI Prediction Dashboard</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon-cyan transition-smooth">
              <BarChart3 size={18} />
              <span>Predictions</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon-emerald transition-smooth">
              <Brain size={18} />
              <span>Analytics</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon-cyan transition-smooth">
              <Activity size={18} />
              <span>Live</span>
            </button>
          </nav>

          {/* Theme Toggle */}
          <button className="p-2 rounded-lg hover:bg-dark-card transition-smooth">
            <span className="text-gray-400 hover:text-neon-cyan transition-smooth">⚙️</span>
          </button>
        </div>
      </div>
    </header>
  )
}