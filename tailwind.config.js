module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white_': '#E9EBF1',
        'black_': '#111513',
        'brown_': '#b76143',
        'gray_': {
          500: '#3a494e',
          400: '#6a91a4',
          300: '#bbc6d6',
        },
        'blue_':'#2a55c2'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
