/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:{max:'1200px'}  // Custom breakpoint for screens <= 440px
      },
      colors: {
        customBlue: '#0049C6', // Define your custom color
      },
    },
  },
  plugins: [],
}