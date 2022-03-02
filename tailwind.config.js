module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        purply: "#000",
        pulp: "#FF7F50",
        pulpy: "#FFA500",
        palegreen: "#FF8C00",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
