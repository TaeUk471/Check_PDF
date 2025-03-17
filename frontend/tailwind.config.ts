module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./.storybook/**/*.{js,ts}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Interop: ["Interop", "sans-serif"],
      },
      colors: {
        black: "#1B1B1B",
        "gray-80": "#4B4B4B",
        "gray-75": "#535b60",
        "gray-70": "#79747E",
        "gray-60": "#A4A1AA",
        "gray-50": "#ADAEB8",
        "gray-40": "#CBC9CF",
        "gray-30": "#DDDDDD",
        "gray-20": "#EEEEEE",
        "gray-10": "#FAFAFA",
        "green-20": "#0B3B2D",
        "green-10": "#F1EFFD",
        "red-20": "#FF472E",
        "red-10": "#FFE4E0",
        "orange-20": "#FF7C1D",
        "orange-10": "#FFF4E8",
        yellow: "#FFC23D",
        "blue-30": "#0085FF",
        "blue-20": "#2EB4FF",
        "blue-10": "#E5F3FF",
      },
      height: {
        "75vh": "75vh",
      },
      scale: {
        73: "0.73",
        97: "0.97",
        99: "0.99",
        121: "1.21",
        145: "1.45",
      },
      boxShadow: {
        hover: "0 4px 8px rgba(0, 0, 0, 0.2)",
        "inner-select": "inset 4px 4px 10px rgba(0, 0, 0, 0.5)",
        "inner-2xl": "inset 0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        6: "1.5rem",
      },
      screens: {
        tb: "768px",
        pc: "1024px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shake: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "12.5%, 37.5%": { transform: "rotate(-5deg)" },
          "25%": { transform: "rotate(-10deg)" },
          "62.5%, 87.5%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        shake: "shake 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
