// Dummy data untuk teams
export const DUMMY_TEAMS = [
  {
    id: '1',
    name: 'Argentina',
    fifa_rank: 1,
    group_stage: 'A',
    flag_url: 'https://flagcdn.com/w320/ar.png',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'France',
    fifa_rank: 2,
    group_stage: 'A',
    flag_url: 'https://flagcdn.com/w320/fr.png',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Brazil',
    fifa_rank: 3,
    group_stage: 'B',
    flag_url: 'https://flagcdn.com/w320/br.png',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'England',
    fifa_rank: 4,
    group_stage: 'B',
    flag_url: 'https://flagcdn.com/w320/gb-eng.png',
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Germany',
    fifa_rank: 5,
    group_stage: 'C',
    flag_url: 'https://flagcdn.com/w320/de.png',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Spain',
    fifa_rank: 6,
    group_stage: 'C',
    flag_url: 'https://flagcdn.com/w320/es.png',
    created_at: new Date().toISOString(),
  },
]

// Dummy data untuk matches
export const DUMMY_MATCHES = [
  {
    id: 'm1',
    home_team_id: '1',
    away_team_id: '2',
    match_date: new Date('2026-06-21T18:00:00Z').toISOString(),
    status: 'Scheduled' as const,
    home_score: null,
    away_score: null,
  },
  {
    id: 'm2',
    home_team_id: '3',
    away_team_id: '4',
    match_date: new Date('2026-06-22T18:00:00Z').toISOString(),
    status: 'Scheduled' as const,
    home_score: null,
    away_score: null,
  },
  {
    id: 'm3',
    home_team_id: '5',
    away_team_id: '6',
    match_date: new Date('2026-06-23T20:00:00Z').toISOString(),
    status: 'Live' as const,
    home_score: 2,
    away_score: 1,
  },
]

// Dummy data untuk predictions
export const DUMMY_PREDICTIONS = [
  {
    id: 'p1',
    match_id: 'm1',
    home_win_prob: 0.62,
    draw_prob: 0.22,
    away_win_prob: 0.16,
    predicted_home_score: 2,
    predicted_away_score: 1,
    ai_insight:
      'Argentina memiliki keunggulan signifikan berdasarkan performa terkini dan head-to-head record. Pertahanan mereka yang solid diperkirakan dapat membatasi serangan France.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'p2',
    match_id: 'm2',
    home_win_prob: 0.58,
    draw_prob: 0.25,
    away_win_prob: 0.17,
    predicted_home_score: 2,
    predicted_away_score: 1,
    ai_insight:
      'Brazil unggul dalam statistik tim secara keseluruhan. Kecepatan serangan mereka diperkirakan akan menjadi faktor kunci dalam pertandingan ini.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'p3',
    match_id: 'm3',
    home_win_prob: 0.55,
    draw_prob: 0.28,
    away_win_prob: 0.17,
    predicted_home_score: 3,
    predicted_away_score: 2,
    ai_insight:
      'Pertandingan yang sangat kompetitif antara dua kekuatan besar. Kedua tim memiliki kemampuan serangan yang mengesankan dengan pertahanan yang sedikit rentan.',
    created_at: new Date().toISOString(),
  },
]