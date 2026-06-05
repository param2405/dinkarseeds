/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#1B5E20',
        'secondary-green': '#2E7D32',
        'accent-gold': '#F9A825',
        'bg-light': '#FAFAFA',
        'text-dark': '#222222',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'safe': 'clamp(1rem, 5vw, 3rem)',
      },
    },
  },
  plugins: [],
}
