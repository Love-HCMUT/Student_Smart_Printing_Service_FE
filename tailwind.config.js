/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./styles/**/*.css",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fore-background': '#E8E8E8',
        'main-background': '#FFFFFF',
        'gray-light': '#EAECF0',

        'pure-white': '#FCFCFD',
        'deep-blue': '#0070FF',
        'blue-black': '#101828',
        'green-dark': '#037847',
        'red-deep': '#C00000',
        'lemon-yellow': '#DOC703',
        'mint-green': '#ECFDF3',
        'smoke-gray': '#EDEFF1',
        'whitish-blue': '#F7FAFF',
        'pale-cream': '#FCFDEC',
        'pale-pink': '#FFECEC',

        'status-green-background': '#ECFDF3',
        'status-green-dot': '#14BA6D',
        'status-green-text': '#037847',

        'status-gray-background': '#F2F4F7',
        'status-gray-dot': '#6C778B',
        'status-gray-text': '#364254',

        'table-text-color': '#667085',

        'background-paging-disable': '#C4CDD5'
      }
    },
  },
  plugins: [],
}
