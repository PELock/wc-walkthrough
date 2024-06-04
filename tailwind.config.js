/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/Home.js", "./src/components/WalkthroughPage.js"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

