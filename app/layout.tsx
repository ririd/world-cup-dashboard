import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'World Cup 2026 AI Prediction Dashboard',
  description:
    'Advanced AI-powered predictions for FIFA World Cup 2026 matches. Get accurate forecasts with detailed analytics.',
  keywords: [
    'World Cup 2026',
    'AI Predictions',
    'Football',
    'Soccer',
    'Dashboard',
  ],
  authors: [{ name: 'World Cup AI' }],
  openGraph: {
    title: 'World Cup 2026 AI Prediction Dashboard',
    description:
      'Advanced AI-powered predictions for FIFA World Cup 2026 matches.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}