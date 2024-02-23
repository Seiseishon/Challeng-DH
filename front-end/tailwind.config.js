/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'repeat': 'repeat(auto-fill, minmax(280px, 1fr))'
      },
      colors: {
        modeDark: {
          6: "#032030",
          5: "#022B42",
          4: "#003554",
          3: "#004D74",
          2: "#006494",
          1: "#006DA4",
        },
        modeLight: {
          6: "#F0F3FA",
          5: "#D5DEEF",
          4: "#B1C9EF",
          3: "#8AAEE0",
          2: "#638ECB",
          1: "#395886",
        },
      },
      backgroundColor: {
        modeDark: {
          6: "#032030",
          5: "#022B42",
          4: "#003554",
          3: "#004D74",
          2: "#006494",
          1: "#006DA4",
        },
        modeLight: {
          6: "#F0F3FA",
          5: "#D5DEEF",
          4: "#B1C9EF",
          3: "#8AAEE0",
          2: "#638ECB",
          1: "#395886",
        },
      },
    },
  },
  plugins: [],
};
