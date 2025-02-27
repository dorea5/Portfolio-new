/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cloud-blue': '#e0f7fa',
        'electric-blue': '#03a9f4',
        'turquoise': '#4dd0e1',
        'sea-green': '#80cbc4',
      },
      backgroundColor: {
        'cloud-blue': '#e0f7fa',
        'electric-blue': '#03a9f4',
        'turquoise': '#4dd0e1',
        'sea-green': '#80cbc4',
      },
      textColor: {
        'cloud-blue': '#e0f7fa',
        'electric-blue': '#03a9f4',
        'turquoise': '#4dd0e1',
        'sea-green': '#80cbc4',
      },
      borderColor: {
        'cloud-blue': '#e0f7fa',
        'electric-blue': '#03a9f4',
        'turquoise': '#4dd0e1',
        'sea-green': '#80cbc4',
      },
    },
  },
  plugins: [],
};