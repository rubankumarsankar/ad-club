/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ← Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#ffffff",
          dark: "#0f172a",
          textLight: "#1e293b",
          textDark: "#f1f5f9",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Orbitron"', 'sans-serif'],
        asgard: ['"Asgard Trial"', 'sans-serif'],
        glancyr: ['"Glancyr"', 'sans-serif'],
        Brutalism: ['"Brutalism"', 'sans-serif'],
        
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
