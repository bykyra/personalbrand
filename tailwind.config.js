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
          warmBrown: {
            50: '#faf8f5',
            100: '#f2ede5',
            200: '#e5dac9',
            300: '#d4c1a5',
            400: '#c4a287',
            500: '#a67c52',
            600: '#8b6643',
            700: '#73533a',
            800: '#604535',
            900: '#523b2f',
          },
        },
      },
    },
    plugins: [],
  }