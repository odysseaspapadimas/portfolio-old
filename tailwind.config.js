module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#365ed9",
        "secondary-hover": "#2b4cb3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
