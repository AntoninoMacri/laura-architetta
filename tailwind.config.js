/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Laura Trevisan palette
        navy: {
          50:  '#E8EEF5',
          100: '#C5D3E6',
          200: '#92AACC',
          300: '#6082B3',
          500: '#2D5A8E',
          700: '#1E3A5F',
          900: '#0F1F33',
        },
        gold: {
          100: '#F5E8C8',
          200: '#EDD49A',
          300: '#DDB96A',
          500: '#C4943A',
          700: '#9A6E1F',
        },
        cream: {
          50:  '#FDFAF5',
          100: '#F5F0E8',
          200: '#EDE4D3',
          300: '#DDD0B8',
        },
        // shadcn tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "dash-draw": {
          from: { strokeDashoffset: "1000" },
          to:   { strokeDashoffset: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "dash-draw":      "dash-draw 2s ease-in-out forwards",
        "fade-up":        "fade-up 0.6s ease-out forwards",
        "fade-in":        "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
