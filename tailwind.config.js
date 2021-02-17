const { white, black } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.gray,
      red: colors.red,
      purple: colors.purple,
      cyan: colors.cyan,
      teal: colors.teal,
      white: white,
      black: black,
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "architects-daughter": ['"Architects Daughter"', "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
      colors: {
        plato: {
          50: "#f7faf9",
          100: "#eff8f2",
          200: "#daf0dd",
          300: "#b9e2c2",
          400: "#77c891",
          500: "#3ea85f",
          600: "#2b863f",
          700: "#286936",
          800: "#234f2f",
          900: "#173b2f", // Base
        },
        zomp: {
          50: "#ecf8f8",
          100: "#d3f7f2",
          200: "#a3f1e2",
          300: "#65e8d0",
          400: "#20d6b2",
          500: "#0abf8f",
          600: "#32a287", // Base
          700: "#0f865e",
          800: "#12694d",
          900: "#115540",
        },
        coral: {
          50: "#faf8f6",
          100: "#faf1ec",
          200: "#f5e0d4",
          300: "#ffcca8", // Base
          400: "#eb9a78",
          500: "#e6704b",
          600: "#d14c32",
          700: "#a63a2f",
          800: "#7d2e2c",
          900: "#612526",
        },
        linen: {
          50: "#f8f7f5",
          100: "#f6f2eb",
          200: "#f9efe4", // Base
          300: "#e3ceb3",
          400: "#d1aa7f",
          500: "#be8353",
          600: "#9f5f3a",
          700: "#7c4836",
          800: "#5f3932",
          900: "#4b2e2b",
        },
        denim: {
          50: "#f3f7f9",
          100: "#eaf1f7",
          200: "#d9e2fc", // Base
          300: "#b7cbeb",
          400: "#8aa8e4",
          500: "#617fdb",
          600: "#4c5cc9",
          700: "#4248a7",
          800: "#37397f",
          900: "#2e3063",
        },
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      inset: {
        full: "100%",
        "1/5": "20%",
        "1/2.5": "40%",
        "3/4": "75%",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
      customForms: (theme) => ({
        default: {
          "input, textarea, multiselect, select, checkbox, radio": {
            backgroundColor: "transparent",
            borderColor: theme("colors.gray.700"),
            borderRadius: theme("borderRadius.sm"),
            "&:focus": {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme("colors.gray.500"),
            },
          },
          "input, textarea, multiselect, select": {
            backgroundColor: "transparent",
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme("spacing.3"),
            paddingRight: theme("spacing.4"),
            paddingBottom: theme("spacing.3"),
            paddingLeft: theme("spacing.4"),
          },
          "input, textarea": {
            "&::placeholder": {
              color: theme("colors.gray.500"),
            },
          },
          select: {
            paddingRight: theme("spacing.10"),
            iconColor: theme("colors.gray.500"),
          },
          "checkbox, radio": {
            color: theme("colors.purple.600"),
            backgroundColor: "transparent",
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
