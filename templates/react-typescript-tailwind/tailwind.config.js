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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
