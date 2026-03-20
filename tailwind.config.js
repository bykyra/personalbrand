/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        colors: {
          sage: {
            50: '#f6f7f4',
            100: '#e8ebe3',
            200: '#d1d7c7',
            300: '#b4bda3',
            400: '#8b9a7e',
            500: '#6d7d5f',
            600: '#56654a',
            700: '#44503c',
            800: '#394232',
            900: '#30372b',
          },
          terracotta: {
            50: '#fdf6f3',
            100: '#f9e9e0',
            200: '#f3d1c1',
            300: '#e9b098',
            400: '#db8765',
            500: '#c96941',
            600: '#b35536',
            700: '#95442e',
            800: '#7a3a2b',
            900: '#653228',
          },
        },
      },
    },
    plugins: [],
  }