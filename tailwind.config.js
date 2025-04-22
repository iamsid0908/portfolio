// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#08C1BB',
          600: '#07B0AA',
          700: '#069D98',
        },
        accent: {
          500: '#000000',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
