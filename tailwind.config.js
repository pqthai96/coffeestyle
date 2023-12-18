/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'coffee': {
          200: '#C89F94',
          400: '#A25F4B'
        }
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        faceIn: {
          from: {opacity: 0},
          to: {opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown .3s ease-in-out',
        faceIn: 'faceIn 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}

