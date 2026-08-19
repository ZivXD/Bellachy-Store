/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0D0D0D',
        'luxury-charcoal': '#171717',
        'luxury-gold': '#D4AF37',
        'luxury-gold-light': '#E5C158',
        'luxury-white': '#FFFFFF',
        'luxury-gray': '#2A2A2A',
        'luxury-text': '#E5E5E5',
        'luxury-muted': '#888888',
      },
      fontFamily: {
        hebrew: ['Rubik', 'Heebo', 'Assistant', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
        'silver-glow': '0 0 20px rgba(200, 200, 200, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E5C158 50%, #D4AF37 100%)',
        'dark-radial': 'radial-gradient(ellipse at top, #1A1A1A 0%, #0D0D0D 70%)',
      },
    },
  },
  plugins: [],
}
