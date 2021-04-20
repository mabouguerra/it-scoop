const autoprefixer = require("autoprefixer");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Dubai", "sans-serif"],
    },
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: "0 auto",
            },
            a: {
              color: colors.red[800],
            },
            blockquote: {
              borderRightWidth: "0.25rem",
              borderRightColor: colors.red[800],
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
