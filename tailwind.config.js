/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        black: '#151515',
        purple: '#854DFF',
        grey: {
          light: '#F0F0F0',
          normal: '#716F6F',
        },
        line: '#DCDCDC',
        red: '#FF5959'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}