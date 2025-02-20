/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },


      animation: {
        fadeInDown: 'fadeInDown 1s ease-in-out',
        fadeInUp: 'fadeInUp 1s ease-in-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
