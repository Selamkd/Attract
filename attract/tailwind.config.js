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
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.chalk-underline': {
          position: 'relative',
          display: 'inline-block',
          textDecoration: 'none',
          color: 'yellow', // Set your desired text color
        },
        '.chalk-underline': {
          content: '""',
          position: 'absolute',
          bottom: '-2px', // Adjust as needed
          left: '0',
          width: '100%',
          height: '2px',
          backgroundColor: 'red', // Set your desired chalk underline color
          opacity: '0.7', // Adjust opacity as needed
          zIndex: '-1',
        },
      };
      addUtilities(newUtilities, ['before', 'after']);
    },
  ],
};
