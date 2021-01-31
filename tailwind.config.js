module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
        "light-gray": "hsl(0, 0%, 98%)",
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
