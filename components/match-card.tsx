'use client'

import React from 'react'
import Image from 'next/image'
import { Trophy, AlertCircle } from 'lucide-react'
import type { MatchWithTeams } from '@/types'

interface MatchCardProps {
  match: MatchWithTeams
}

export function MatchCard({ match }: MatchCardProps) {
  const isProbabilityAvailable = match.prediction

  return (
    <div className="glass glass-hover p-6 rounded-2xl overflow-hidden group">
      {/* Header dengan status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              match.status === 'Live'
                ? 'bg-red-500 animate-pulse'
                : match.status === 'Completed'
                  ? 'bg-green-500'
                  : 'bg-yellow-500'
            }`}
          />
          <span className="text-xs font-medium text-gray-400">
            {match.status}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          {new Date(match.match_date).toLocaleDateString('id-ID', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>

      {/* Teams */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          {/* Home Team */}
          <div className="flex-1 text-center">
            <div className="mb-3 flex justify-center">
              <Image
                src={match.home_team.flag_url}
                alt={match.home_team.name}
                width={64}
                height={48}
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="font-heading font-bold text-white text-sm">
              {match.home_team.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Rank #{match.home_team.fifa_rank}
            </p>
          </div>

          {/* Score or VS */}
          <div className="flex flex-col items-center gap-2">
            {match.status === 'Completed' ? (
              <div className="text-center">
                <div className="text-2xl font-bold font-heading text-neon-cyan">
                  {match.home_score} - {match.away_score}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 font-heading font-bold">VS</div>
            )}
          </div>

          {/* Away Team */}
          <div className="flex-1 text-center">
            <div className="mb-3 flex justify-center">
              <Image
                src={match.away_team.flag_url}
                alt={match.away_team.name}
                width={64}
                height={48}
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="font-heading font-bold text-white text-sm">
              {match.away_team.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Rank #{match.away_team.fifa_rank}
            </p>
          </div>
        </div>
      </div>

      {/* Predictions */}
      {isProbabilityAvailable && match.prediction ? (
        <div className="border-t border-white/10 pt-4 mt-4">
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
              🤖 AI Predictions
            </h4>

            {/* Win Probabilities */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">
                  {match.home_team.name} Win
                </span>
                <span className="font-bold text-neon-cyan">
                  {(match.prediction.home_win_prob * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-neon rounded-full"
                  style={{
                    width: `${match.prediction.home_win_prob * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-xs mt-3">
                <span className="text-gray-400">Draw</span>
                <span className="font-bold text-neon-emerald">
                  {(match.prediction.draw_prob * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-neon-emerald rounded-full"
                  style={{
                    width: `${match.prediction.draw_prob * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-xs mt-3">
                <span className="text-gray-400">
                  {match.away_team.name} Win
                </span>
                <span className="font-bold text-orange-400">
                  {(match.prediction.away_win_prob * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{
                    width: `${match.prediction.away_win_prob * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Score Prediction */}
            <div className="bg-dark-bg/50 rounded-lg p-3 mb-3">
              <p className="text-xs text-gray-400 mb-2">Predicted Score:</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold font-heading text-neon-cyan">
                  {match.prediction.predicted_home_score}
                </span>
                <span className="text-gray-500">-</span>
                <span className="text-lg font-bold font-heading text-neon-cyan">
                  {match.prediction.predicted_away_score}
                </span>
              </div>
            </div>

            {/* AI Insight */}
            <div className="bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg p-3">
              <div className="flex gap-2">
                <AlertCircle size={14} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-300 leading-relaxed">
                  {match.prediction.ai_insight}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-t border-white/10 pt-4 mt-4 text-center">
          <p className="text-xs text-gray-500">
            Prediksi AI sedang diproses...
          </p>
        </div>
      )}
    </div>
  )
}