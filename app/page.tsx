'use client'

import React, { useState } from 'react'
import { Header } from '@/components/header'
import { StatCard } from '@/components/stat-card'
import { MatchCard } from '@/components/match-card'
import { FilterTabs } from '@/components/filter-tabs'
import { DUMMY_TEAMS, DUMMY_MATCHES, DUMMY_PREDICTIONS } from '@/lib/dummy-data'
import type { MatchWithTeams } from '@/types'
import { Trophy, Target, Zap, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [groupFilter, setGroupFilter] = useState('All')

  // Combine matches with teams and predictions
  const matchesWithData: MatchWithTeams[] = DUMMY_MATCHES.map((match) => ({
    ...match,
    home_team: DUMMY_TEAMS.find((t) => t.id === match.home_team_id)!,
    away_team: DUMMY_TEAMS.find((t) => t.id === match.away_team_id)!,
    prediction: DUMMY_PREDICTIONS.find((p) => p.match_id === match.id),
  }))

  // Filter matches
  const filteredMatches = matchesWithData.filter((match) => {
    const statusMatch =
      statusFilter === 'All' || match.status === statusFilter
    const groupMatch =
      groupFilter === 'All' ||
      match.home_team.group_stage === groupFilter ||
      match.away_team.group_stage === groupFilter
    return statusMatch && groupMatch
  })

  // Calculate stats
  const totalMatches = matchesWithData.length
  const completedMatches = matchesWithData.filter(
    (m) => m.status === 'Completed'
  ).length
  const liveMatches = matchesWithData.filter(
    (m) => m.status === 'Live'
  ).length
  const accuracyRate = 78.5

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-3">
            <span className="gradient-text">World Cup 2026</span> Predictions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Powered by advanced AI algorithms, dapatkan prediksi akurat untuk setiap
            pertandingan Piala Dunia 2026.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard
            title="Total Pertandingan"
            value={totalMatches}
            subtitle="64 matches total"
            icon={<Trophy size={20} />}
          />
          <StatCard
            title="Selesai"
            value={completedMatches}
            subtitle="Dari total pertandingan"
            icon={<TrendingUp size={20} />}
            trend={12}
          />
          <StatCard
            title="Live Sekarang"
            value={liveMatches}
            subtitle="Pertandingan aktif"
            icon={<Zap size={20} />}
          />
          <StatCard
            title="AI Accuracy"
            value={`${accuracyRate}%`}
            subtitle="Tingkat akurasi prediksi"
            icon={<Target size={20} />}
            trend={5.3}
          />
        </div>

        {/* Filters */}
        <FilterTabs
          onStatusChange={setStatusFilter}
          onGroupChange={setGroupFilter}
        />

        {/* Matches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                Tidak ada pertandingan yang sesuai dengan filter Anda.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 World Cup AI Prediction. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}