/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00E5FF',
          dark: '#00B8D4',
          light: '#80F1FF',
        },
        secondary: {
          DEFAULT: '#2A9D8F',
          dark: '#1F7268',
          light: '#3FB5A6',
        },
        dark: {
          DEFAULT: '#040B14',
          light: '#0A1629',
          darker: '#020609',
        },
        light: {
          DEFAULT: '#E2E8F0',
          dark: '#CBD5E1',
          lighter: '#F8FAFC',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};