/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white-c": "#FFFFFF",
      "yellow-c": "#FFE071",
      "yellow-d": "#FBD144",
      "gray-d": "#0C151D",
      "gray-md": "#3A3A3A",
      "gray-msd": "#19191B",
      "gray-sd": "#3D3D3D",
      "gray-dl": "#171F26",
      "gray-uld": "#575757",
      "gray-ml": "#D7D7D7",
      "gray-l": "#A3ABB2",
      "gray-sl": "#E5E5E5",
      "gray-ul": "#F1F2F4",
      "green-50": "#f0fdf4",
      "green-400": "#4ade80",
      "green-800": "#166534",
    },
    extend: {},
  },
  plugins: [],
};
