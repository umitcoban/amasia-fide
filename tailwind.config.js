/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'inter' : ['Inter', 'sans-serif']
      },
      colors: {
        'primary-black': '#393939',
        'primary-green': '#88AB59',
        'primary-gray': '#C9C4C4',
        'secondary-gray': '#E9E9E9' 
      }
    },
  },
  plugins: [],
}
