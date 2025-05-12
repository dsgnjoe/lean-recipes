/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        heroGreen: '#074F43',
        heroGreenLight: '#EDFCF2',
      },
      fontFamily: {
        hostGrotesk: ['Host Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
