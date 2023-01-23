const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js, jsx}",
    "./components/**/*.{html,js, jsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      backgroundImage: {
        pattern: "url('../public/mj.jpeg')",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 2s ease-out",
        "fade-in-down": "fade-in-down 2s ease-out",
        "fade-in": "fade-in 3s ease-out",
      },
      maxWidth: {
        "8xl": "1920px",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
