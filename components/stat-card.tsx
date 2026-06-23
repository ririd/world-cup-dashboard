'use client'

import React from 'react'
import { TrendingUp, Target, Zap } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: React.ReactNode
  trend?: number
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
}: StatCardProps) {
  return (
    <div className="glass hover:bg-dark-card/80 hover:border-neon-cyan/30 transition-smooth p-6 rounded-2xl group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold font-heading text-white">
            {value}
          </h3>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-2">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan/20 transition-smooth">
            {icon}
          </div>
        )}
      </div>
      {trend !== undefined && (
        <div className="flex items-center gap-2 text-neon-emerald text-sm">
          <TrendingUp size={16} />
          <span>+{trend}% vs bulan lalu</span>
        </div>
      )}
    </div>
  )
}