module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lucidahand: [
          '"Lucida Handwriting", serif'
        ],
        lucidasans: [
          '"Lucida Sans"', 'sans-serif'
        ]
      },
      colors: {
        orange: '#F6BC47',
        darkgray: '#1c1c1c',
        mediumgray: '#424242',
        blacky: '#0D0D0D'
      },
      transitionProperty: {
        xy: 'top, bottom, left, right'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
