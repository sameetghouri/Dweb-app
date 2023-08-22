/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gr': '#1d1d1d',
        'gr1':'#606060',
        'gr2':'#141617',
        'gr3':'#757575',
        'sk': '#25abf4',
        'sk1':'#564DCA',
        'gre':'#18D48C'
        
      }
    },
  },
  plugins: [],
}
