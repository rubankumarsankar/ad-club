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
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
