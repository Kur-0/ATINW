/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fleur': ['Fleur de Leah', 'sans-serif'],
        'jacques': ['Jacques Francois', 'sans-serif'],
      },
      },
  },
  plugins: [],
}
