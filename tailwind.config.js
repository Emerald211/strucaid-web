/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serrat: 'Montserrat'
      },
      backgroundImage: {
        banner: "url('src/assets/Rectangle 4054.png')",
        banner2: "url('src/assets/Group 5.png') "
      },
      colors: {
        main: '#021853'
      }
    },
  },
  plugins: [],
}

