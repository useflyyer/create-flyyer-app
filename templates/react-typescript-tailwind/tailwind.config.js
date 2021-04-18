const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * See ./styles/tailwind.css for info about measurements in rem units and the default font-size.
 */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './templates/**/*.ts',
      './templates/**/*.tsx',
      './templates/**/*.js',
      './templates/**/*.jsx',
      './components/**/*.ts',
      './components/**/*.tsx',
      './components/**/*.js',
      './components/**/*.jsx',
      './styles/**/*.css',
      './styles/**/*.scss',
      './styles/**/*.sass',
      './styles/**/*.less'
    ]
  },
  /**
   * Toggle dark/light scheme depending on contrast.
   * https://docs.flayyer.com/docs/advanced/contrast
   */
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        /**
         * Instagram stories have a recommended safe-area for content.
         * https://docs.flayyer.com/docs/advanced/safe-area
         */
        storysafe: '250px'
      },
      /**
       * Enable 12x12 grid layout, by default tailwindcss starts with 12 columns and 6 rows.
       */
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
        13: 'repeat(13, minmax(0, 1fr))'
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13'
      }
    },
    /**
     * We recommend breakpoints based on height rather than width.
     * This is not optimal yet and we are still trying to get a better setup.
     * Help us defining the best config at https://github.com/flayyer/create-flayyer-app/issues/3
     */
    screens: {
      /* For apps where images are always small squares such as WhatsApp (400x400px) */
      thumb: {raw: '(min-height: 400px)'},
      /* Recommended horizontal image for sites like Facebook, Twitter, etc. (og:image) (1200x630px) */
      banner: {raw: '(min-height: 630px)'},
      /* The size of an Instagram post. */
      sq: {raw: '(min-height: 1080px)'},
      /* The size of a full-screen story for Instagram and others. */
      story: {raw: '(min-height: 1920px)'},
      /* Keep default Tailwind sizes (https://tailwindcss.com/docs/breakpoints#extending-the-default-breakpoints) */
      ...defaultTheme.screens
    }
  },
  variants: {
    /* Enable dark-mode for v2.1 filters. */
    extend: {
      filter: ['dark'],
      brightness: ['dark'],
      invert: ['dark']
    }
  },
  plugins: [
    /* Some useful plugins: */
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
    // require('tailwindcss-textshadow'),
  ]
};
