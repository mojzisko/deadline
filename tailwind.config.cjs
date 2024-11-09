/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        'mobile': '390px',
        'tablet': '760px',
        'desktop': '1440px',
        'largeDesktop': '1920px',
      },
      colors: {
        // Custom colors
        lightBackground: '#EEEE', // for light mode background
        darkBackground: '#000000', // for dark mode background
        greyBackground: '#D9D9D9'  
      },
      fontFamily: {
        basicSemibold: ['basicSemibold', 'sans-serif'],
        indivisibleBold: ['indivisibleBold', 'sans-serif'],
        indivisibleMedium: ['indivisibleMedium', 'sans-serif'],
      },
    },
  },
  darkMode: 'media', // 'media' or 'class'
  plugins: [],
}
