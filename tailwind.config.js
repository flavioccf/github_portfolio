/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Nunito, sans-serif",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/cover.jpg')",
      },
      colors: {
        gray: {
          100: "#E1E1E6",
          300: "#C4C4CC",
          400: "#8D8D99",
          500: "#7C7C8A",
          600: "#323238",
          700: "#29292E",
          800: "#202024",
          900: "#121214",
        },

        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        red: {
          300: "#F75A68",
          500: "#AB222E",
          700: "#7A1921",
        },
        base: {
          blue: "#3294F8",
          background: "#071422",
          profile: "#0B1B2B",
          input: "#040F1A",
          title: "#E7EDF4",
          subtitle: "#C4D4E3",
          text: "#AFC2D4",
          span: "#7B96B2",
          label: "#3A536B",
          border: "#1C2F41",
          post: "#112131",
        },
      },
    },
  },
  plugins: [],
};
