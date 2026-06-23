'use client'

import React, { useState } from 'react'
import { Filter, Search } from 'lucide-react'

interface FilterTabsProps {
  onStatusChange: (status: string) => void
  onGroupChange: (group: string) => void
}

export function FilterTabs({ onStatusChange, onGroupChange }: FilterTabsProps) {
  const [activeStatus, setActiveStatus] = useState('All')
  const [activeGroup, setActiveGroup] = useState('All')

  const statuses = ['All', 'Scheduled', 'Live', 'Completed']
  const groups = ['All', 'A', 'B', 'C', 'D']

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Cari tim atau pertandingan..."
            className="w-full pl-12 pr-4 py-3 bg-dark-card border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/30 transition-smooth"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Status Filter */}
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
            Status Pertandingan
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  setActiveStatus(status)
                  onStatusChange(status)
                }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-smooth ${
                  activeStatus === status
                    ? 'bg-gradient-neon text-dark-bg'
                    : 'bg-dark-card border border-white/10 text-gray-300 hover:border-neon-cyan/50'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Group Filter */}
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
            Grup
          </label>
          <div className="flex flex-wrap gap-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => {
                  setActiveGroup(group)
                  onGroupChange(group)
                }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-smooth ${
                  activeGroup === group
                    ? 'bg-gradient-neon text-dark-bg'
                    : 'bg-dark-card border border-white/10 text-gray-300 hover:border-neon-cyan/50'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}