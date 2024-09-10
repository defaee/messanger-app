/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: "400px",
      hsm: "500px",
      sm: "600px",
      hmd: "750px",
      md: "900px",
      hlg: "1050px",
      lg: "1250px",
      hxl: "1500px",
      xl: "1750px",
    },
    extend: {
      fontFamily: {
        draken: ["Draken", "sans-serif"], // Add your custom font
      },
      colors: {
        "bg-color": "#ffffff",
        "shadow-color": "#000000",
        "text-color": "#000000",
        "primary-color": "#1e40af",
      },
    },
  },
  plugins: [],
};
