// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

const primary = '#E30B13';

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        '.air-block': {
          backgroundColor: theme('accent-gray-950'),
          borderRadius: theme('rounded-layout'),
          boxShadow: theme('shadow-lg'),
          color: theme('accent-white')
        },
        '.btn-primary': {
          '&:hover': {
            backgroundColor: '#ff0009'
          },
          backgroundColor: primary,
          borderRadius: '0.65rem',
          color: '#fff',
          transition: 'background-color .3s ease-in-out'
        },
        '.text-link': {
          '&:hover': {
            textDecorationColor: 'rgba(255, 255, 255, .9)'
          },
          color: 'rgba(255,255,255, .9)',
          textDecorationColor: 'rgba(255, 255, 255, .2)',
          textDecorationLine: 'underline',
          textUnderlineOffset: 4,
          transition: 'text-decoration-color .3s ease-in-out'
        }
      });
      addUtilities({
        '.flex-center-between': {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between'
        },
        '.image-like-bg': {
          objectFit: 'cover',
          objectPosition: 'center',
          pointerEvents: 'none'
        },
        '.outline-border-none': {
          border: 'none',
          outline: 'none'
        },
        '.text-shadow': {
          textShadow: '1px 1px rgba(0, 0, 0, .4)'
        }
      });
    })
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fade .5s ease-in-out',
        scaleIn: 'scaleIn .5s ease-in-out'
      },
      borderRadius: {
        image: '0.5rem',
        layout: '0.8rem'
      },
      colors: {
        gray: {
          300: '#d9dae8',
          500: '#999aa5',
          600: '#66676e',
          700: '#39393f',
          800: '#242529',
          900: '#191B1F',
          950: '#101215'
        },
        primary,
        yellow: {
          700: '#F5C521'
        }
      },
      fontSize: {
        '2lg': '1.38rem'
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '50%': { opacity: 0.3 },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      spacing: {
        0.5: '0.12rem',
        layout: '2.75rem'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3'
      }
    }
  }
};
