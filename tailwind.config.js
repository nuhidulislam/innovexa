/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#9CE069", // সবুজ (Your Business টেক্সটের জন্য)
        secondary: "#FEFEFF", // সাদা
        dark: "#1e293b", // হেডিং কালার
        gray:"#6B7280",
        bgprimary: "#054240",
        bgsecondary: "#054240",
        bgthird: "#FFFDF1",
      },
    },
  },
  plugins: [require("daisyui")],
};
