# World Cup 2026 AI Prediction Dashboard

Aplikasi prediksi Piala Dunia 2026 menggunakan AI dengan desain modern dan premium SaaS aesthetic.

## 🎨 Design System

- **Background**: Dark mode (#0B0F19)
- **Glassmorphism**: Kartu transparan dengan efek blur
- **Aksen Warna**: 
  - Neon Cyan (#00D9FF)
  - Emerald Green (#00FF7F)
- **Font Heading**: Space Grotesk
- **Responsive**: Mobile-first design

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Components**: Custom components + shadcn/ui ready
- **Icons**: Lucide React
- **Font**: Space Grotesk (Google Fonts)

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Dashboard page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── header.tsx       # Header navigation
│   ├── stat-card.tsx    # Statistics cards
│   ├── match-card.tsx   # Match display cards
│   └── filter-tabs.tsx  # Filter controls
├── lib/
│   └── dummy-data.ts    # Development data
├── types/
│   └── index.ts         # TypeScript definitions
├── tailwind.config.ts   # Tailwind configuration
├── postcss.config.js    # PostCSS setup
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm atau yarn

### Installation

1. Clone repository:
```bash
git clone <repo-url>
cd world-cup-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📊 Database Schema

### Teams Table
```sql
CREATE TABLE teams (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  fifa_rank INT,
  group_stage VARCHAR(1),
  flag_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Matches Table
```sql
CREATE TABLE matches (
  id UUID PRIMARY KEY,
  home_team_id UUID REFERENCES teams(id),
  away_team_id UUID REFERENCES teams(id),
  match_date TIMESTAMP,
  status VARCHAR(20) DEFAULT 'Scheduled',
  home_score INT,
  away_score INT
);
```

### Predictions Table
```sql
CREATE TABLE predictions (
  id UUID PRIMARY KEY,
  match_id UUID REFERENCES matches(id),
  home_win_prob DECIMAL,
  draw_prob DECIMAL,
  away_win_prob DECIMAL,
  predicted_home_score INT,
  predicted_away_score INT,
  ai_insight TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎯 Features

- ✅ Dashboard dengan statistik real-time
- ✅ Kartu pertandingan dengan prediksi AI
- ✅ Filter berdasarkan status dan grup
- ✅ Probabilitas kemenangan visual
- ✅ Insight AI untuk setiap pertandingan
- ✅ Desain responsif mobile-first
- ✅ Dark mode dengan glassmorphism
- ✅ Animasi smooth dan transisi

## 🔄 Next Steps

- [ ] Integrasi database PostgreSQL/Supabase
- [ ] API endpoints untuk fetch data
- [ ] Authentication & authorization
- [ ] Advanced analytics page
- [ ] Team statistics page
- [ ] Leaderboard & predictions history
- [ ] Real-time updates dengan WebSocket
- [ ] PWA support

## 📝 Component Documentation

### StatCard
Menampilkan statistik dengan icon dan trend indicator.

```tsx
<StatCard
  title="Total Matches"
  value={64}
  subtitle="Total pertandingan"
  icon={<Trophy size={20} />}
  trend={12}
/>
```

### MatchCard
Menampilkan detail pertandingan dengan prediksi AI lengkap.

```tsx
<MatchCard match={matchWithTeamsData} />
```

### FilterTabs
Kontroler filter untuk status dan grup pertandingan.

```tsx
<FilterTabs
  onStatusChange={handleStatusChange}
  onGroupChange={handleGroupChange}
/>
```

## 🎨 Custom CSS Classes

- `.glass` - Glassmorphism effect
- `.glass-hover` - Glass dengan hover effect
- `.glow-cyan` - Neon cyan glow
- `.glow-emerald` - Neon emerald glow
- `.gradient-text` - Gradient text effect
- `.transition-smooth` - Smooth transition

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Silakan buat pull request dengan improvement atau bug fixes!

## 📄 License

MIT License - feel free to use this project as you wish.