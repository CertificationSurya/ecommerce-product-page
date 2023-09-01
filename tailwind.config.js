/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'orange-90': 'hsl(25, 100%, 94%)',
        'blue-10': 'hsl(220, 13%, 13%)',
        'gray-blue-45': 'hsl(219, 9%, 45%)',
        'gray-blue': 'hsl(220, 14%, 75%)',
        'gray-blue-100': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'black-75': 'hsla(0, 0%, 0%, 0.75)',
      },

      fontWeight:{
        lgt: 400,
        md: 500,
        bold: 700,
      }
    },
  },
  plugins: [],
}

