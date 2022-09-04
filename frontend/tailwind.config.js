/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#0000ff',
      text: '#565656',
      bg: '#232323',
      gray: '#f8f5f5',
      red: '#ff0000',
      white: '#ffffff',
      black: '#000000',
      grid: '#e0e3e4',
      'grid-middle': '#bababa',
      hover: '#192a56'
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    }
  },
  plugins: []
}
