/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
    gridTemplateColumns: {
      '4': 'repeat(4, 100px)',
      '1': 'repeat(1, 100px)',
    },
    gridTemplateRows: {
      '7': 'repeat(7, 100px)',
      '2': 'repeat(2, 100px)',
    },
    gridColumn: {
      'span-1/1': 'span 1/ span -1',
  },
  plugins: [],
}
}
}
