const autoprefixer = require("autoprefixer");
const colors = require("tailwindcss/colors");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
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
              paddingRight: em(20, 20),
            },
            table: {
              textAlign: "right",
            },
            "ol > li": {
              paddingRight: em(28, 16),
            },
            "ol > li::before": {
              right: "0",
            },
            "ul > li": {
              paddingRight: em(28, 16),
            },
            "ul > li::before": {
              width: em(6, 16),
              height: em(6, 16),
              top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
              right: em(4, 16),
            },
            "thead th:first-child": {
              paddingRight: "0",
            },
            "tbody td:first-child": {
              paddingRight: "0",
            },
          },
        },
        sm: {
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
              paddingRight: em(20, 18),
            },
            table: {
              textAlign: "right",
            },
            "ol > li": {
              paddingRight: em(22, 14),
            },
            "ol > li::before": {
              right: "0",
            },
            "ul > li": {
              paddingRight: em(22, 14),
            },
            "ul > li::before": {
              width: em(5, 14),
              height: em(5, 14),
              top: `calc(${em(24 / 2, 14)} - ${em(2.5, 14)})`,
              right: em(3, 14),
            },
            "thead th:first-child": {
              paddingRight: "0",
            },
            "tbody td:first-child": {
              paddingRight: "0",
            },
          },
        },
        lg: {
          css: {
            blockquote: {
              borderRightWidth: "0.25rem",
              borderRightColor: colors.red[800],
              paddingRight: em(24, 24),
            },
            table: {
              textAlign: "right",
            },
            "ol > li": {
              paddingRight: em(30, 18),
            },
            "ol > li::before": {
              right: "0",
            },
            "ul > li": {
              paddingRight: em(30, 18),
            },
            "ul > li::before": {
              width: em(6, 18),
              height: em(6, 18),
              top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
              right: em(4, 18),
            },
            "thead th:first-child": {
              paddingRight: "0",
            },
            "tbody td:first-child": {
              paddingRight: "0",
            },
          },
        },
        dark: {
          css: {
            color: colors.gray[300],
            a: {
              color: colors.red[400],
              "&:hover": {
                color: colors.red[600],
              },
              code: { color: colors.red[400] },
            },
            blockquote: {
              borderLeftColor: colors.gray[700],
              color: colors.gray[300],
            },
            "h2,h3,h4": {
              color: colors.gray[100],
            },
            hr: { borderColor: colors.gray[700] },
            ol: {
              li: {
                "&:before": { color: colors.gray[500] },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: colors.gray[500] },
              },
            },
            strong: { color: colors.gray[300] },
            thead: {
              color: colors.gray[100],
            },
            tbody: {
              tr: {
                borderBottomColor: colors.gray[700],
              },
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
