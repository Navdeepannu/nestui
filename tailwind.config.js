/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}", // <-- App Router folder
    "./components/**/*.{ts,tsx,js,jsx}", // your reusable components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
