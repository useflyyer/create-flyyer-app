const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./templates/**/*.ts",
      "./templates/**/*.tsx",
      "./templates/**/*.js",
      "./templates/**/*.jsx",
      "./components/**/*.ts",
      "./components/**/*.tsx",
      "./components/**/*.js",
      "./components/**/*.jsx",
      "./styles/**/*.css",
      "./styles/**/*.scss",
      "./styles/**/*.sass",
      "./styles/**/*.less",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // For apps where images are always small squares such as WhatsApp
      "thumb": "600px",
      // The size of an Instagram post
      "sq": { raw: "(min-width: 1080px) and (max-height: 1080px)" },
      // The size of an Instagram story
      "story": { raw: "(min-width: 1080px) and (min-height: 1920px)" },
      // The default and recommended horizontal image for sites like Facebook, Twitter, etc.
      "banner": "1200px",
      // Keep default Tailwind sizes
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
