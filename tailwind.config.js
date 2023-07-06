/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

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
        'hero': `url('/img/bg-mobile.png')`,
        'hero-desktop': `url('/img/bg-desktop.png')`,
        'hero-xl-desktop': `url('/img/bg-2xl-desktop.png')`,
      },
      height: {
        'header-mobile': 'var(--header-height-mobile)',
        'header-desktop': 'var(--header-height-desktop)',
      },
      fontFamily: {
        primary: ['var(--font-sulphur-point)', ...fontFamily.sans],
      },
      colors: {
        orange: '#FF3D00',
        navy: '#001447',
        darkGreen: '#219653',
        green: '#64FF3D',
        yellow: '#FFE500',
        lightGray: '#EEEFF1',
        gray: '#353434',
        black: '#000000',
        white: '#FFFFFF',
        blue: '#072A83',
        sky: '#F2F4FA'
      }
    },
  },
  plugins: [],
}
