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
        fadeIn: 'fadeIn 0.6s ease-out',
        slideInUp: 'slideInUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
         fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      },
    },
  },
  plugins: [],
}
