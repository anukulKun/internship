/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        greenLight: "#357937",
        greenDark: "#3f9142",
        greenExtraDark: "#142e15",
        lightTextColor: "#1B281B",
        lightSideBarBg: "#eef6ef",
        lightSidebarChild: "#fbfdfb",
        darkTheme: "#1F1F1F",
        darkTextColor: "#F5F5F5",
        darkGreenColor: "#347136",
        darkCheckboxFill: "#357937",
        darkBgPrimary: "#2F3630",
        darkBgSecondary: "#232323",
        darkSideBarBg: "#2c2c2c",
        darkSidebarItemActiveText: "#98E19B",
        darkSidebarItemActiveBg: "#34783729"
      },
      fontFamily: {
        "primary-text": "var(--primary-text-font-family)",
        "secondary-text": "var(--secondary-text-font-family)",
        "value-text": "var(--value-text-font-family)",
      },
    },
  },
  // "compilerOptions": {
  //   "baseUrl": ".",
  //   "paths": {
  //     "@/*": ["./src/*"]
  //   }
  // },
  plugins: [],
};
