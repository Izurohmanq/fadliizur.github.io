/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    borderWidth: {
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
    },
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {},
  },
  plugins: [],
}