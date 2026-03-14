/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nature: ["'ZTNature'", "Georgia", "serif"],
      },
      colors: {
        "zinc-black": "#09090b",
        "surface-gray": "#18181b",
        "off-white": "#e5e5e5",
        "muted-gray": "#888888",
        highlight: "#ef4444",
      },
    },
  },
  plugins: [],
};
