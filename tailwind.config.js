/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      keyframes: {
        rgbFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '20ch' }, // match exact character count
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        hideCursor: {
          '0%': { borderColor: 'white' },
          '100%': { borderColor: 'transparent' },
        },
      },
      animation: {
        rgbFlow: 'rgbFlow 6s ease infinite',
        typewriter: 'typewriter 2.5s steps(20) forwards',
        blink: 'blink 1s step-end infinite',
        hideCursor: 'hideCursor 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
