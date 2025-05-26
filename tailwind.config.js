/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        heroGreen: '#074F43',
        heroGreenLight: '#EDFCF2',
        footerGreen: '#084C2E',
      },
      fontFamily: {
        hostGrotesk: ['Host Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
