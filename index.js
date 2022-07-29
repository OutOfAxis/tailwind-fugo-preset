const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        "3xs": "0.5rem", // 8px
        "32px": "32px",
      },
      colors: {
        gray: {
          100: "#F8F9FA",
          200: "#EEF0F2",
          300: "#DDE2E5",
          400: "#C5CCD1", // 300+500
          500: "#ACB5BD",
          600: "#7B838A", // 500+700
          700: "#495057",
          800: "#353A40", // 700+900
          900: "#212429",
        },
        blue: {
          100: "#ECEFFD",
          200: "#C6D0F9", // 100+300
          300: "#A0B1F5",
          400: "#8197F2", // 300+600
          500: "#617DEE", // 300+600
          600: "#4263EB",
          700: "#2342C0",
          800: "#132fa1", // extrapolated
          900: "#031973", // extrapolated
        },
        purple: {
          100: "#F1EDFD",
          200: "#DED4FA", // 100+400
          300: "#CABCF6", // 100+400
          400: "#B7A3F3",
          500: "#9476EE", // 400+600
          600: "#7048E8",
          700: "#5028C6",
          800: "#3612a1", // extrapolated
          900: "#210575", // extrapolated
        },
        teal: {
          100: "#E6FBFB",
          200: "#99F3F1",
          300: "#34E7E4",
          400: "#00D8D6",
          500: "#00b3b1", // extrapolated
          600: "#019492", // extrapolated
          700: "#007876", // extrapolated
          800: "#005e5d", // extrapolated
          900: "#004242", // extrapolated
        },
        red: {
          100: "#FFF0F0",
          200: "#FFD3D3", // 100+300
          300: "#FFB5B5",
          400: "#FF9090", // 300+500
          500: "#FF6B6B",
          600: "#EE5253",
          700: "#b82526", // extrapolated
          800: "#940f10", // extrapolated
          900: "#610203", // extrapolated
        },
        green: {
          100: "#E8FBF4",
          200: "#B9F3DF", // 100+300
          300: "#8AEBCA",
          400: "#16D895",
          500: "#15C186", // 400+600
          600: "#14AA77",
          700: "#08875c", // extrapolated
          800: "#036946", // extrapolated
          900: "#01402a", // extrapolated
        },
        orange: {
          100: "#FFF6E4",
          200: "#FEE4AB",
          300: "#FECA57",
          400: "#FF9F43",
          500: "#eb8728", // extrapolated
          600: "#cc6d12", // extrapolated
          700: "#ab5707", // extrapolated
          800: "#8a4401", // extrapolated
          900: "#6b3400", // extrapolated
        },
        blackish: {
          900: "#212429",
        },
      },
      gridTemplateRows: {
        shell: "64px 1fr",
        "1fr-96px": "1fr 96px",
        "96px-1fr": "96px 1fr",
      },
      gridTemplateColumns: {
        "fill-72": "repeat(auto-fill, 18rem)",
        "fill-84": "repeat(auto-fill, 21rem)",
        "fill-48": "repeat(auto-fill, 12rem)",
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        30: "7.5rem",
        72: "18rem",
        74: "18.5rem",
        76: "19rem",
        84: "21rem",
        92: "23rem",
        100: "25rem",
        120: "30rem",
        208: "52rem",
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "1/6": "16.66%",
        "4/6": "66.66%",
        "16/9": "56.25%",
        "6/12": "50%",
        "9/12": "75%",
        "10/12": "83.33%",
        full: "100%",
      },
      height: {
        "screen-half": "50vh",
      },
      minHeight: {
        50: "12.5rem",
        120: "30rem",
      },
      maxHeight: {
        100: "25rem",
        "screen-half": "50vh",
      },
      maxWidth: {
        240: "60rem",
        article: "730px",
        "screen-3/4": "75vw",
        "screen-1/2": "50vw",
        "screen-2/3": "66.66vw",
      },
      animation: {
        wiggle: "300ms ease-in-out 3 wiggle",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      zIndex: {
        "nav-bar": "100",
        "menu-overlay": "150",
        "billing-overlay": "170",
        "in-modal": "200",
      },
      borderRadius: {
        inherit: "inherit",
        "4xl": "30px",
        "5xl": "40px",
        "15px": "15px",
        "20px": "20px",
        "30px": "30px",
      },
      borderWidth: {
        DEFAULT: "1.5px",
      },
      backgroundSize: {
        "100-100": "100% 100%",
        100: "100%",
        "auto-100": "auto 100%",
      },
      backgroundPosition: {
        "double-corners": "top left, bottom right",
        "double-side": "left, right",
      },
      listStyleType: {
        square: "square",
      },
      width: {
        "fit-content": "fit-content",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
