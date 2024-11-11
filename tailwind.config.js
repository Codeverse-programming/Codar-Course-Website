/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'body': '#FFF8F0',
        // 'text-color': '#89275E'
        'text-color': '#E82F58'
      },
      fontFamily: {
        'heading-font': ["Sora", 'sans-serif'],
        'paragraph-font': ["Montserrat", 'sans-serif'],
        'footer-font': ["Audiowide", 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

