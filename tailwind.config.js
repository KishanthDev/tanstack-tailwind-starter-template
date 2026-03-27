/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brewflock: {
          orange: '#EA580C', // Deep Safety Orange
          navy: '#0F172A',   // Professional Slate/Navy
          steel: '#64748B',  // Muted grey for accents
        }
      }
    },
  },
  plugins: [],
}