module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT: '#f5f5f5',
        },
        vertdeau: {
          DEFAULT: '#cde3dc',
        },
        darkVertdeau: {
          DEFAULT: '#8da6a2',
        },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      backgroundColor: ['group-focus'],
    },
  },
  plugins: [],
};
