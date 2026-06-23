import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "dark-bg": "#0B0F19",
        "dark-card": "rgba(15, 23, 42, 0.6)",
        "neon-cyan": "#00D9FF",
        "neon-emerald": "#00FF7F",
        "neon-cyan-dark": "#0099CC",
        "neon-emerald-dark": "#00CC66",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 217, 255, 0.3)",
        "glow-emerald": "0 0 20px rgba(0, 255, 127, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 217, 255, 0.2)",
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, #00D9FF 0%, #00FF7F 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config