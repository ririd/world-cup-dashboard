export type Team = {
  id: string
  name: string
  fifa_rank: number
  group_stage: string
  flag_url: string
  created_at: string
}

export type Match = {
  id: string
  home_team_id: string
  away_team_id: string
  match_date: string
  status: 'Scheduled' | 'Live' | 'Completed'
  home_score?: number | null
  away_score?: number | null
}

export type Prediction = {
  id: string
  match_id: string
  home_win_prob: number
  draw_prob: number
  away_win_prob: number
  predicted_home_score: number
  predicted_away_score: number
  ai_insight: string
  created_at: string
}

export type MatchWithTeams = Match & {
  home_team: Team
  away_team: Team
  prediction?: Prediction
}